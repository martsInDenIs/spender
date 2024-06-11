'use client';

import React, { type ElementRef, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { Transaction } from '@/app/api/transactions/types';
import Image from 'next/image';
import CloseIcon from '@/public/close.svg';

type Props = {
  transaction: Transaction;
}

export const Modal: React.FC<Props> = ({ transaction }) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  const list = useMemo(() => Object.entries(transaction).map(([key, value]) => <li className='text-xl' key={key}>{key}: {value}</li>), [transaction])

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = () => {
    router.back();
  }

  return createPortal(
    <dialog ref={dialogRef} className="w-3/4 bg-3 p-5 pt-10 rounded-xl shadow-2xl" onClose={onDismiss}>
      <button onClick={onDismiss} className="absolute w-5 h-5 right-4 top-4 text-sm hover:underline"><Image src={CloseIcon} alt='close' /></button>
      <h1 className='text-5xl text-center mb-4'>Transaction Info</h1>
      <hr className=' border-black' />

      <ul className='flex gap-10 items-center justify-center mt-5'>
        {list}
      </ul>
    </dialog>,
    document.getElementById('modal-root')!
  );
}