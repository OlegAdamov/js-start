"use strict";


const x1 = 10;
const x2 = 30;
const number = 15;

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


const balance = -1000;

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
console.log(message);