
{ console.log('functions')
    // // 1. Объявление функции multiply
    // function multiply() {
    //     // Тело функции
    //     console.log("Это лог при вызове функции multiply");
    // }

    // // 2. Вызовы функции multiply
    // multiply(); // "Это лог при вызове функции multiply"
    // multiply(); // "Это лог при вызове функции multiply"
    // multiply(); // "Это лог при вызове функции multiply"
}

{ console.log('parametrs and arguments')
// // Объявление параметров x, y, z
//     function multiply(x, y, z) {
//         console.log(`Результат умножения равен ${x * y * z}`);
//     }
// // Передача аргументов
//     multiply(2, 3, 5); // Результат умножения равен 30
//     multiply(48, 36, 50); // Результат умножения равен 86400
//     multiply(359, 498, 255); // Результат умножения равен 45509410
}

{ console.log('return')
    // function multiply(x, y, z) {
    //     console.log("Код до return выполняется как обычно");
    //     // Возвращаем результат выражения умножения
    //     return x * y * z;

    //     console.log("Этот лог никогда не выполнится, он стоит после return");
    // }
    // // Результат работы функции можно сохранить в перменнню
    // let result = multiply(2, 3, 5);
    // console.log(result);
    
    // result = multiply(20, 35, 523);
    // console.log(result);

    // result = multiply(212, 312, 545);
    // console.log(result);
}

{ console.log('Task - calculateTotalPrice')
/* 
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму.
 */

    // const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
    // let total = 0;

    // // for (const value of cart) {
    // //     total += value;
    // // }

    // // console.log('Total: ', total);

    // const calculateTotalPrice = function (items) {
    //     let total = 0;   
    //     for (const item of items) {
    //     total += item;
    // }
    // return total;
    // }

    // console.log(calculateTotalPrice([1, 2, 3])); // 6
    // console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
    // console.log(calculateTotalPrice([100, 200, 300])); // 600
}

{ console.log('Task - перебор и логирования массива')
// /* 
//  * Напиши функцию logItems(items) для перебора и логирования массива
//  */
    
    // const logItems = function (items) {
    //     for (const item of items) {
    //         console.log(item);
    //     }
    // }
    
    // logItems(["Mango",  "Poly", "Kiwi", "Ajax"]);
    // logItems([1, 2, 3, 4, 5]);
    // logItems(["Клавиатура",  "Наушники", "Часы", "Микрофон"]);
}

{ console.log('Task - поиск логина')
    /* 
     * Напиши функцию findLogin(allLogins, login) для поиска логина
     * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден'
     * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден'
     * - 
    */
    
    // const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];


    // const loginToFind = 'aj4xth3m4n';

    // const message = logins.includes(loginToFind)
    //     ? 'Пользователь ${loginToFind} найден'
    //     : 'Пользователь ${loginToFind} не найден';

    // console.log(message);

    // const findLogin = function (allLogins, loginToFind) {
        // console.log(allLogins);
        // console.log(loginToFind);

        //     for (const login of allLogins) {
        //     if (login === loginToFind) {
        //         return `Пользователь ${loginToFind} найден`;
        //     }
        // }
        // return `Пользователь ${loginToFind} не найден`;

        // }
        
    //     const findLogin = function (allLogins, loginToFind) {
    //         return allLogins.includes(loginToFind)
    //             ? `Пользователь ${loginToFind} найден`
    //             : `Пользователь ${loginToFind} не найден`;
  
    //     }
    
    


    // console.log(findLogin(logins, 'avocod3r'));
    // console.log(findLogin(logins, 'k1widab3st'));
    // console.log(findLogin(logins, 'jam4l'));
    // console.log(findLogin(logins, 'poly1scute'));
}

{ console.log('Task - поиск самого маленького числа в массиве')

    /* Напиши скприпт поиска самого маленького числа в массиве
    * при условии, что числа уникальные (не повторяются).
    */
    

    // const findSmallestNumber = function (numbers) {
    // let smallestNumber = numbers[0];

    // for (const number of numbers) {
    //     if (number < smallestNumber) {
    //         smallestNumber = number;
    //     }
    // }
    //     return smallestNumber;

    // }
    
    
    // console.log(findSmallestNumber([3, 8, 12, -2, 15])); // -2
    // console.log(findSmallestNumber([100, 54, 8, 12, 47])); // 8
    // console.log(findSmallestNumber([7, 21, 84, 15, 4])); // 4
}

