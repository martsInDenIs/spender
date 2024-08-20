'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import { FormFields } from "./types"
import { useTranslations } from "next-intl"
import Checkbox from "@/components/common/Input/Checkbox"
import { useCallback } from "react"
import { ROLE_NAMES } from "@/lib/services/role/constants"

type Props = {
    onSubmit: (role: ROLE_NAMES) => void
}

export default function LoginForm({ onSubmit }: Props) {
    const t = useTranslations();

    const submitHandler: SubmitHandler<FormFields> = useCallback(({ role }) => {
        onSubmit(role!);
    }, [onSubmit]);

    const { register, handleSubmit, formState } = useForm<FormFields>({
        mode: 'onChange',
        defaultValues: {
            role: null,
        }
    })

    return <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-2'>
        <Checkbox {...register('role', { required: true })} value={ROLE_NAMES.PARENT} label={t('login.form.sugarDM')} />
        <Checkbox {...register('role', { required: true })} value={ROLE_NAMES.CHILD} label={t('login.form.sugarPartner')} />
        <button disabled={!formState.isValid} className='bg-2 text-white mt-8 w-fit m-auto px-20 rounded disabled:hover:bg-2 disabled:opacity-15 hover:bg-4 transition-colors'>{t('components.buttons.submit')}</button>
    </form>
}