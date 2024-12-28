import React from 'react'
import FooterNav from '../components/FooterNav';
import FooterPhoto1 from '../images/yandex.png'
import FooterPhoto2 from '../images/rambler.png'
import FooterPhoto3 from '../images/li_ru.png'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <FooterNav />
        <div className={styles.text}>
          <p className={styles.footer__text}>Обработка персональных данных осуществляется в соответствии с Федеральным законом №152-ФЗ «О персональных данных».</p>
          <p className={styles.footer__contact}>КОНТАКТЫ
            Салон красоты: Лиме e-mail: limebeauty@yandeх.ru
            117198, Москва, ул. Миклухо-Маклая, д.6</p>
        </div>
        <div className={styles.info}>
          <p> Время работы: ПН-ВС, 9:00 - 20:00</p>
          <div className={styles.footer__div_img}>
            <img src={FooterPhoto1} alt="FooterPhoto1" className={styles.footer__img} />
            <img src={FooterPhoto2} alt="FooterPhoto2" className={styles.footer__img} />
            <img src={FooterPhoto3} alt="FooterPhoto3" className={styles.footer__img} />
          </div>
        </div>
        <p className={styles.copyright}>Copyright © 2024 Lime Beauty</p>
    </div>
  )
}

export default Footer