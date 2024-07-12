import React from 'react';
import { notoSans } from '@/app/fonts';
import { login } from '@/lib/actions/login';
import Language from '@/components/common/Language';
import { getLocale, getTranslations } from 'next-intl/server';
import LoginForm from '@/components/login/form';

export default async function Page() {
    const lang = await getLocale();

    const t = await getTranslations();

    return <main className='w-full h-full max-w-3xl max-h-80 bg-3 rounded-xl flex flex-col items-center p-10 relative'>
        <Language className='!absolute right-2 top-2 [&_*]:!rounded-md' lang={lang} />

        <h1 className='mb-10 text-3xl'>{t('login.header')}</h1>
        <div className={`${notoSans.className}`}>
            <LoginForm onSubmit={login} />
        </div>
    </main>;
}