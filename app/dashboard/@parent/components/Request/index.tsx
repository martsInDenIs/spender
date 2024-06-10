import React from 'react';
import { Request as RequestType } from '@/app/api/requests/type';
import Button from '@/app/components/Button';

type Props = RequestType;

const Request: React.FC<Props> = ({ price, description }) => {
    return <section className='bg-2 p-2 rounded-md'>
        <h1 className='text-center text-xl'>{description}</h1>
        <hr className='mb-2 mt-1' />
        <div className='flex items-center justify-center gap-5'>
            <p>{price}</p>
            <Button className='bg-green-700 hover:bg-green-600'>Accept</Button>
            <Button className='bg-red-800 hover:bg-red-600'>Decline</Button>
        </div>
    </section>
}

export default Request;