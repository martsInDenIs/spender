'use client'

import { logout } from '@/lib/actions/login';

export default function LogoutButton() {
    return <button onClick={() => logout()} className='absolute right-2 top-2.5 w-5 h-5'>
        <span className='material-icons text-base'>logout</span>
    </button>
}

