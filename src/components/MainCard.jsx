import React from 'react'
import styles from './MainCard.module.css'

function MainCard(props) {
  return (
    <div className={styles.Main}>
      <div className={styles.container}>
        <div className={styles.card}>
        <img src={props.img} alt="card_photo" className={styles.img} />
        <section className={styles.text__container}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.text}>{props.text}</span>
        </section>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default MainCard