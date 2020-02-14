### Atanas Pashkov <dgaduin@gmail.com>

Thu, 16 Apr, 15:48 (6 days ago)

![](https://mail.google.com/mail/u/0/images/cleardot.gif)

![](https://mail.google.com/mail/u/0/images/cleardot.gif)

to me

![](https://mail.google.com/mail/u/0/images/cleardot.gif)

using System;  
using System.Collections.Generic;  
using System.Security.Cryptography;  
using System.Security.Cryptography.X509Certificates;  
using System.Text;  

using GRG.OpenBanking.API.Models;  
using GRG.OpenBanking.API.Settings;  

using Microsoft.Extensions.Options;  
using Microsoft.IdentityModel.Tokens;  

using Org.BouncyCastle.Crypto.Digests;  
using Org.BouncyCastle.Crypto.Encodings;  
using Org.BouncyCastle.Crypto.Engines;  
using Org.BouncyCastle.Crypto.Modes;  
using Org.BouncyCastle.Crypto.Parameters;  
using Org.BouncyCastle.Security;  

namespace GRG.OpenBanking.API.Services  
{  
    public class EncryptionService : IEncryptionService  
    {  
#pragma warning disable IDE1006 // Naming Styles  
        private const byte AES_IV_SIZE = 16;  
        private const byte GCM_TAG_SIZE = 16;  
        private const int DEFAULT_RSA_BLOCK_SIZE = 190;  
        private const string DEFAULT_AES_ALGORITHM = "AES/GCM/NoPadding";  
        private const string DEFAULT_RSA_ALGORITHM = "RSA/ECB/OAEPWithSHA-256AndMGF1Padding";  
#pragma warning restore IDE1006 // Naming Styles  

        private readonly SecuritySettings _settings;  
        private byte[] _encryptionKey;  
        private byte[] _signingKey;  
        public EncryptionService(IOptions<SecuritySettings> options)  
        {  
            _settings = options.Value;  
            LoadCerts();  
        }  

        public EncryptedSealedMessage EncryptRsaAes(string payload)  
        {  
            var (Key, IV) = GenerateAesSecretKey();  
            var text = EncyrptAes(payload, Key, IV);  
            var encryptedAesKey = EncryptRSA(Base64UrlEncoder.Encode(Key), _encryptionKey);  
            var signature = SignE25519(text, _signingKey);  

            return new EncryptedSealedMessage  
            {  
                Ciphertext = text,  
                RsaAes = new RsaAesMethod  
                {  
                    RsaKeyId = KeyIdFor(_encryptionKey),  
                    RsaAlgorithm = DEFAULT_RSA_ALGORITHM,  
                    EncryptedAesKey = encryptedAesKey,  
                    AesAlgorithm = DEFAULT_AES_ALGORITHM,  
                    SignatureKeyId = KeyIdFor(_signingKey),  
                    Signature = signature  
                }  
            };  
        }  

        private static string EncryptRSA(string text, byte[] encryptionKey)  
        {  
            var bytes = Encoding.UTF8.GetBytes(text);  
            var val = new OaepEncoding(new RsaEngine(), new Sha256Digest(), new Sha1Digest(), null);  
            var val2 = PublicKeyFactory.CreateKey(encryptionKey);  
            val.Init(true, val2);  
            var num2 = bytes.Length;  
            var list = new List<byte>();  
            for (var i = 0; i < num2; i += DEFAULT_RSA_BLOCK_SIZE)  
            {  
                var num3 = Math.Min(DEFAULT_RSA_BLOCK_SIZE, num2 - i);  
                list.AddRange(val.ProcessBlock(bytes, i, num3));  
            }  
            return Base64UrlEncoder.Encode(list.ToArray());  
        }  

        private static string EncyrptAes(string text, byte[] key, byte[] iv)  
        {  
            var bytes = Encoding.UTF8.GetBytes(text);  
            var val = new GcmBlockCipher(new AesEngine());  
            var val2 = new AeadParameters(new KeyParameter(key), AES_IV_SIZE * 8, iv, null);  
            val.Init(true, val2);  
            var array2 = new byte[val.GetOutputSize(bytes.Length)];  
            var num = val.ProcessBytes(bytes, 0, bytes.Length, array2, 0);  
            val.DoFinal(array2, num);  
            var array3 = new byte[array2.Length + AES_IV_SIZE + 2];  
            array3[0] = AES_IV_SIZE;  
            array3[1] = GCM_TAG_SIZE;  
            Array.Copy(iv, 0, array3, 2, AES_IV_SIZE);  
            Array.Copy(array2, 0, array3, AES_IV_SIZE + 2, array2.Length);  
            return Base64UrlEncoder.Encode(array3);  
        }  

        private static (byte[] Key, byte[] IV) GenerateAesSecretKey()  
        {  
            using var aesCryptoServiceProvider = new AesCryptoServiceProvider  
            {  
                KeySize = 128,  
                BlockSize = 128  
            };  

            aesCryptoServiceProvider.GenerateKey();  
            var key = aesCryptoServiceProvider.Key;  
            var iv = aesCryptoServiceProvider.IV;  
            return (key, iv);  
        }  

        private static string KeyIdFor(byte[] key) => Base64UrlEncoder.Encode(SHA256.Create().ComputeHash(key)).Substring(0, 16);  

        private static string SignE25519(string payload, byte[] privateKey)  
        {  
            var signer = SignerUtilities.GetSigner("Ed25519");  
            signer.Init(true, new Ed25519PrivateKeyParameters(privateKey, 0));  
            var bytes = Encoding.UTF8.GetBytes(payload);  
            signer.Reset();  
            signer.BlockUpdate(bytes, 0, bytes.Length);  
            return Base64UrlEncoder.Encode(signer.GenerateSignature());  
        }  

        private void LoadCerts()  
        {  
            var store = new X509Store(_settings.CertificateStoreName, _settings.CertificateStoreLocation);  
            store.Open(OpenFlags.ReadOnly);  

            var encrytingCert = store.Certificates.Find(X509FindType.FindByThumbprint, _settings.EncryptingCertificateThumbprint, false)[0];  

            var signingCert = store.Certificates.Find(X509FindType.FindByThumbprint, _settings.SigningCertificateThumbprint, false)[0];  
            store.Close();  
            _encryptionKey = encrytingCert.PublicKey.Key.ExportSubjectPublicKeyInfo();  
            _signingKey = ((RSACng)signingCert.PrivateKey).ExportRSAPrivateKey();  
        }  
    }  
}  

Atanas Pashkov

Senior Full-stack Developer

[atanas.pashkov@gmail.com](mailto:atanas.pashkov@gmail.com)

+447764705701
