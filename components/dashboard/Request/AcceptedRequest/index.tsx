'use client'

import { useMemo } from "react";
import Button from "@/components/common/Button";
import Request from "@/components/dashboard/Request";
import { executeRequest } from "@/lib/actions/requests";
import { Request as RequestType } from "@/lib/api/requests/type";
import { useTranslations } from "next-intl";

type Props = RequestType

export default function AcceptedRequest({ description, price, id }: Props) {
    const t = useTranslations('components.buttons');

    const buttons = useMemo(() => [
        <Button onClick={() => executeRequest(id)} className='bg-green-600 hover:bg-green-500 w-full' key={'buy'}>{t('buy')}</Button>
    ], [id, t]);

    return <Request buttons={buttons} description={description} price={price} />
}