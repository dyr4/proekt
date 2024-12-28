import React from 'react'
import PhotoContacts from '../images/foto_1_cont.png'
import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={styles.Main}>
        <img src={PhotoContacts} alt="photo for contact" className={styles.main_photo} />
        <p className={styles.header}>Контакты</p>
        <p className={styles.text}>E-mail: limebeauty@yandeх.ru</p>
        <p className={styles.text}>Телефон: 8(903)-629-55-72 (telegram, whatsapp) </p>
        <p className={styles.text}>До встречи в мире красоты!</p>
        <hr />
    </div>
  )
}

export default Contact