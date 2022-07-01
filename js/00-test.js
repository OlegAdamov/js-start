
{    console.log(`ЗАДАЧА 1`);
    /*
    * Напишите скрипт, который подщсчитывает общую сумму зарплат работников.
    * Кол-во работников хранится в переменной employees.
    * Зарплата каждого работника это случайное число от 500 до 5000.
    * Записать сумму в переменную totalSalary и вывестви в консоль.
    */

    // 1. Записать переменные
    const minSalary = 500;
    const maxSalary = 5000;
    const employees = 15;
    let totalSalary = 0;

    // 2. Перебрать работников в цикле
    for (let i = 1; i <= employees; i += 1) {
    
        // 3. Сгенерировать случайную з. п. 
        const salary = Math.round(
            Math.random() * (maxSalary - minSalary) + minSalary);

        // console.log(`ЗП работника номер ${i} - ${salary}`)

        // 4. Суммировать все з.п.
        totalSalary += salary;

    }
    // 5. Лог
    // console.log('totalSalary; ', totalSalary);
}

{    console.log(`ЗАДАЧА 2`);
    /*
    * Напишите скрипт, который подсчитывает сумму всех чётных чисел,
    * которые входят в диапазон чисел в переменных от min до max.
    * Например, если min=0 и max=5, то в нём два чётных числа - 2 и 4, их сумма 6
    * 
    */



}

{    console.log(`ЗАДАЧА 3`);
    /*
    * Напишите скрипт, обработки покупки в магазине.
    * 
    * - Баланс пользователя хранится в переменной balance
    * - Сумма покупки хранится в переменной payment
    * 
    * - Перед проверкой вывести сообщение:
    * "Общая стоимость заказа (число) кредитов. Проверяем кол-во доступных средсв на счету"
    * 
    * - Если сумма покупки не превышает баланс:
    *   - Вычесть из баланса сумму покупки
    *   - Вывести сообщение "НА счету осталось (число) кредитов"
    * - Если сумма покупки превышает баланс:
    *   - Вывести сообщение "На счету недостаточно средств для проведения операции!"
    * - В конце вы вывесьи сообщение "Операция завершена"
    */



}

{    console.log(`Task 4`);
    /* Напиши скрипт подсчета суммы покупки со скидкой в зависимости 
    *от потраченной суммы за всё время (партнёрская программа).
    * 
    * - Общая сумма потреченного хранится в переменной totalSpent
    * - Сумма текущего платежа хранится в переменной payment
    * - Скидка хранится в переменной discount
    * 
    * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
    * - Если потрачено от [1000 до 5000) - серебряный партнёр, скидка 5%
    * - Если потрачено больше [5000 - золотой партнёр, скидка 10%
    * - Если потрачено меньше 100) - не партнёр, скидка 0%
    * 
    * - В результате вывести сообщение
    * "Оформляем заказ на сумму (сумма) со скидкой (скидка)%"
    */

    // const totalSpent = 2000;
    // let payment = 500;
    // let discount = 0;

    //'Бронзовый партнёр, скидка 2%'
    //'Серебряный партнёр, скидка 5%'
    //'Золотой партнёр, скидка 10%'
    //'У Вас ещё нет партнёрской скидки%'

}

{    console.log(`Task 5`);
    /*
    *Посчитать общую сумму покупок в корзине
   */
    
    const cart = [54, 28, 105, 70, 92, 120, 45, 54, 78, 87];
    let total = 0;

    // for (let i = 0; i < cart.length; i += 1) {
    //     // console.log(cart[i]);
    //     total += cart[i];
    // }

    for (const value of cart) {
        total += value;
    }
    // console.log(`Total: `, total);

}

{    console.log(`Task 6.1`);
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
    
    const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    let total = 0;
    // 1. Переменная тотал
    // 2. Перебрать массив
    for (let i = 0; i < numbers.length; i += 1) {
        // console.log(numbers[i]);
    
        
    // 3. На каждой итерации проверить четность элемента
    if (numbers[i] % 2 === 0) {
        // console.log(`Четное `);

    // 4. Если четное - плюсуем к тотал
        total += numbers[i];
   }     
}
    // console.log(`Total: `, total);

}

