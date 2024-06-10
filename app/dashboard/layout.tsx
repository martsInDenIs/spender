import React from 'react';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers'
import { ROLE } from '@/app/types';
import Header from '@/app/dashboard/components/Header';
import Footer from '@/app/dashboard/components/Footer';

type Props = Readonly<{
    children: React.ReactNode;
    parent: React.ReactNode;
    modal: React.ReactNode;
    child: React.ReactNode;
}>

const Layout: React.FC<Props> = ({
    children,
    parent,
    modal,
    child
}) => {
    const role = getCookie('role', { cookies });

    return <div className='w-full h-full m-auto flex flex-col rounded-xl overflow-hidden'>
        <Header />
        <main className='flex flex-row flex-1 bg-3 p-4 h-40 gap-2'>
            <span className='flex-1'>{children}</span>
            <span className='flex-1'>{role === ROLE.PARENT ? parent : child}</span>

            {modal}
            <div id="modal-root" />
        </main>
        <Footer />
    </div>
};

export default Layout;