const password = document.querySelectorAll("input[type='password']")
const button = document.querySelector('button')
let psMatch = true
let psFocus = false
const errorMessage=document.querySelector("form>p:last-child")

password[1].addEventListener('blur', () => {
    if (password[0].value != password[1].value && password[1].value!='') {
        psMatch = false
        psFocus=false
        button.setAttribute('disabled', '')
        errorMessage.style.visibility='visible'
        password.forEach(ps => {
            ps.classList.add("error")
        })

    }
    else{
        password.forEach(ps => {
            ps.classList.remove("error")
        })
        button.removeAttribute('disabled')
        errorMessage.style.visibility='hidden'
        psMatch = true
    }
})

button.addEventListener('click', () => {
    if (password[0].value != password[1].value) {
        psMatch = false
        psFocus=false
        button.setAttribute('disabled', '')
        errorMessage.style.visibility='visible'
        password.forEach(ps => {
            ps.classList.add("error")
        })
    }
})

password[1].addEventListener('focus', (event) => {
    if (psMatch == false) {
        psFocus = true
        button.removeAttribute('disabled')
    }
})

document.addEventListener('keydown', (e) => {
    console.log(password[0].value.length)
    if ((e.key == "Backspace" || e.key == "Delete" || /[a-zA-Z0-9_]/.test(e.key)) && psMatch == false && psFocus == true || password[0].value.length==1) {
        password.forEach(ps => {
            ps.classList.remove("error")
        })
        button.removeAttribute('disabled')
        errorMessage.style.visibility='hidden'
        psMatch = true
        psFocus = false
    }
})