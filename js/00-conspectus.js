"use strict";

// Переменные, обхявленные как const, обязательно должны быть инициализированы
// значением во время объявления, иначе будет ошибка.
// const yearOfBirth = 2006;
// console.log(yearOfBirth); // 2006

// Если переменная объявлена как const, перезписать её значение нельзя.
// При попытке присвоить новое значение будет ошибка выполнения скрипта.
// yearOfBirth = 2020; // ❌ Неправильно, будет ошибка



// Переменным, объявленным через let, не обязательно сразу присваивать значение.
// let age;

// Если переменной, объявленной как let, изначально не присвоено значение,
// она инициализируется специальным значением undefined (не определено).
// console.log(age); // undefined

// console.log() это метод для вывода данных в консоль браузера,



// Если переменная объявлена как let, её значение можно перезаписать.
// age = 14; // 14



// Константа хранящая значение цвета
const COLOR_TEAL = "#009688";

// Константа хранящая сообщение о результате логина
const LOGIN_SUCCESS_MESSAGE = "Добро пожаловать!";



// let username;
// console.log(username); // undefined



// ❌ Неправильно, будет ошибка
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// Объявление переменной age
// let age = 20;

// ✅ Правильно, обращаемся после объявления
// age = 25;
// console.log(age); // 25

// Number
const age = 20;
const points = 15.8;

// String
const username = "Mango";
const description = "JavaSript для начинающих";

// Boolean (true or false)
const isLoggedIn = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;

// Null
let selectedProduct = null;

// undefined
let username;
console.log(username); // undefined


//tupeof
let username;
console.log(typeof username); // "underfined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const massage 