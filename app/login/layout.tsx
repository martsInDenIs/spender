import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
    return <div className='flex justify-center mt-20'>{children}</div>;
};

