# Moratorium Onboarding - Journey Wiring Current Status
```mermaid
flowchart TD;		
	Index -- Create new Breathing Space --> ClientDetails;		
	ClientDetails -- Save and continue --> ClientNamesSummary;	
	ClientNamesSummary  -- Save and continue --> DebtorPostcode;
	DebtorPostcode -- Find Address --> DebtorAddresses;
	DebtorAddresses --> DebtorContactPreference;
	DebtorContactPreference --> DebtorBusinessDetails;
	DebtorBusinessDetails --> DebtorConfirmDetails;
	DebtorConfirmDetails --> DebtorAccountSummary;
	DebtorAccountSummary --> DebtorAccountSave;
	DebtorAccountSave --> DebtorBreathingSpaceType;
	DebtorBreathingSpaceType --> DebtorDeclaration;
	DebtorDeclaration --> DebtorAccountConfirmation;
	DebtorAccountConfirmation --x Index;
		

	ClientNamesSummary -- Add Previous Name --> ClientAddPreviousName;
	ClientAddPreviousName -- OnPost Error --> ClientAddPreviousName;
	ClientAddPreviousName --> ClientNamesSummary;
	
	DebtorAddresses -- Add Previous Address --> DebtorPreviousAddress;
	DebtorPreviousAddress -- OnPost Error --> DebtorPreviousAddress;
	DebtorPreviousAddress --> DebtorPreviousAddressManual
	DebtorPreviousAddressManual -- OnPost Error --> DebtorPreviousAddressManual;
	DebtorPreviousAddressManual --> DebtorAddresses;
	DebtorPreviousAddress --> DebtorAddresses;
	
	DebtorBusinessDetails -- Add Business --> DebtorAddBusiness;
	DebtorAddBusiness -- OnPost Error --> DebtorAddBusiness;
	DebtorAddBusiness --> DebtorBusinessDetails;
	
	DebtorAddBusiness --> DebtorAddBusinessAddress;
	DebtorAddBusinessAddress -- OnPost Error --> DebtorAddBusinessAddress;
	DebtorAddBusinessAddress --> DebtorBusinessDetails;
	
	DebtorAddBusinessAddress --> DebtorAddBusinessAddressManual;
	DebtorAddBusinessAddressManual -- OnPost Error --> DebtorAddBusinessAddressManual;
	DebtorAddBusinessAddressManual --> DebtorBusinessDetails;
	
	ClientDetails -- OnPost Error --> ClientDetails;		
	DebtorPostcode -- OnPost Error --> DebtorPostcode;
	DebtorPostcode --> DebtorManualAddressSubmit;
	DebtorManualAddressSubmit -- OnPost Error --> DebtorManualAddressSubmit;
	DebtorManualAddressSubmit --> DebtorAddresses;
	DebtorContactPreference -- OnPost Error --> DebtorContactPreference;
	DebtorBusinessDetails -- OnPost Error --> DebtorBusinessDetails;
	DebtorAccountSave -- OnPost Error --> DebtorAccountSave;
	DebtorBreathingSpaceType -- OnPost Error --> DebtorBreathingSpaceType;
```
