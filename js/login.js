// login.js

import { authenticateUser } from './auth.js';

const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (authenticateUser(username, password)) {
        window.location.href = 'index.html';
    } else {
        loginError.textContent = 'Usuário ou senha incorretos.';
    }
});
