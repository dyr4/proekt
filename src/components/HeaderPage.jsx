import React from 'react'
import headername from '../images/Name.png'
import headerlogo from '../images/logo.png'
import headerfon from '../images/h_banner_cont.jpg'
import styles from './HeaderPage.module.css'

function HeaderPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <img src={headername} alt="header name" className={styles.photo_name} />
          <h2 className={styles.text_name}>Салон красоты</h2>
        </div>
        <div className={styles.logo}>
          <img src={headerlogo} alt="headerlogo" className={styles.photo_logo} />
          <img src={headerfon} alt="fon" className={styles.fon} />
        </div>
      </div>
    </>
  )
}

export default HeaderPage