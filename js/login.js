"use strict";

let cabinet_btn = document.querySelector('.logout');
const open_div_Login = document.getElementById('Login');
const close_div_Login = document.querySelector('.close_div_Login');
const input_Log_mail = document.getElementById('Log_mail');
const input_Log_password = document.getElementById('Log_password');
const container_login = document.getElementById('container_login');
const div_back = document.getElementById('back');


/**
 * кнопка взаимодействия с личным кабинетом
 * @param {Text} password производит запрос и присваивает полученное значение
 * @param {*} lengthMore5 проверяет количество символов
 * @param {*} digitsPresented проверяет наличие цифр
 * @param {*} lettersPresented проверяет наличие букв
 */
let passwordFilter = function () {

    const password = document.querySelector('.input_Log_password').value;

    const lengthMore5 = password.length > 5;
    const digitsPresented = /\d+/gm.test(password);
    const lettersPresented = /[a-zA-Z]+/gm.test(password);

    if (lengthMore5 && digitsPresented && lettersPresented) {
        alert('Ваш пароль подходит');
    } else {
        alert('Ваш пароль НЕ подходит');
    }
};

let formE1 = document.querySelector('form') ;
let check_input_Log_mail = input_Log_mail.value ==='';
let check_input_Log_password= input_Log_password.value === '';


formE1.addEventListener('submit', check_inputs_log);
function check_inputs_log (event) {

    if(check_input_Log_mail) {
        input_Log_mail.style.borderColor ='red';
    } 

    if(check_input_Log_password) {
        input_Log_password.style.borderColor ='red';
    } 

    if (check_input_Log_mail || check_input_Log_password) {
        event.preventDefault();
        alert('заполните поля ввода');
    }
}

function clickLogin(event){
    
    passwordFilter();
}



open_div_Login.addEventListener('click', clickLogin);



/**
 * кнопка вызывает окно авторизации
 */



function open_log (event){
    let div_Login = document.querySelector('.div_Login');
    
    //let display_style = div_Login.classList.contains('display_none');
    div_Login.style.display = "flex";

    // if (display_style) {
    //     div_Login.classList.remove('display_none');
    //     div_Login.classList.add('display_block');
    // } else {
    //     div_Login.classList.remove('display_block');
    //     div_Login.classList.add('display_none');
    // }

    container_login.classList.add('container_login');
    div_back.classList.add('back');
}
cabinet_btn.addEventListener('click', open_log);



/**
 * кнопка вызывает окно авторизации
 */

function close_log (event) {
    let div_Login = document.querySelector('.div_Login');

    div_Login.style.display = "none";
    container_login.classList.remove('container_login');
    div_back.classList.remove('back');
}

close_div_Login.addEventListener('click', close_log);