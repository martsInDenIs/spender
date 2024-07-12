import React from 'react';
import Image from 'next/image';
import LinkedIn from '@/public/linkedIn.svg';
import Telegram from "@/public/telegram.svg";
import GitHub from '@/public/github.svg';
import Link from 'next/link';

const Footer: React.FC = () => {
    return <footer className='h-16 text-center bg-2 text-white flex items-center justify-between px-4 shrink-0'>
        <div className='flex gap-2 items-end'>
            <div className='text-md'>Martsyn Denys</div>
            <div className='text-sm'>&#169; 2024</div>

            <div className='text-xs'>icons by <Link target="_blank" href="https://icons8.com">Icons8</Link></div>
        </div>
        <div className='flex gap-4 items-center'>
            <Link target='_blank' href="https://www.linkedin.com/in/denys-martsyn/">
                <Image alt='LinkedIn' src={LinkedIn} width={20} height={20} />
            </Link>
            <Link target='_blank' href="https://t.me/EvMorty">
                <Image alt='Telegram' src={Telegram} width={20} height={20} />
            </Link>
            <Link target='_blank' href="https://github.com/martsInDenIs">
                <Image alt='GitHub' src={GitHub} width={25} height={25} />
            </Link>
        </div>
    </footer>
};

export default Footer;