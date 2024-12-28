function validateForm(formData) {
    const errors = {};
    let isValid = true;
  
    // Валидация фамилии
    if (!formData.surname) {
      errors.surname = 'Фамилия обязательна';
      isValid = false;
    }
  
    // Валидация имени
    if (!formData.name) {
      errors.name = 'Имя обязательно';
      isValid = false;
    }
  
    // Валидация отчества
    if (!formData.patronymic) {
      errors.patronymic = 'Отчество обязательно';
      isValid = false;
    }
  
    // Валидация email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Введите корректный E-mail';
      isValid = false;
    }
  
    // Валидация телефона
    const phoneRegex = /^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      errors.phone = 'Введите телефон в формате +7(xxx)-xxx-xx-xx';
      isValid = false;
    }
  
    return { isValid, errors };
  }
  
  export default validateForm;
  