{ console.log('Task - замена регистра каждого символа в строке')
    /* Напиши функцию changeCase(string), которая заменяет регистр каждого символа в строке на 
    * противоположный.
    * Например, если строка "JavaScript", то на выходе должна быть строка
    * "jAVAsCRIPT".
    */



    // const changeCase = function (string) {

    // const letters = string.split('');
    // let inverterdString = '';

    // for (const letter of letters) {
    //     const isInLowerCase = letter === letter.toLowerCase();
        
    //     inverterdString += isInLowerCase
    //             ? letter.toUpperCase()
    //             : letter.toLowerCase();

    //         }
    //         return inverterdString;
    //     }
    //     // console.log('inverterdString: ', inverterdString);


    // console.log(changeCase('qweRTY')); // QWErty
    // console.log(changeCase('mAnGo')); // MaNgO
    // console.log(changeCase('AjAx')); // aJaX
}

{ console.log('Task - возврат URL-slug')
    /*  Напиши функцию slugify(string) которая получает строку и возвращает URL-slug из названия статьи (например на dev.to)
    * Заголовок статьи состоит только из букв и пробелов
    * 
    * - Нормализируем строку
    * - Разбиваем по словам
    * - Сшиваем в строку с разделителями
    */
    
    // const slugify = function (title) {
    //     // const normalizedTitle = title.toLowerCase();
    //     // const words = normalizedTitle.split(' ');
    //     // const slug = words.join('-');
                
    //     // return slug;

    //     return title.toLowerCase().split(' ').join('-');

    // }

    // console.log(slugify('Top 10 benefits of React framework'));
    // console.log(slugify('Azure Static Web Apps are Awesome'));
    // console.log(slugify('Technical writing tips for non-native English speakers'));

}

{ console.log('Tasl - makeStringFromArray')
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

// string = array.join(delimeter);

//   // Change code above this line
//   return string;
//     }
//    console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
//    console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
//    console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
// }

// {function findLongestWord(string) {
//   // Change code below this line
//     let words;
//     words = string.split(" ");
    

//     console.log(words);

//   // Change code above this line
// }
//     console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

}

{ console.log('Task - ...(rest)')
    //     const fn = function (...args) {
    //             console.log(args);
    //     };

    //     fn(1, 2, 3);
    //     fn(1, 2, 3, 4, 5);
    //     fn(1, 2, 3, 4, 5, 6, 7);
    // };
}

{ console.log('Task - сложене произвольного количества аргументов')
/*
* Напиши функцию add для сложения произвольного количества аргументов (чисел)
* - операция ... (rest)
 */

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

}

{ console.log('Task - filterNumbers')
    // const filterNumbers = function (array, ...args) {
    //     // console.log('array: ', array);
    //     // console.log('args: ', args);

    //     const uniqueElement = [];

    //     for (const element of array) {
    //         if (args.includes(element)) {
    //             uniqueElement.push(element);
    //             // console.log(`${element} есть везде!`);
    //         }
    //     }
    //     return uniqueElement;
    // };

    // console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
    // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
    // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
}

