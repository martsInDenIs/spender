import React from 'react';
import List from '../components/List';
import Transaction from '../dashboard/components/Transaction';
import { getTransactions } from '../api/transactions/api';

const Page: React.FC = async () => {
    const transactions = await getTransactions();

    return <section className='text-white flex flex-col items-center justify-center w-full h-full'>
        <div className='w-full mb-5'>
            <h1 className='text-5xl mt-5 text-center mb-5'>Transaction list</h1>
            <hr />
        </div>
        <List className='w-full h-40'>
            {transactions.map((transaction) => <Transaction {...transaction} key={transaction.id} />)}
        </List>
    </section >
}

export default Page;