import React, { useState } from 'react';
import validateForm from '../scripts/Form';
import styles from './FormService.module.css';

function FormService() {
  const priceList = {
    'Стрижка': 500,
    'Окрашивание': 1500,
    'Укладка': 1000,
    'Ламинирование волос': 1200,
    'Маникюр': 1500,
  };

  const [selectedService, setSelectedService] = useState('Окрашивание');
  const [selectedPrice, setSelectedPrice] = useState(1500);
  
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    patronymic: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);

  const handleServiceChange = (event) => {
    const service = event.target.value;
    const price = priceList[service];
    setSelectedService(service);
    setSelectedPrice(price);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    const { isValid, errors } = validateForm({ ...formData, [name]: value });
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validateForm(formData);
    setErrors(errors);

    if (isValid) {
      setSubmitted(true);
      setOrderInfo({
        fullName: `${formData.surname} ${formData.name} ${formData.patronymic}`,
        service: selectedService,
        email: formData.email,
        phone: formData.phone
      });
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formLeft}>
        <form className={styles.formInput} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" name="surname" placeholder="Фамилия" className={styles.input} value={formData.surname} onChange={handleInputChange}/>
            <div className={styles.validationMessage} style={{ color: errors.surname ? 'red' : 'green' }}>
              {errors.surname ? errors.surname : (formData.surname && 'Корректный ввод')}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <input type="text" name="name" placeholder="Имя" className={styles.input} value={formData.name} onChange={handleInputChange}/>
            <div className={styles.validationMessage} style={{ color: errors.name ? 'red' : 'green' }}>
              {errors.name ? errors.name : (formData.name && 'Корректный ввод')}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <input type="text" name="patronymic" placeholder="Отчество" className={styles.input} value={formData.patronymic} onChange={handleInputChange}/>
            <div className={styles.validationMessage} style={{ color: errors.patronymic ? 'red' : 'green' }}>
              {errors.patronymic ? errors.patronymic : (formData.patronymic && 'Корректный ввод')}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <input type="email" name="email" placeholder="Введите свой E-mail" className={styles.input} value={formData.email} onChange={handleInputChange}/>
            <div className={styles.validationMessage} style={{ color: errors.email ? 'red' : 'green' }}>
              {errors.email ? errors.email : (formData.email && 'Корректный ввод')}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <input type="tel" name="phone" placeholder="Телефон" className={styles.input} value={formData.phone} onChange={handleInputChange}/>
            <div className={styles.validationMessage} style={{ color: errors.phone ? 'red' : 'green' }}>
              {errors.phone ? errors.phone : (formData.phone && 'Корректный ввод')}
            </div>
          </div>
          <br />
          <span className={styles.text}>Выберите услугу</span>
          <div className={styles.selectGroup}>
            <select className={styles.select} value={selectedService} onChange={handleServiceChange}>
              {Object.keys(priceList).map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <p className={styles.text}>
            Выбранная услуга: <strong>{selectedService}</strong>
          </p>
          <p className={styles.text}>
            Цена: от <strong>{selectedPrice}</strong> руб.
          </p>

          <button type="submit" className={styles.submitBtn}>Записаться</button>
        </form>
      </div>

      {submitted && <div className={styles.separator}></div>}

      {submitted && (
        <div className={styles.formRight}>
          <div className={styles.orderInfo}>
            <p>Здравствуйте, <strong>{orderInfo.fullName}!</strong></p>
            <p>Вы записались на услугу: <strong>{orderInfo.service}</strong></p>
            <p>На вашу почту <strong>{orderInfo.email}</strong> или номер телефона <strong>{orderInfo.phone}</strong> будет отправлена информация о записи!</p>
            <p>Ждем вас!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormService;