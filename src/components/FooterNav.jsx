import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FooterNav.module.css'

function FooterNav() {
  return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">О САЛОНЕ</Link></li>|
                <li><Link to="/Spec">СПЕЦИАЛИСТЫ</Link></li>|
                <li><Link to="/Service">УСЛУГИ</Link></li>|
                <li><Link to="/Reviews">ОТЗЫВЫ</Link></li>|
                <li><Link to="/Map">КАРТА САЙТА</Link></li>
            </ul>
        </nav>
  )
}

export default FooterNav