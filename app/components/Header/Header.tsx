import styles from './Header.module.css'

import React, { ReactNode } from 'react'
import BasicAutocomplete from './Search/Seach'
import CreateNewBtn from './CreateNewBtn/CreateNewBtn'
import Link from 'next/link'


export default function Header({ children }: { children?: ReactNode }) {
    return (
        <>
            <div className={styles.headerWrap}>
                <Link href="/"><img className={styles.logo} src='/logo.png' /></Link>
                <div className={styles.btnWrap}>
                    <BasicAutocomplete />
                    <CreateNewBtn />
                </div>
            </div>
        </>
    )
}
