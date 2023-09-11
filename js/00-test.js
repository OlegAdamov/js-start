
{
    // ЗАДАЧА 1
    /*
    * Напишите скрипт, который подщсчитывает общую сумму зарплат работников.
    * Кол-во работников хранится в переменной employees.
    * Зарплата каждого работника это случайное число от 500 до 5000.
    * Записать сумму в переменную totalSalary и вывестви в консоль.
    */

    // 1. Записать переменные
    // const minSalary = 500;
    // const maxSalary = 5000;
    // const employees = 15;
    // let totalSalary = 0;

    // // 2. Перебрать работников в цикле
    // for (let i = 1; i <= employees; i += 1) {
    
    //     // 3. Сгенерировать случайную з. п. 
    //     const salary = Math.round(
    //         Math.random() * (maxSalary - minSalary) + minSalary);

    //     console.log(`ЗП работника номер ${i} - ${salary}`)

    //     // 4. Суммировать все з.п.
    //     totalSalary += salary;

    // }
    // // 5. Лог
    // console.log('totalSalary; ', totalSalary);
}



{

    // ЗАДАЧА 2
    /*
    * Напишите скрипт, который подсчитывает сумму всех чётных чисел,
    * которые входят в диапазон чисел в переменных от min до max.
    * Например, если min=0 и max=5, то в нём два чётных числа - 2 и 4, их сумма 6
    * 
    */



}

{
    // ЗАДАЧА 3
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
{

    // Задача 4
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

{
    // Задача 5
    /*
    *Посчитать общую сумму покупок в корзине
   */
    
    // const cart = [54, 28, 105, 70, 92, 120, 45, 54, 78, 87];
    // let total = 0;

    // // for (let i = 0; i < cart.length; i += 1) {
    // //     // console.log(cart[i]);
    // //     total += cart[i];
    // // }

    // for (const value of cart) {
    //     total += value;
    // }
    // console.log(`Total: `, total);

}

{
    // Задача 6
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
    
//     const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
//     let total = 0;
//     // 1. Переменная тотал
//     // 2. Перебрать массив
//     for (let i = 0; i < numbers.length; i += 1) {
//         // console.log(numbers[i]);
    
        
//     // 3. На каждой итерации проверить четность элемента
//     if (numbers[i] % 2 === 0) {
//         // console.log(`Четное `);

//     // 4. Если четное - плюсуем к тотал
//         total += numbers[i];
//    }     
// }
//     console.log(`Total: `, total);

}

{
    // Задача 6 / or
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
    //     const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    // let total = 0;

    // for (const number of numbers) {
    //     // console.log(number);

    //     if (number % 2 === 0) {
    //         console.log(`${number} - Четное!!!`);
        
    //         total += number;
    //     }
    // } console.log(`Total: `, total);
}
{
    // Задача 6 / or
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
    //     const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    // let total = 0;

    // for (const number of numbers) {
    //     // console.log(number);

    //     if (number % 2 !== 0) {
    //         console.log(number, `Эту итерацию пропустить`);
    //         continue;
    //     }
    //     console.log(`${number} - Четное!!!`);
    //     total += number;
        
    // } console.log(`Total: `, total);
}

{
    // Задача 7.1
/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через for
*/

    // const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    // const loginToFind = `poly1scute`;
    // let message = ``;
    
    // for (let i = 0; i < logins.length; i += 1) {
    //         const login = logins[i];
        
    //         // console.log(`Login: `, login);
        
    //         if (login === loginToFind) {
    //                 message = `Пользователь ${loginToFind} найден.`;
    //                 break;
    //             }
    //             message = `Пользователь ${loginToFind} не найден.`;
    //         }
    //         console.log(message);
}
        

{
    // Задача 7.2
    /* Напиши скрипт поиска логина
    * - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
    * - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
    *
    * - Через for...of
    */
    // const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    // const loginToFind = `poly1scute`;
    // let message = `Пользователь ${loginToFind} не найден.`;
    // for (const login of logins) {
    //     if (login.includes(loginToFind)) {
    //         message = `Пользователь ${loginToFind} найден.`;
    //         break;
    //     }
    // }
    // console.log(message);
    
}

// }
// {
    // Задача 7.3
/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через break
*/



// }
// {
    // Задача 7.4
/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Метод include() с тернарным оператором
*/



// }



{
/* <p>If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.</p>
<p>Find the sum of all the multiples of $3$ or $5$ below $1000$.</p> */
    // const min = 0;
    // const max = 1000;
    // let total = 0;

    // for (let i = min; i < max; i += 1) {
        
    //     if (!(i % 3) || !(i % 5)) {
    //         console.log('first: ', i)
    //         total += i;
    //     } 
        
    // }
    // console.log(total);
}

{
    /* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with and, the first terms will be:
    * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. 
    */
    
//     const firstNumber = 0;
//     let numbers = [0, 1, 2];
//     let counter = 4000000;
//     let lastNumber = numbers[numbers.length - 1];
//     let total = 0;

// // 1. Формирование массива чисел Фибоначчи

// // 2. сравнение последнего числа в массиве с заданным пределом и остановка формирования массива
//     while (counter >= lastNumber) {
//         numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
//         lastNumber = numbers[numbers.length - 1];
//     }

//     // 3. Поиск четных членов ряда в массиве
//     // 4. Суммирование четных членов ряда в массиве.

//     for (const number of numbers) {
//         if (!(number % 2)) {
//             total += number;
//         }
//     }
    
    


//     console.log('lastNumber: ', lastNumber)
//     console.log('counter: ', counter);
//     console.table(numbers);
//     console.table('total: ', total);
}
{
    

}













