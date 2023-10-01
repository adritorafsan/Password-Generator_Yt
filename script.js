const password_el = document.querySelector('#password');

const copy_el = document.querySelector('#copy');
copy_el.addEventListener('click', copyPassword);
const lenght_el = document.querySelector('#lenght');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const numbers_el = document.querySelector('#numbers');
const symbols_el = document.querySelector('#symbols');

const btn_el = document.querySelector('#btn');
btn_el.addEventListener('click', generatePassword);

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "! @ # $ % ^ & * ( ) _ + - = { } [ ] | \ : ;";

function generatePassword() {
    let password = "";
    let lenghtofpass = lenght_el.value;
    let chars = "";

    chars += uppercase_el.checked ? uppercase_chars : "";
    chars += lowercase_el.checked ? lowercase_chars : "";
    chars += numbers_el.checked ? numbers_chars : "";
    chars += symbols_el.checked ?symbols_chars : "";

    for (let i = 0; i <= lenghtofpass; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1)
        
    }
    password_el.value = password; 
}

async function copyPassword() {
    if( navigator.clipboard){
        await navigator.clipboard.writeText(password_el.value);
        alert("Password Copied");
    }
}