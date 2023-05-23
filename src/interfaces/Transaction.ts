export interface Transaction {
    internalTransactionId: string;
    creditorName: string;
    creditorAccount: {
        iban: string;
    };
    transactionAmount: {
        amount: string;
        currency: string;
    };
    bookingDate: string;
    remittanceInformationUnstructured?: string;
    remittanceInformationStructured?: string;
}
