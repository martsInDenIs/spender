import { Transaction as TransactionType } from '@/lib/api/transactions/types';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';

type Props = TransactionType;

export default async function Transaction({
    id,
    description,
    price
}: Props) {
    const t = await getTranslations('components.links');

    return <div className='bg-2 p-2 rounded-md'>
        <h1 className='font-semibold'>{description}</h1>
        <div className='flex items-center justify-between'>
            <p className='text-sm'>{price}$</p>
            <Link className='text-xs hover:underline' href={`/transactions/${id}`}>{t('more')}</Link>
        </div>
    </div>
}
