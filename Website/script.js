const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})

// Validação do formulário de login
const loginForm = document.querySelector('.form-box.login form');
const loginEmail = loginForm.querySelector('input[type="email"]');
const loginPassword = loginForm.querySelector('input[type="password"]');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('Preencha todos os campos!');
    } else {
        alert('Login realizado com sucesso!');
    }
});

// Validação do formulário de cadastro
const registerForm = document.querySelector('.form-box.register form');
const registerUsername = registerForm.querySelector('input[type="text"]');
const registerEmail = registerForm.querySelector('input[type="email"]');
const registerPassword = registerForm.querySelector('input[type="password"]');
const registerCheckbox = registerForm.querySelector('input[type="checkbox"]');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameValue = registerUsername.value.trim();
    const emailValue = registerEmail.value.trim();
    const passwordValue = registerPassword.value.trim();
    const checkboxValue = registerCheckbox.checked;

    if (usernameValue === '' || emailValue === '' || passwordValue === '') {
        alert('Preencha todos os campos!');
    } else if (!checkboxValue) {
        alert('Você precisa aceitar os termos e condições!');
    } else {
        alert('Cadastro realizado com sucesso!');
    }
});
