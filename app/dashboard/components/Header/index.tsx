import Link from 'next/link';
import React from 'react';
import LogoutButton from './LogoutButton';


const Header: React.FC = () => {
    return <header className='h-12 bg-2 text-center text-lg flex items-center justify-center text-white shrink-0 relative'>
        <ul className='list-none flex gap-5 [&>li:hover]:underline'>
            <li>
                <Link href='/dashboard'>Dashboard</Link>
            </li>
            <li>
                <Link href='/transactions'>Transactions</Link>
            </li>

            <LogoutButton />
        </ul>
    </header >
}

export default Header;