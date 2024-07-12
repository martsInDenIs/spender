'use client'

import { useMemo } from "react";
import { Request as RequestType } from "@/lib/api/requests/type"
import Request from "@/components/dashboard/Request"
import Button from "@/components/common/Button"
import { executeRequest, updateRequest } from "@/lib/actions/requests";
import { useTranslations } from "next-intl";

type Props = RequestType

export default function RejectedRequest({ description, price, id }: Props) {
    const t = useTranslations('components.buttons');

    const buttons = useMemo(() => [
        <Button onClick={() => updateRequest(id, { decided: false })} className='bg-slate-500 hover:bg-slate-400' key="tryAgain">{t('ask_again')}</Button>,
        <Button onClick={() => executeRequest(id)} className='bg-red-700 hover:bg-red-600' key="stillBuy">{t('still_buy')}</Button>],
        [id]
    );

    return <Request buttons={buttons} description={description} price={price} />
}