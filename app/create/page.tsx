import React from 'react'
import styles from './page.module.css'
import Modal from '@/app/components/forms/Modal'

export default function page() {
    return (
        <>
            <div className={styles.heading}>食材登録</div>
            <Modal />
        </>
    )
}
