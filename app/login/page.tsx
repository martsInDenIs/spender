"use client"

import React from 'react';
import { notoSans } from '@/app/fonts';
import { SubmitHandler, useForm } from 'react-hook-form';
import Checkbox from '@/app/login/components/Checkbox';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { ROLE } from '@/app/types';

type FormFields = {
    role: ROLE | null;
}

const Page: React.FC = () => {
    const redirect = useRouter();

    const onSubmit: SubmitHandler<FormFields> = ({ role }) => {
        setCookie('role', role);
        redirect.push('/');
    };

    const { register, handleSubmit, formState } = useForm<FormFields>({
        mode: 'onChange',
        defaultValues: {
            role: null,
        }
    })

    return <main className='w-full h-full max-w-3xl max-h-80 bg-3 rounded-xl flex flex-col items-center p-10'>
        <h1 className='mb-10 text-3xl'>Choise your role</h1>
        <div className={`${notoSans.className}`}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                <Checkbox {...register('role', { required: true })} value={ROLE.PARENT} label="Sugar Daddy/Mommy" />
                <Checkbox {...register('role', { required: true })} value={ROLE.CHILD} label="Sugar Daddy`s/Mommy`s partner" />
                <button disabled={!formState.isValid} className='bg-2 text-white mt-8 w-fit m-auto px-20 rounded disabled:hover:bg-2 disabled:opacity-15 hover:bg-4 transition-colors'>Submit</button>
            </form>
        </div>
    </main>;
}

export default Page;