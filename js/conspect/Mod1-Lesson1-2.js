"use strict";


// const x1 = 10;
// const x2 = 30;
// const number = 15;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);

// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// const res1 = number > x1 && number < x2;
// console.log(`Число ${number} попадает в отрезок между ${x1} и ${x2}? `, res1);


// const res2 = number < x1 || number > x2;
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, res2);


// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(`Можно открыть чать? `, canOpenChat);



// if (number < x2) {
//     console.log('stage1');
// } else if (number > x2) {
//     console.log('stage2');
// } else {
//     console.log('stage3');
// }


// const balance = -1000;

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(message);

// let cost;
// const subscription = "free";

// switch (subscription) {
//     case "free":
//         cost = 0;
//         break;
//     case "pro":
//         cost = 100
//         break;
//     case "premium":
//         cost = 500;
//         break;
//     default:
//         console.log("Invalid subscription type");
// }
// console.log(cost);

// const stars = 4
//     ;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);


// 1. Сделать переменные
// const option = 3;
// let message = 'ds';

// 2. Сделать switch 1 2 3

// switch(option) {
//     case 1:
//         message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе';
//         break;
//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//         break;
//     case 3:
//         message = 'Посылка будет отправлена сегодня';
//         break;
//     default:
//         message = 'Вам перезвонит менеджер';

// }
// console.log(message);

// 3. в каждом кейсе записать в message строку

// 4. сделать лог message



// FOR

// for (let i = 5; i < 25; i += 2) {
//     console.log(i);
// }

// console.log('Hello')



// 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550


// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }


// const str = 'hello world';
// let i = 0;
// while (i < str.length) {
//   if (str[i] === 'w') {
//     console.log('yes');
//     break;
// }

// console.log('no', str[i]);
// i += 1;
// }

// const str = "Hello world!"
// let i = 0;
// do {
//   if (str[i] === 'w') {
//     console.log('yes');
//     break;
//   }
//   console.log('no');
//   i += 1;
// } while (i < str.length);



// let link = 'https://my-site.com/about';

// // const lastSymbol = link.length - 1;
// // if ('/' !== link[lastSymbol]) {
// //   link = link + '/';
// // }

// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

// const daysUntilDeadline = 5;

// if (daysUntilDeadline < 1) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline < 2){
//   console.log('Завтра');
// } else if (daysUntilDeadline < 3){
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сьогодні');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Післязавтра');
//     break;
//   default:
//     console.log('Дата у майбутньому');
// }


// const login = prompt("Please turn your login");

// if (login === "Admin") {
//   const password = prompt("Please turn your password");
//   console.log(password === "I am admin" ? "Доброго дня!" : "Невірний пароль!");
  
//   // if (password === "I am admin") {
//   //   console.log("Доброго дня!")
//   // } else {
//   //   console.log("Невірний пароль!")
//   // }
// } else if (login) {
//   console.log("Я Вас не знаю!")
// } else {
//   console.log("Скасовано")
// }


// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));
// height = Number(height.replace(',', '.'));
// const bmi = Number((weight / height**2).toFixed(1));
// console.log(bmi);










