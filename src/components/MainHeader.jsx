import React from 'react'
import logo from '../images/logo_main.png'
import mainphoto from '../images/h_banner_main.png'
import styles from './MainHeader.module.css'

function MainHeader() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <div className={styles.main_text}>
                        <h2 className={styles.header_text}>Салон красоты</h2>
                        <h1 className={styles.header_text}>ЛИМЕ</h1>
                    </div>
                </div>
                <img src={mainphoto} alt="header_photo" className={styles.main_photo} />
            </div>
        </>
    )
}

export default MainHeader