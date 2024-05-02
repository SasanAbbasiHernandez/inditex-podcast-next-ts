'use client';

import Link from 'next/link';

import { useData } from '@/hooks/useData';

import '../styles/components/header.scss';

export const Header = () => {

    const {
        loader
      } = useData();

    return (
        <header>
            <Link href={'/'}>
                <span>Podcaster</span>
            </Link>
            {loader && (
                <div className="loader"></div>
            )}
        </header>
    )
};