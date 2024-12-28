import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNav.module.css'

function MainNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul>
          <li><Link to="/">О САЛОНЕ</Link></li>
          <li><Link to="/Spec">СПЕЦИАЛИСТЫ</Link></li>
          <li><Link to="/Service">УСЛУГИ</Link></li>
          <li><Link to="/Reviews">ОТЗЫВЫ</Link></li>
          <li><Link to="/Contacts">КОНТАКТЫ</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default MainNav