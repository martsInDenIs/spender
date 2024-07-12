import React from 'react';
import List from '@/components/common/List';
import Transaction from '@/components/dashboard/Transaction';
import { getTransactions } from '@/lib/api/transactions/api';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
    const t = await getTranslations('transactions');

    const transactions = await getTransactions();

    return <section className='text-white flex flex-col items-center justify-center w-full h-full'>
        <div className='w-full mb-5 text-black'>
            <h1 className='text-5xl mt-5 text-center mb-5'>{t('header')}</h1>
            <hr className='border-black' />
        </div>
        <List className='w-full h-40'>
            {transactions?.map((transaction) => <Transaction {...transaction} key={transaction.id} />)}
        </List>
    </section >
}
