import React from 'react'

import { Error, Oops, Success } from '../components/alerts'
import Styles from '../styles/alerts.module.css'

export default function Screen() {
    return (
        <div className={Styles.container}>
            <button type="button" onClick={Error} className={Styles.error}>Erro !</button>
            <button type="button" onClick={Oops} className={Styles.oops}>Oops !</button>
            <button type="button" onClick={Success} className={Styles.success}>Sucessagem garantida  !</button>

        </div>
    )
}