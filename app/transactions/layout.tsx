import React, { PropsWithChildren } from 'react';
import Header from '@/app/dashboard/components/Header';
import Footer from '@/app/dashboard/components/Footer';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className='w-full h-full m-auto flex flex-col rounded-xl overflow-hidden'>
        <Header />
        <main className='flex flex-row flex-1 bg-3 p-4 h-40 gap-2'>
            <span className='flex-1'>{children}</span>
        </main>
        <Footer />
    </div>
}

export default Layout;