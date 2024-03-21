const input = document.getElementById('email');
const labelValid = document.getElementById('valid-email');
const button = document.getElementById('submit-button');
const card =  document.querySelector('.card');
const success = document.querySelector('.sign-up-success');
const emailSuccess = document.querySelector('.sign-up-success span');

function emailValidation (email) {
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', (event) => {     
    event.preventDefault()

    const email = input.value;
    if(emailValidation(email)) {
        success.classList.add('visibility');
        card.classList.remove('visibility');
        emailSuccess.textContent = input.value;
    } else {
        labelValid.style.display = 'block'
        input.classList.add('error')
        input.value = ''
    }
})

function refreshButton () {
    const buttonRefresh = document.getElementById("refresh-btn")

    buttonRefresh.addEventListener('click', () => {
        location.reload()
    })
}

refreshButton()