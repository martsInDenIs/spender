import React from 'react';
import List from '@/app/components/List';
import Transaction from '@/app/dashboard/components/Transaction';
import { getTransactions } from '../api/transactions/api';

const Page: React.FC = async () => {
    const transactions = await getTransactions();

    return <section className='bg-4 h-full rounded-md text-white flex flex-col gap-6 p-4 pt-10'>
        <div className='text-center flex flex-col gap-2'>
            <h1 className='text-5xl'>Your account`s money</h1>
            <p className='text-3xl'>20.000$</p>
            <hr />
        </div>
        <List>
            {transactions.map((transaction) => <Transaction {...transaction} key={transaction.id} />)}
        </List>
    </section>
    {/** TODO: Move footer to the layout with my contact info */ }
};

export default Page;