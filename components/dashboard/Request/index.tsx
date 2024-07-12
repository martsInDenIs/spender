import React from 'react';
import { Request as RequestType } from '@/lib/api/requests/type';

type Props = Pick<RequestType, 'description' | 'price'> & {
    buttons: React.ReactNode[]
};

export default function Request({ description, price, buttons }: Props) {
    return <div className='bg-2 p-2 rounded-md'>
        <div>
            <p className='text-center text-xl mb-1 flex gap-2 justify-between'>
                <span>{description}</span>
                <span>{price}$</span>
            </p>
            <hr />
        </div>
        <div className='flex items-center justify-center mt-2 gap-2 [&>button]:flex-1'>
            {buttons}
        </div>
    </div>
};