'use client'

import React from 'react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const logout = () => {
        deleteCookie('role');
        router.push('/login');
    }

    return <button onClick={logout} className='absolute right-2 top-2.5 w-5 h-5'>
        <span className='material-icons text-base'>logout</span>
    </button>
}

export default LogoutButton;