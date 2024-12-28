import React, { useState } from 'react';
import styles from './FormContact.module.css';
import checkPhone from '../scripts/contact';

function FormContact() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBlur = () => {
    if (!checkPhone()) {
      setMessage('Введите телефон в формате +7(xxx)-xxx-xx-xx');
    } else {
      setMessage('Корректный ввод');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkPhone()) {
      setSubmitted(true);
    } else {
      setMessage('Введите корректный телефон перед отправкой');
    }
  };

  return (
    <section className={styles.form_contact}>
      <div className={styles.container}>
        <div className={styles.input}>
          <p className={styles.contact_text}>Мы стремимся создать для вас идеальные условия, чтобы вы могли расслабиться и насладиться процессом преображения.</p>
          <span className={styles.contact_text}>Для получения консультации укажите свой номер телефона!</span><br />
          <input type="tel" id="phone" placeholder="Телефон" className={styles.phone} onBlur={handleBlur} required />
          <button type="submit" className={styles.btn} onClick={handleSubmit}>
            ОСТАВИТЬ ЗАЯВКУ!
          </button>
          <div id="phone_Check" style={{ color: message === 'Корректный ввод' ? 'green' : 'red' }}>
            {message}
          </div>
        </div>

        {submitted && <div className={styles.separator}></div>}

        {submitted && (
          <div className={styles.output}>
            <p className={styles.output_text}><strong>Спасибо за заявку!</strong></p>
            <p className={styles.output_text}>Мы свяжемся с вами в ближайшее время!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FormContact;
