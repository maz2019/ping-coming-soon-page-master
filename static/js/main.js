let form = document.getElementById("form");
let email = document.getElementById("email");
let button = document.getElementById('button');
let validator = document.getElementById("validator");
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validate()
})

function validate(){
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor();
    } else if (!isEmail(emailValue)) {
        setErrorForWrong();
    } else {
        setSuccessFor(email)
    }
}

function setErrorFor(){
    validator.innerHTML = "Email Can't be Empty";
}
function setErrorForWrong(){
    validator.innerHTML = "Please provide a vailid email address"
}
function setSuccessFor(){
    validator.innerHTML = "Email Sent Successfuly"
    validator.style.color = "green"
}
function isEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}