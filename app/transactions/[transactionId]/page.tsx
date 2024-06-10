import React from 'react';
import { getTransactionById } from '@/app/api/transactions/api';

type Props = {
    params: {
        transactionId: number;
    }
}

const Page: React.FC<Props> = async ({ params: { transactionId } }) => {
    const transaction = await getTransactionById(transactionId);

    return <div>
        <h1 className='text-7xl text-center mb-4'>Transaction Info</h1>
        <hr className=' border-black' />

        <ul className='text-4xl ml-10 mt-10 flex flex-col gap-5 list-disc' >
            {Object.entries(transaction).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
        </ul>
    </div>
}

export default Page;