import {logOut } from '../firebase.js'

const logOutBtn = document.getElementById('log-out')
logOutBtn.addEventListener('click', () => logOut())
