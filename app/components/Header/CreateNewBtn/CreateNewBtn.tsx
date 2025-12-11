import { Button } from '@mui/material'
import styles from './CreateNewBtn.module.css'
import React from 'react'

export default function CreateNewBtn() {
    return (
        <>
            <Button className={styles.btn} variant='contained' sx={{ background: '#38A95C' }}>
                <a href="/create">食材登録</a>
            </Button>
        </>
    )
}
