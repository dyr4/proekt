import React from 'react'
import styles from './MainCardReversed.module.css'

function MainCardReversed(props) {
  return (
    <div className={styles.Main}>
      <div className={styles.container}>
        <hr />
        <div className={styles.card}>
          <section className={styles.text__container}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.text}>{props.text}</span>
          </section>
          <img src={props.img} alt="card_photo" className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default MainCardReversed