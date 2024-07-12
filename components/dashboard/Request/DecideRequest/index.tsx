'use client'

import React, { useMemo } from 'react';
import { Request as RequestType } from '@/lib/api/requests/type';
import Button from '@/components/common/Button';
import { updateRequest } from '@/lib/actions/requests';
import { useTranslations } from 'next-intl';
import Request from '@/components/dashboard/Request';

type Props = RequestType;

export default function DecideRequest({ id, price, description }: Props) {
    const t = useTranslations('components');

    const buttons = useMemo(() => [
        <Button key="button-accept" onClick={() => updateRequest(id, { allowed: true, decided: true })} className='bg-green-700 hover:bg-green-600'>{t('buttons.accept')}</Button>,
        <Button key="button-reject" onClick={() => updateRequest(id, { allowed: false, decided: true })} className='bg-red-800 hover:bg-red-600'>{t('buttons.decline')}</Button>
    ], [id, t]);

    return <Request buttons={buttons} description={description} price={price} />
}
