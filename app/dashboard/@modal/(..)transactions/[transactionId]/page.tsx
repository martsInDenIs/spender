import { getTransactions } from '@/lib/api/transactions/api';
import Modal from './modal';
import { redirect } from 'next/navigation';

export default async function TransactionModal({
    params: { transactionId },
}: {
    params: { transactionId: string };
}) {
    const transactions = await getTransactions();

    const transaction = transactions?.find((transaction) => transaction.id === Number(transactionId))

    if (!transaction) {
        redirect('/dashboard');
    }

    return <Modal transaction={transaction} />;
}