'use client'

import Input from "@/components/common/Input";
import { createRequest } from "@/lib/actions/requests";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
    description: string;
    price: number;
}

type Props = {
    handleDismiss: () => void;
}

export default function Modal({ handleDismiss }: Props) {
    const t = useTranslations();

    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    const { register, handleSubmit, formState, reset } = useForm<FormFields>({
        mode: 'onChange',
        defaultValues: {
            description: '',
            price: undefined,
        }
    });

    const onSubmit: SubmitHandler<FormFields> = async (formValues) => {
        // TODO: Add error handler
        await createRequest(formValues);
        reset();
    };

    useEffect(() => {
        if (!dialogRef?.current?.open) {
            dialogRef?.current?.showModal()
        }
    }, [])

    return createPortal(<dialog ref={dialogRef} className="bg-3 max-w-xl w-full rounded-md py-5" onClose={handleDismiss}>
        <button onClick={handleDismiss} className="absolute w-5 h-5 right-4 top-4 text-sm hover:underline">
            <Image src='/close.svg' width={20} height={20} alt='close' />
        </button>
        <h1 className="text-center text-xl">{t('dashboard.modal.newRequest.header')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 flex flex-col gap-4">
            <Input {...register('description', { required: true })} type="text" label={t('dashboard.modal.newRequest.form.description')} />
            <Input {...register('price', { required: true, min: 1, valueAsNumber: true })} type="number" min={0} label={t('dashboard.modal.newRequest.form.price')} />
            <button disabled={!formState.isValid} className="mt-3 px-3 py-2 w-full max-w-40 bg-1 hover:bg-2 disabled:hover:bg-1 disabled:opacity-15 transition-colors w-fit text-white m-auto rounded text-xl">{t('components.buttons.submit')}</button>
        </form>
    </dialog>, document.getElementById('modal-root')!);
}