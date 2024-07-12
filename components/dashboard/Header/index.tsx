import Link from 'next/link';
import React from 'react';
import LogoutButton from './LogoutButton';
import { ROLE } from '@/app/types';
import { cookies } from 'next/headers';
import { getLocale, getTranslations } from 'next-intl/server';
import Language from '@/components/common/Language';

function getNavigationList(translation: Awaited<ReturnType<typeof getTranslations<string>>>): Record<string, { href: string, title: string }[]> {
    return {
        [ROLE.PARENT]: [
            {
                href: '/dashboard',
                title: translation('navigation.dashboard'),
            },
            {
                href: '/transactions',
                title: translation('navigation.transactions'),
            },
            {
                href: '/requests',
                title: translation('navigation.requests')
            }
        ],
        [ROLE.CHILD]: [
            {
                href: '/dashboard',
                title: translation('navigation.dashboard')
            },
            {
                href: '/transactions',
                title: translation('navigation.transactions'),
            },
            {
                href: '/requests',
                title: translation('navigation.requests')
            }
        ]
    }
}

/** TODO: Move to common components */
export default async function Header() {
    const lang = await getLocale();
    const role = cookies().get('role');

    const t = await getTranslations('components');
    const navigationList = getNavigationList(t);


    return <header className='h-12 bg-2 text-center text-lg flex items-center justify-center text-white shrink-0 relative'>
        <ul className='list-none flex gap-5 [&>li:hover]:underline'>
            {!!role && <Language className='!absolute left-1.5 top-1.5' lang={lang} />}
            {role && navigationList[role.value]?.map((item, index) => <li key={index}><Link href={item.href}>{item.title}</Link></li>)}
            <LogoutButton />
        </ul>
    </header >
}

