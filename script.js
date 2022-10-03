const password = document.querySelector("[id='pwd']");
const confirmation = document.querySelector("[id='pwd-conf']")
const label_error = document.querySelector("[class='alert-pwd']")


const confirmPwd = function(pwd, conf) {
    return pwd === conf
}

confirmation.addEventListener("keyup",() => {
    let isConfirm = confirmPwd(password.value, confirmation.value)
    if (isConfirm){
        password.classList.add("valid")
        confirmation.classList.add("valid")
        password.classList.remove("error")
        confirmation.classList.remove("error")
    }
    else {
        password.classList.add("error")
        confirmation.classList.add("error")
        password.classList.remove("valid")
        confirmation.classList.remove("valid")
    }
    label_error.hidden = false
  
})