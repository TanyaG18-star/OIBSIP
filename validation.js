const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const pass_input = document.getElementById('pass-input')
const repeat_pass_input = document.getElementById('repeatpass-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit',(e) => {

    let errors = []

    if(firstname_input){
        //we are in signup page
        errors = getSignupFormErrors(firstname_input.value, email_input.value, pass_input.value, repeat_pass_input.value,)
    }
    else{
        //we are in login page
        errors = getLoginFormErrors(email_input.value, pass_input.value)
    }
    if(errors.length > 0){
        //if any error inside the array
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(firstname, email, password, repeat_pass_input ){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('password is required')
        pass_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
       errors.push('Password must have atleast 8 character')
       pass_input.parentElement.classList.add('incorrect')

    }
    if(password !== repeatPassword){
        errors.push('Password does not match repeated password')
        pass_input.parentElement.classList.add('incorrect')
        repeat_pass_input.parentElement.classList.add('incorrect')
    }
    
    return errors;
}

function getLoginFormErrors(email, password){
    let errors = []
    if(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('password is required')
        pass_input.parentElement.classList.add('incorrect')
    }
    return errors;
}function getLoginFormErrors(email, password){
    let errors = []
    if(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('password is required')
        pass_input.parentElement.classList.add('incorrect')
    }
    return errors;
}


function getLoginFormErrors(email, password){
    let errors = []
    if(email === '' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('password is required')
        pass_input.parentElement.classList.add('incorrect')
    }
    return errors;
}


const allInputs =[firstname_input, email_input, pass_input, repeat_pass_input].filter(input => input != null)

allInputs.forEach(input => {
   input.addEventListener('input', () =>{
    if(input.parentElement.classList.contains('incorrect')){
        input.parentElement.classList.remove('incorrect')
        error_message.innerText = ''
    }
   }) 
})