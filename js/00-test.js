
{console.log(`%cЗАДАЧА 1 - сумма зарплат работников`, "color: red");
    /*
    * Напишите скрипт, который подсчитывает общую сумму зарплат работников.
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
    // // 5. Лог
    // console.log('totalSalary; ', totalSalary);
}

{    console.log(`%cЗАДАЧА 2 - сумма четных чисел`, "color: red");
    /*
    * Напишите скрипт, который подсчитывает сумму всех чётных чисел,
    * которые входят в диапазон чисел в переменных от min до max.
    * Например, если min=0 и max=5, то в нём два чётных числа - 2 и 4, их сумма 6
    * 
    */



}

{    console.log(`%cЗАДАЧА 3 - обработка покупки в магазине`, "color: red" );
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

{    console.log(`%cTask 4`, "color: red");
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

{    console.log(`%cTask 5 - Посчитать общую сумму покупок в корзине`, "color: red");
    /*
    *Посчитать общую сумму покупок в корзине
   */
    
    // const cart = [54, 28, 105, 70, 92, 120, 45, 54, 78, 87];
    // let total = 0;

    // for (let i = 0; i < cart.length; i += 1) {
    //     // console.log(cart[i]);
    //     total += cart[i];
    // }

    // for (const value of cart) {
    //     total += value;
    // }
    // console.log(`Total: `, total);

}

{    console.log(`%cTask 6.1`, "color: red");
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

{    console.log(`%cTask 6.2 - сумма всех четных чисел в массиве`, "color: red");
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
    //     const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    // let total = 0;

    // for (const number of numbers) {
    //     // console.log(number);


        // if (number % 2 === 0) {
            // console.log(`${number} - Четное!!!`);
        
            // total += number;
        // }
    // console.log(`Total: `, total);
}

{    console.log(`%cTask 6.3 - сумма всех четных чисел в массиве`, "color: red");
    /*
    * Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве. 
   */
    //     const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
    // let total = 0;

    // for (const number of numbers) {
    //     console.log(number);

    //     if (number % 2 !== 0) {
    //         console.log(number, `Эту итерацию пропустить`);
    //         continue;
    //     }
    //     console.log(`${number} - Четное!!!`);
    //     total += number;
    // }
    
    // console.log(`Total: `, total);
}

{    console.log(`%cTask 7.1`, "color: red");

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

    //     const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    // const loginToFind = `poly1scute`;
    // let message = `Пользователь ${loginToFind} не найден.`;

    // for (let i = 0; i < logins.length; i += 1) {
    //     const login = logins[i];

    //     // console.log(`Login: `, login);

    //     if (login === loginToFind) {
    //         message = `Пользователь ${loginToFind} найден.`;
    //         break;
    //     }
    // }
    // console.log(message);
}

{console.log(`%cTask 7.2`, "color: red");
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
    
    // {
        /* Напиши скрипт поиска логина
        * - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
        * - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
        *
        * - Через for...of
        */
    //     const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    //     const loginToFind = `k1widab3st`;
    //     let message = `Пользователь ${loginToFind} не найден.`;
    
    //     for (const login of logins) {
    //         if (login === loginToFind) {
    //             message = `Пользователь ${loginToFind} найден.`;
    //             break;
    //         }

    //     }
    //     // console.log(message);
    // }

}

{    console.log(`%cTask 7.3`, "color: red");
/* Напиши скрипт поиска логина
* - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
* - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
*
* - Через break
*/


}

{    console.log(`%cTask 7.4`, "color: red");

    /* Напиши скрипт поиска логина
    * - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
    * - Если нашли логин, вывести сообщение "Пользователь [логин] найден."
    *
    * - Метод include() с тернарным оператором
    */
    // const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
    // const loginToFind = `poly1scute`;



    // const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind} не найден.`;

    // console.log(message);

}

{    console.log(`%cTask 8`, "color: red");
/* Напиши скрипт поиска самого маленького/большого числа в массиве,
* при условии, что числа уникальные (не повторяются).
*
*/

    // const numbers = [51, 18, 13, 24, 7, 85, 19];
    // let smallestNumber = numbers[0];

    // for (const number of numbers) {
    // if (number < smallestNumber) {
    //         smallestNumber = number;
    //     }
    // }
    // // console.log(smallestNumber);

    //     let biggestNumber = numbers[0];

    //     for (const number of numbers) {
    // if (number > biggestNumber) {
    //         biggestNumber = number;
    //     }
    // }
    // console.log(biggestNumber);
}

{    console.log(`%cTask 9`, "color: red");
/* Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
*
* Элементов может быть произвольное кол-во.
* Пусть элементы массива в строке будут разделены запятой.
* 
* - Сначала через for(),
* - Потом через join()
* - 
*/

    // const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`, `Bread`];
    // let string = '';
    // Должно получиться: Mango,Kiwi,Poly,Ajax

//     for (const friend of friends) {
//         string += friend + ', ';
//     }
// string = string.slice (0, string.length - 2)
//     console.log(string);

    // const string = friends.join(', ');
    // console.log(friends);
    // console.log(string);

}

{    console.log(`%cTask 10`, "color: red");
/* Напиши функцию changeCase(string), которая заменяет регистр
* каждого символа в строе на противоположный.
* Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".
*/

    // const string = 'JavaScript';
    // const letters = string.split('');
    // let invertedString = '';

    // // console.log(letters);

    // for (const letter of letters) {
    //     // console.log(letter);

    //     // if (letter === letter.toLowerCase()) {
    //     //     console.log(`Эта буква в нижнем регистре!!! - `, letter);

    //     //     invertedString += letter.toUpperCase();
    //     // } else {
    //     //     invertedString += letter.toLowerCase();
    //     // }

    //     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
    // }
    // console.log(invertedString);





}

{    console.log(`%cTask 11`, "color: red");
/* Делаем slug в URL из названия статьи (например на dev.to)
* Заголовок статьи состоит только из букв и пробелов 
* - Нормализируем строку
* - Разбиваем по словам
* - Сшиваем в строку с разделителями
*/

    // Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework'

    // const normalizedTitle = title.toLowerCase();
    // console.log(normalizedTitle);

    // const words = normalizedTitle.split(' ');
    // console.log(words);

    // const slug = words.join('-');
    // console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');

    // console.log(slug1);
    
}

{    console.log(`%cTask 12`, "color: red");
/* Напиши скрипт, который считает сумму элементов двух массивов
*/

    const array1 = [5, 10, 15, 20];
    const array2 = [10, 20, 30];
    let total = 0;

    // for (let i = 0; i < array1.length; i += 1) {
    //     total += array1[i];
    // }

    // for (let i = 0; i < array2.length; i += 1) {
    //     total += array2[i];
    // }

    // console.log(total);

    const numbers = array1.concat(array2);

    // console.log(numbers);

    for (const number of numbers) {
        total += number;
    }

    // console.log(total);
}

{    console.log(`%cTask 13`, "color: red");
/* Работаем с коллекцией карточек в trello
* - Метод splice()
* - Удалить
* - Добавить
* - Обновить
*/

    const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5', '0'];

    // console.table(cards);
/* 
* Удаление (по индуксу), метод indexOf()
*/

    // const cardToRemove = 'Карточка-3';
    // const index = cards.indexOf(cardToRemove);

    // console.log(index);

    // cards.splice(index, 1);
    
    // console.table(cards);

    /* 
    * Добавление (по индуксу)
   */
    // const cardToInsert = 'Карточка-6';
    // const index = 3;
    // cards.splice(index, 0, cardToInsert)

    // console.table(cards);


    /*
    * Обновление (по индексу)
   */
    
    // const cardToUpdate = 'Карточка-4';

    // cards.splice(cards.indexOf(cardToUpdate), 1, 'Обновленная Карточка-4');

    // console.table(cards);
}

{    console.log(`%cTask `, "color: red");
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

{    console.log(`%cTask F-1 - массив чисел + сумма`, "color: red");
/* Напиши функцию calculateTotalPrice(items)
* которая принимает массив цен (чисел) и возвращает их сумму
*
*/


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total +=value;
}

{ console.log('%cTask - the natural numbers', "color: red");

/* If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.
* Find the sum of all the multiples of $3$ or $5$ below $1000$. 
*/
    // const min = 0;
    // const max = 1000;
    // let total = 0;

    // for (let i = min; i < max; i += 1) {
        
    //     if (!(i % 3) || !(i % 5)) {
    //         // console.log('first: ', i)
    //         total += i;
    //     } 
        
    // }
    // console.log(total);
}

{ console.log('%cTask - the Fibonacci sequence', "color: red")
    /* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with and, the first terms will be:
    * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. 
    */
    
    const firstNumber = 0;
    let numbers = [0, 1, 2];
    let counter = 4000000;
    let lastNumber = numbers[numbers.length - 1];
    let total = 0;

    // 1. Формирование массива чисел Фибоначчи

    // 2. сравнение последнего числа в массиве с заданным пределом и остановка формирования массива
    while (counter >= lastNumber) {
        numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
        lastNumber = numbers[numbers.length - 1];
    }

    // 3. Поиск четных членов ряда в массиве
    // 4. Суммирование четных членов ряда в массиве.

    for (const number of numbers) {
        if (!(number % 2)) {
            total += number;
        }
    }
    // console.log('lastNumber: ', lastNumber)
    // console.log('counter: ', counter);
    // console.table(numbers);
    // console.table('total: ', total);
}

{ console.log('%cTask - calculateTotalPrice', "color: red")
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

{    console.log(`%cTask F-2 - перебор + логирование массива`, "color: red");
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

{    console.log(`%cTask F-3 - поиск логина`, "color: red");
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

{    console.log(`%cTask F-4 - поиск самого маленького числа в массиве`, "color: red");
/* Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве.
* при условии, что числа уникальные (не повторяются).
*/



    // console.log(`smallestNumber: `, smallestNumber);

    const findSmallesNumber = function (numbers) {
        let smallestNumber = numbers[0];
    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
        return smallestNumber;
}

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
// console.log(findSmallesNumber([51, 18, 13, 24, 7, 85, 19])); // 7
}

{   console.log(`%cTask F-5 - замена регистра каждого символа в строе на противоположный`, "color: red");
    
/* Напиши функцию changeCase(string), которая заменяет регистр
    * каждого символа в строе на противоположный.
    * Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".
    */

    const changeCase = function (string) {
        const letters = string.split('');
        let invertedString = '';

        for (const letter of letters) {
            const isInLowerCase = letter === letter.toLowerCase();

            invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
        }

        // console.log('invertedString: ', invertedString);
    
        return invertedString;

        
    }

    // console.log(changeCase('qweRTY'));
    // console.log(changeCase('mAnGo'));
    // console.log(changeCase('AjAx'));
}
    
{    console.log(`%cTask F-6 - URL`, "color: red");
/* Напиши функцию slugigy(string), которая получает строку и возвращает URL-slug
* Строка состоит только из букв и пробелов
*/


    // const title = 'Top 10 benefits of React framework';

    // const normalizedTitle = title.toLowerCase();
    // const words = normalizedTitle.split(' ');
    // const slug = words.join('-');

    // const slug1 = title.toLowerCase().split(' ').join('-');

    // console.log(slug1);

    const slugify = function (string) {
    // const normalizedTitle = string.toLowerCase();
    // const words = normalizedTitle.split(' ');
    // const slug = words.join('-');

        
        return string.toLowerCase().split(' ').join('-');
    }


    // console.log(slugify('Top 10 benefits of React framework'));
    // console.log(slugify('Azure Static Web Apps are Awesome'));
    // console.log(slugify('Technical writing tips for non-native English speakers'));
}

{console.log(`%cTask F-7 - Псевдомассив argunents и Array.from и ...`, "color: red");

    /*
    * Псевдомассив argunents и Array.from и ...
    */
    
    // const fn = function () {
    //     console.log(arguments);

    //     const args = Array.from(arguments);

    //     console.log(args);
    // };

    // fn(1, 2, 3, 4);
    // fn(1, 2, 3, 4, 5, 6);
    // fn(1, 2, 3, 4, 5, 6, 7, 8, 9);


    // const fn = function (a, b, c, ...args) {
    //     console.log(`${a} ${b} ${c}`);
    //    console.log(args);
    // };

    // fn('hello', 1, 2, 3, 4);
    // fn('aloha', 1, 2, 3, 4, 5, 6);
    // fn('hi', 1, 2, 3, 4, 5, 6, 7, 8, 9);
}

{console.log('%cTask - сложения произвольного количества аргументов', "color: red")
    /* (Напиши функцию add для сложения произвольного количества аргументов (чисел))
* - Array.from()
* - Операция ... (rest)
*/

    const add = function (...args) {
        console.log(args);
        let total = 0;

        for (const arg of args) {
            total += arg;
        }

        return total;
    };


    // console.log(add(1, 2, 3,));
    // console.log(add(1, 2, 3, 4, 5, 6));
}

{    console.log(`%cTask F-8`, "color: red");
/*  
* Напиши функцию filterNumbers(array [, number1, ...]), которая:
* - первым аргументом принимает массив чисел
* - после первого аргуметна может быть произвольное количество других аргументов, которые будут числами.
* - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
*  для которых есть аналог в ориганальном массиве.
*/

    const filterNumbers = function (array, ...args) {
        // console.log('array: ', array);
        // console.log('args: ', args);
        const uniqueElements = [];

        for (const element of array) {
            if (args.includes(element)) {
                uniqueElements.push(element);

                // console.log(`${element} есть везде!`);
            }
        }
        // return uniqueElements;
    };

        // console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
        // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
        // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

}

{ console.log(`%cTask - Function + Function (Freelancer - Рекурсия)`, "color: red");

    // function calcSumm(numOne, numTwo) {
    //     let result = 1;
    //     // Умножаем result на numOne numTwo раз в цикле
    //     for (let i = 0; i < numTwo; i++) {
    //         result *= numOne;
    //     }
    //     return result;
    // }
    // console.log(calcSumm(5, 3));

    // function calcSumm(numOne, numTwo) {
    //     if (numTwo === 1) {
    //         return numOne;
    //     } else {
    //         return numOne * calcSumm(numOne, numTwo - 1);
    //     }
    // }
    // console.log(calcSumm(5, 3));


}

{    console.log(`%cTask AutoCheck-21`, "color: red");
/* Напиши функцию findLongestWord(string) которая принимает произвольную
* строку состоящую только из слов разделённых пробелом (параметр string) и
* возвращает самое длинное слово в этой строке.
*/
    // function findLongestWord(string) {

    //     let arrayWords = 0;
    //     arrayWords = string.split(' ');
    //     // console.log(arrayWords);

    //     let maxWord = arrayWords[0];
    //     for (let arrayWord of arrayWords) {
    //         // console.log(arrayWord);

    //         if (arrayWord.length > maxWord.length) {
    //              maxWord = arrayWord;
    //             // console.log(maxWord);
    //         } 
    //     } return maxWord;
    // }
        // console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // jumped
        // console.log(findLongestWord("Google do a roll")) // Google
        // console.log(findLongestWord("May the force be with you")) // force
}

{    console.log(`%cTask AutoCheck-22`, "color: red");
/* Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала
* массив всех целых чисел от значения min до max. 
* - В цикле for использовался метод push
* **** В автопроверке работает !!!
*/ 

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (i = min; i <= max; i += 1) {
 numbers.push(i);
}


  // Change code above this line
//   return numbers;
}

    // console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
    // console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
    // console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

}

{console.log('%cExample: Кнопочки + -', "color: red")
    
    
    // const counter = {
    //     value: 0,
    //     increment() {
    //         console.log('increment -> this', this);
    //         this.value += 1;
    //     },
    //     decrement() {
    //         console.log('decrement -> this', this);
    //         this.value -= 1;
    //     },
    // };
    
    // const decrementBtn = document.querySelector('.js-decrement');
    // const incrementBtn = document.querySelector('.js-increment');
    // const valueEl = document.querySelector('.js-value');
    
    // console.log(decrementBtn);
    // console.log(incrementBtn);
    // console.log(valueEl);

    // decrementBtn.addEventListener('click', function () {
    //     console.log('Кликнули на декремент');

    //     counter.decrement();
    //     console.log(counter);
    //     valueEl.textContent = counter.value;
    // });
    
    // incrementBtn.addEventListener('click', function () {
    //     console.log('Кликнули на инкремент');

    //     counter.increment();
    //     console.log(counter);
    //     valueEl.textContent = counter.value;
    // });

}

{console.log('%cFunction reverseWords', "color: red")
function reverseWords(str) {
    let result = [];
    const words = str.split(' ');
    
    for (const word of words) {
        result.push(word.split('').reverse().join(''));
    }
    return result.join(' ');
    }
    
    // console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
}

{ console.log('%csum number and add of binary', "color: red")
function addBinary(a,b) {
    let results = [];

    const sum = (a + b);

    for (let i = sum; i > 0; i = Math.floor(i/2) ){
       (i % 2) ? results.push(1) : results.push(0);
    }
    return results.reverse().join('');
    
    // return (a+b).toString(2)
    }

    // console.log(addBinary(1, 2));   // 0011
    // console.log(addBinary(5, 9));   // 1110
    // console.log(addBinary(1, 6));   // 0111
    // console.log(addBinary(25, 36));   // 0011 1101
    // console.log(addBinary(24, 116));   // 1000 1100
    
}

{   console.log("%cMy Friends", "color: red")
    function friend(friends){
        const friend = [];

        for (let i = 0; i < friends.length; i += 1) {
            friends[i].length === 4 ? friend.push(friends[i]) : 0;
        }
        return friend;

    }
    
    // console.log(friend(["Ryan", "Kieran", "Mark"])) // ["Ryan", "Mark"]
    // console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])) // ["Ryan"]
    // console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])) // ["Jimm", "Cari", "aret"]
    // console.log(friend(["Love", "Your", "Face", "1"])) // ["Love", "Your", "Face"]
}

{console.log("%cMath operations", "color: green")
 
/* Your task is to create a function that does four basic mathematical operations.
*
* The function should take three arguments - operation(string/char), value1(number), value2(number).
* The function should return result of numbers after applying the chosen operation.
* 
* Examples(Operator, value1, value2) --> output
* 
* ('+', 4, 7) --> 11
* ('-', 15, 18) --> -3
* ('*', 5, 5) --> 25
* ('/', 49, 7) --> 7 
* 
*/

    function basicOp(operation, value1, value2) {
        if (operation == '+') {
            return value1 + value2;
        } else if (operation == '-') {
            return value1 - value2;
        } else if (operation == '*') {
            return value1 * value2;
        } else if (operation = '/') {
            return value1 / value2
        } else {
            return 0;
        }


    }
    
// console.log(basicOp('+', 4, 7)); // 11
// console.log(basicOp('-', 15, 18)); // -3
// console.log(basicOp('*', 5, 5)); // 25
// console.log(basicOp('/', 49, 7)); // 7

}

{ console.log("%cRecursion", "color: red")

      function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
          };
    };
    // console.log(multiply([1], 0));
    // console.log(multiply([2, 3, 4], 1));
    // console.log(multiply([2, 3, 4, 5], 3));
    

    function sum(arr, n) {
        if (n <= 0) {
            return 0;
        } else {
            return sum(arr, n - 1) + arr[n - 1];
        };
    };
    
    // console.log(sum([1], 0));
    // console.log(sum([2, 3, 4], 1));
    // console.log(sum([2, 3, 4, 5], 3));

    function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
        };
    };
// console.log(countup(5));


function countdown(n){
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n)
        return countArray;
    };
};

// console.log(countdown(-1));
// console.log(countdown(10));
// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum]
    } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1)
        countArray.push(endNum);
        return countArray;
    };
};

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));
    
    
}