{ console.log('Example 1 - Індекс маси тіла')
/* Напиши функцію calkBMI (wieght, height), яка розрахує та поверне індекс маси тіла людини.
* Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
* Вага та висота будуть спеціально передані, як рядки.
* Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто, як роздільник дробової частини може бути кома.
* ІМТ треба округлити до однієї цифри після крапки.
*/
    
    // function calcBMI(weight, height) {
    //     weight = Number(weight.replace(',', '.'));
    //     height = Number(height.replace(',', '.'));

    //     return Number((weight / (height ** 2)).toFixed(1));
    // }
    
    // const bmi = calcBMI('88,3', '1.75');
    // console.log(bmi);

}
{ console.log('Task - Найменше з чисел')
/* Напиши функцію min (a, b), яка повертає найменше з чисел a та b.
*/

    // function min(a, b) {
    //     return a > b ? b : a;
    //     }
    
    // console.log(min(2, 5)); // 2
    // console.log(min(3, -1)); // -1
    // console.log(min(1, 1)); // 1
    
}
{ console.log('Task - Площа прямокутника')
/* Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
* значення яких будуть передані до параметра dimensions у вигляді рядка.
* Значення гарантовано розділені пробілом.
*/
    // function getRectArea(dimensions) {
    //     dimensions = dimensions.split(' ');

    //     const first = Number(dimensions[0]);
    //     const second = Number(dimensions[1]);

    //     const result = first * second;
    //     return result;
    // }
    
    
    // console.log(getRectArea('8 18'));
    // console.log(getRectArea('46 11'));
    // console.log(getRectArea('8 112'));
}
{ console.log('Task - Логування елементів')
/* Напиши функцію logItems(items), яка отримує масив та використовує циел for,
* який для кожного елемента масиву буде виводити в консоль повідомлення у форматі
* <номер елемента> - <значення елемента>.
* Нумерація елементів повинна починатися з 1.
*/
    //     function logItems(items) {
    //         for (let i = 0, n = 1; i < items.length; i +=1, n += 1) {
    //         console.log(`${n}. - ${items[i]}`);
            
    //     }
    // }
    
    // logItems(["Mango",  "Poly", "Kiwi", "Ajax"]);
    // logItems([1, 2, 3, 4, 5]);
    // logItems(["Клавиатура",  "Наушники", "Часы", "Микрофон"]);
    
}
{ console.log('Task - Логування контактів')
/* Напиши функцію printContactsInfo(names, phones), яка виводить у консоль ім'я
* та телефонний номер користувача.
* У параметри names та phones будуть передані рядки імен та телефонних номерів,
* розділених комами.
* Порядковий номер імен та телефонів у рядках вказують на відповідністью
* Кількість імен та телефонів гарантовано однакова.
*/
    // function printContactsInfo(names, phones) {
    //     const namesMassive = names.split(',');
    //     const phonesMassive = phones.split(',');
        
    //     for (let i = 0, n = 1; i < namesMassive.length, i < phonesMassive.length; i+=1) {
    //             console.log(`${n}. ${namesMassive[i]} ${phonesMassive[i]}`);
    //         }
    //         // console.log(namesMassive);
    //         // console.log(phonesMassive);
    //     }
            
    //     printContactsInfo('Jacob,William,Solomon,Artem', '89001234567,89001112233,890055566377,890055566300');
}
{ console.log('Task - Пошук найбільшого елемента')
/* Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві
* 
* 
*/
    function findLargestNumber() { 
        // const arr = Array.from(arguments)
        const arr = [...arguments];
        let max = arr[0];
        
        for (const num of arr) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
    
    console.log(findLargestNumber(2, 17, 94, 1, 33, 37)); // 94
    console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83
}
{ console.log('Task 7 - Середнє значення')
/* Напиши функцію calAverage(), яка приймає довільну кількість аргументів і
* повертає їхнє середнє значення.
* Усі аргументи будуть лише числами.
*/

    function calAverage() {

    }


    console.log(calAverage(1, 2, 3, 4)) // 2.5
    console.log(calAverage(14, 8, 2)) // 8
    console.log(calAverage(27, 43, 2, 8, 36)) // 23.2
    
    
}
{ console.log('Task 8 - Формтування часу')
/* Напиши функцію formatTime(minutes), яка переведе значення minutes (кількість хвилин)
* у рядок у форматі годин та хвилин HH:MM.
* 
*/
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    console.log(hours);
    console.log(minutes);

    const doubleDigitHours = String(hours).padStart(2, 0)
    const doubleDigiMinutes = String(minutes).padStart(2, 0)
    
    console.log(`${doubleDigitHours}:${doubleDigiMinutes}`);

    function formatTime(minutes) {

    }

    console.log(formatTime(70)); // "01:10"
    console.log(formatTime(450)); // "07:30"
    console.log(formatTime(1441)); // "24:01"
}
{ console.log('Task 9 - Колекція курсів')
/* 
* 
* 
*/
    
    
}
{ console.log('Task - ')
/* 
* 
* 
*/
    
    
}





