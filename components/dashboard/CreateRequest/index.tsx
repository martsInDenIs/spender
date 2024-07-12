'use client'

import Button from '@/components/common/Button';
import { useTranslations } from 'next-intl';
import Modal from '@/components/dashboard/sugarPartner/Modal';
import { createPortal } from 'react-dom';
import { useCallback, useState } from 'react';

export default function CreateRequest() {
    const t = useTranslations('components.buttons');

    const [doCreatePortal, setDoCreatePortal] = useState(false);

    const handleClick = useCallback(() => {
        setDoCreatePortal(true);
    }, []);

    const handleDismiss = useCallback(() => {
        setDoCreatePortal(false);
    }, [])

    return <>
        <Button onClick={handleClick} className='hover:bg-slate-500 rounded-xl underline'>{t('new_request')}</Button>
        {doCreatePortal && createPortal(<Modal handleDismiss={handleDismiss} />, document.getElementById('modal-root')!)}
    </>
}
