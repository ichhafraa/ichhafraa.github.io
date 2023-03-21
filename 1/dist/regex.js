// phone
const phoneRegex = document.getElementById('phone-regex')
  const myPhone = document.getElementById('my-phone')
  const checkPhoneNumber = (value) => {
    const regex = /^0[0-9]{9,11}$/
    const isPhoneNumber = regex.test(value)
    if (isPhoneNumber){
      return true
    }else{
      return false
    }
  }
  phoneRegex.addEventListener('keyup', (e)=> {
    const value = e.target.value
    const isPhoneNumber = checkPhoneNumber(value)
    if (value.length <= 12) {
      if (isPhoneNumber){
        myPhone.innerHTML = 'succeed'
      }else{
        myPhone.innerHTML = 'fail'
      }
    }else{
      myPhone.innerHTML = 'overload'
    }
  })

  //nim
  const nimRegex = document.getElementById('nim-regex')
  const myNim = document.getElementById('my-nim')
  const checkNim = (value) => {
    const regex = /[0-9]{9,9}$/
    const isNim = regex.test(value)
    if (isNim){
      return true
    }else{
      return false
    }
  }
  nimRegex.addEventListener('keyup', (r)=> {
    const value = r.target.value
    const isNim = checkNim(value)
    if (value.length <= 9) {
      if (isNim){
        myNim.innerHTML = 'succeed'
      }else{
        myNim.innerHTML = 'numbers only, consist of 9 digits'
      }
    }else{
      myNim.innerHTML = 'overload'
    }
  })
  
  //usename
  const usernameRegex = document.getElementById('username-regex')
  const myUsername = document.getElementById('my-username')
  const checkUsername = (value) => {
    const regex = /[a-z]{6,20}$/
    const isUsername = regex.test(value)
    if (isUsername){
      return true
    }else{
      return false
    }
  }
  usernameRegex.addEventListener('keyup', (r)=> {
    const value = r.target.value
    const isUsername = checkUsername(value)
    if (value.length <= 20) {
      if (isUsername){
        myUsername.innerHTML = 'succeed'
      }else{
        myUsername.innerHTML = 'letters only, consist of 6-20 letters'
      }
    }else{
      myUsername.innerHTML = 'overload'
    }
  })

  

//nik
const nikRegex = document.getElementById('nik-regex')
  const myNik = document.getElementById('my-nik')
  const checkNik = (value) => {
    const regex = /[0-9]{16,16}$/
    const isNik = regex.test(value)
    if (isNik){
      return true
    }else{
      return false
    }
  }
  nikRegex.addEventListener('keyup', (r)=> {
    const value = r.target.value
    const isNik = checkNik(value)
    if (value.length <= 16) {
      if (isNik){
        myNik.innerHTML = 'succeed'
      }else{
        myNik.innerHTML = 'numbers only, consist of 16 digits'
      }
    }else{
      myNik.innerHTML = 'overload'
    }
  })

  //password
const passwordField = document.querySelector("[name=password]");

passwordField.addEventListener("keyup", (event) => {
    if(!passwordField.validity.valid){
        console.error("passowrd invalid");
        document.getElementById("invalid-passowrd").style.display = "block";
    } else {
         console.info("passowrd valid");
        document.getElementById("invalid-passowrd").style.display = "none";
    }
});




