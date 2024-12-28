import React from 'react'
import styles from './FullImage.module.css'

function FullImage(props) {
  return (
    <>
      <div className={styles.container}>
        <img src={props.img} alt="full_img" className={styles.img} />
        <hr />
      </div>
    </>
  )
}

export default FullImage