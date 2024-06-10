import { getTransactions } from '@/app/api/transactions/api';
import { Modal } from './modal';
import { redirect } from 'next/navigation';

export default async function TransactionModal({
    params: { transactionId },
}: {
    params: { transactionId: string };
}) {
    // Cached data. Load it in the dashboard page.tsx file
    const transactions = await getTransactions();

    const transaction = transactions.find((transaction) => transaction.id === transactionId)

    if (!transaction) {
        redirect('/dashboard');
    }

    return <Modal transaction={transaction} />;
}