# Windows DLL search path
#tech/platform/windows

With both implicit and explicit linking, Windows first searches for "known DLLs", such as `Kernel32.dll` and `User32.dll`. Windows then searches for the DLLs in the following sequence:

1. The directory where the executable module for the current process is located.
2. The current directory.
3. The Windows system directory. The `GetSystemDirectory` function retrieves the path of this directory.
4. The Windows directory. The `GetWindowsDirectory` function retrieves the path of this directory.
5. The directories listed in the PATH environment variable.

---

[Source](https://msdn.microsoft.com/en-gb/library/7d83bc18.aspx)
