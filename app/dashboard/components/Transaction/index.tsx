import { Transaction as TransactionType } from '@/app/api/transactions/types';
import Link from 'next/link';
import React from 'react';

type Props = TransactionType;

const Transaction: React.FC<Props> = ({
    id,
    description,
    price
}) => {
    return <div className='bg-2 p-2 rounded-md'>
        <h1 className='font-semibold'>{description}</h1>
        <div className='flex items-center justify-between'>
            <p className='text-sm'>{price}</p>
            <Link className='text-xs hover:underline' href={`/transactions/${id}`}>see more</Link>
        </div>
    </div>
}

export default Transaction;