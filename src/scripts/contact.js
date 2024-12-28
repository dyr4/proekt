function checkPhone() {
    var phone = document.getElementById("phone").value.trim();
    var regex = /^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  
    return regex.test(phone);
  }
  
  export default checkPhone;
  