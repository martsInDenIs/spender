'use client'

import Button from '@/components/common/Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react';

const CreateRequest: React.FC = () => {
    const t = useTranslations('components.buttons');
    const router = useRouter();

    const handleClick = () => {
        router.push('/requests/new');
    };

    return <Button onClick={handleClick} className='hover:bg-slate-500 rounded-xl underline'>{t('new_request')}</Button>
}

export default CreateRequest;