{    console.log(`Task 6.2`);
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
        const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    let total = 0;

    for (const number of numbers) {
        // console.log(number);

        if (number % 2 === 0) {
            // console.log(`${number} - Четное!!!`);
        
            total += number;
        }
    }
    // console.log(`Total: `, total);
}

{    console.log(`Task 6.3`);
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
        const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    let total = 0;

    for (const number of numbers) {
        // console.log(number);

        if (number % 2 !== 0) {
            // console.log(number, `Эту итерацию пропустить`);
            continue;
        }
        // console.log(`${number} - Четное!!!`);
        total += number;
        
    }
    // console.log(`Total: `, total);
}

{    console.log(`Task 7.1`);

/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через for
*/

    const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    const loginToFind = `poly1scute`;
    let message = ``;

    for (let i = 0; i < logins.length; i += 1) {
        const login = logins[i];

        // console.log(`Login: `, login);

        if (login === loginToFind) {
            message = `Пользователь ${loginToFind} найден.`;
            break;
        }
        message = `Пользователь ${loginToFind} не найден.`;
    }
    // console.log(message);
}

{    console.log(`Task 7.2`);
/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через for...of
*/



}

{    console.log(`Task 7.3`);
/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через break
*/


}

{    console.log(`Task 7.4`);

    /* Напиши скрипт поиска логина
    * - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
    * - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
    *
    * - Метод include() с тернарным оператором
    */



}

{    console.log(`Task 8`);
/* Напиши функцию calculateTotalPrice(items)
* которая принимает массив цен (чисел) и возвращает их сумму
*
*/


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total +=value;
// }


// console.log(`Total: `, total);

const calculateTotalPrice = function (items){
    console.log(`items внутри функции: `, items);

    let total = 0

    for (const item of items) {
        total += item;
        
    }
    return total;
}

// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600
// console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90])); 


}

{    console.log(`Task 9`);
/* Напиши функцию logItems(items) для перебора и логирования массива
*
*/

const logItems = function (items){

    for (const item of items) {
        // console.log(item);
    }
}

logItems([`Mango`, `Kiwi`, `Poly`, `Ajax`]);
logItems([1, 2, 3, 4, 5]);
logItems([`клавиатура`, `наушники`, `часы`]);




}

{    console.log(`Task 10`);
/* Напиши функцию findLogin(allLogins, login) для поиска логина
*
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*/

const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];


// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`;
//        }
//     }
//     return `Пользователь ${loginToFind} не найден.`;   


const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден.`
        : `Пользователь ${loginToFind} не найден.`;
}
// console.log(findLogin(logins, `m4ngoDoge`));
// console.log(findLogin(logins, `k1widab3st`));
// console.log(findLogin(logins, `poly1scute`));
// console.log(findLogin(logins, `aj4xth3m4n`));
// console.log(findLogin(logins, `ajdfdxth4n`));
// console.log(findLogin(logins, `aj4xtdfd4n`));


}

{    console.log(`Task `);
/* Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве.
* при условии, что числа уникальные (не повторяются).
*/

    const numbers = [51, 18, 13, 24, 7, 85, 19];
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    console.log(`smallestNumber: `, smallestNumber);

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

}

{    console.log(`Task `);
/* Напиши 
*
*
*
*
* - 
* - 
* - 
* - 
*
* - 
*/





}

{    console.log(`Task `);
/* Напиши 
*
*
*
*
* - 
* - 
* - 
* - 
*
* - 
*/





}

{    console.log(`Task `);
/* Напиши 
*
*
*
*
* - 
* - 
* - 
* - 
*
* - 
*/





}

{    console.log(`Task `);
/* Напиши 
*
*
*
*
* - 
* - 
* - 
* - 
*
* - 
*/





}
















