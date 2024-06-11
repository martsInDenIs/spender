'use client'

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { logout as serverLogout } from '@/app/actions';

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const logout = useCallback(() => {
        serverLogout();
    }, [])

    return <button onClick={logout} className='absolute right-2 top-2.5 w-5 h-5'>
        <span className='material-icons text-base'>logout</span>
    </button>
}

export default LogoutButton;