import React from 'react';
import { getTransactionById } from '@/lib/api/transactions/api';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: {
        transactionId: number;
    }
}

export default async function Page({ params: { transactionId } }: Props) {
    const t = await getTranslations('transactions.transaction');
    const transaction = await getTransactionById(transactionId);

    return <div>
        <h1 className='text-7xl text-center mb-4'>{t('info')}</h1>
        <hr className=' border-black' />

        <ul className='text-4xl ml-10 mt-10 flex flex-col gap-5 list-disc' >
            {transaction && Object.entries(transaction).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
        </ul>
    </div>
}