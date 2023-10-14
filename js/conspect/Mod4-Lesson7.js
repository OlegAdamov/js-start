console.log('%cRepeta: ', 'color: blue');

{console.log('Функция обратного вызова (callback): ');

/*
* - Функция может принимать другие функции как параметры
* - Функцмя, которая передается другой функции как аргумент, называется
* "функция обратного (отложенного) вызова" (callback-функция)
* - Функция, которая принимает другую функцию как параметр
* или возвращает как результат своей работы, называется
* "функцией высшего порядка"
*/

// {    const fnA = function (message, callback) {
//         console.log(message);

//         console.log(callback);
//         callback(100);
        
//     };
    
//     const fnB = function (number) {
//         console.log('Это лог при вызове fnB', number);
//     };

//         // fnA('some text', fnB)
// }
//     {
//         const doMath = function (a, b, callback) {
//             const result = callback(a, b);

//             // console.log(result);
//         };

//         doMath(2, 3, function (x, y) { // const add = function (x, y)
//             return x + y;
//         });                         // };

//         doMath(26, 15, function (x, y) { //const sub = function
//             return x - y;
//         });                     // };

//                             // doMath(2, 3, add);
//                             // doMath(26, 15, sub);
//     }
}

{console.log('Example: Отложенный вызов: регистрация событий');

//     const buttonRef = document.querySelector('.js-button');   //  - класс кнопки в html

//     const handleBtnClick = function () {
//         console.log('Клик по кнопке № ' + Date.now());
//     };

//     buttonRef.addEventListener('click', handleBtnClick); // - слушатель события, вызывает функцию при клике
}

{console.log('Example: Отложенный вызов: геолокация');

//     const onGetPositionSuccess = function (position) {
//         console.log('Это вызов onGetPositionSuccess');
//         console.log(position);
//     }
    
//     const onGetPositionError = function (error) {
//         console.log('Это вызов onGetPositionError');
//         console.log(error);
//     }
    
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//         onGetPositionError,);
}

{console.log('Example: Отложенный вызов: интервалы');

    // const callback = function () {
    //     console.log('Через 3 секунды внтури колбека в таймауте');
    // };

    // console.log('В коде перед таймаутом');

    // setTimeout(callback, 3000);

    // console.log('В коде после таймаута');
}

{console.log('Example: Отложенный вызов: http-запрос');
    /* 
    * - API URL: HTTPS:/pokeapi.co/api/v2/pokemon
    */
    // const onRequestSuccess = function (response) {
    //     console.log('Вызов функци onRequestSuccess после успешного ответа бекэнда');

    //     console.log(response);
    // };

    // fetch('HTTPS:/pokeapi.co/api/v2/pokemon')
    //     .then(res => res.json())
    //     .then(onRequestSuccess);
}

{console.log('Example: Фильтр');

//     const filter = function (array, test) {
//         const filteredArray = [];

//         for (const el of array) {
//             // console.log(el);
//             const passed = test(el);

//             if (passed) {
//                 filteredArray.push(el);
// }
//             // console.log(test(el));
//         }
//         return filteredArray;
//     };

//     // 1. надо передать функцию
//     // 2. функция получает элемент массива
//     // 3. если элемент массива удовлетворяет условию то функция вернет true
//     // 3. если элемент массива НЕ удовлетворяет условию то функция вернет false
    
//     const callback1 = function (value) {
//         return value >= 3;
//     }
   
//     const callback2 = function (value) {
//         return value <= 4;
//     }

//     const r1 = filter([1, 2, 3, 4, 5,], callback1)
//     console.log(r1);
    
//     const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
//     console.log(r2);


//     const fruits = [
//         { name: 'apples', quantity: 200, isFresh: true },
//         { name: 'grapes', quantity: 150, isFresh: false },
//         { name: 'bananas', quantity: 100, isFresh: true },
//     ];

//     const getFruitsWithQuantity = function (fruit) {
//         return fruit.quantity >= 120;
//     };

//     const r3 = filter(fruits, getFruitsWithQuantity);
//     console.log(r3);

}

{console.log('Функция замыкания (closures): ');

/* Функция результатом своей работы может возвращать другую функцию.
* 
* Возвращаемая функция во время вызова будет иметь доступ
* ко всем локальным переменным (области видимости)
* родительской функции (той, из которой её вернули)б
* это называется "замыкание".
*/
    
    // const fnA = function (parameter) {
    //     const innerVariable = 'значение втутренней переменной функции fnA';

    //     const innerFunction = function () {
    //         console.log(parameter);
    //         console.log(innerVariable);
    //         console.log('Это вызов innerFunction');
    //     };
        
    //     return innerFunction;
    // };

    // const fnB = fnA(45455);

    // fnB();

    // console.log(fnB);
}

{console.log('Example: Поварёнок');
   
    // const makeDish = function (sheffName, dish) {
    //     console.log(`${sheffName} готовит ${dish}`);
    // };


    // makeDish(`Mango`, `пирожок`);
    // makeDish(`Mango`, `омлет`);
    // makeDish(`Mango`, `чай`);
    
    // makeDish('Poly', 'котлеты');
    // makeDish('Poly', 'супик');
    // makeDish('Poly', 'кофе');

    // const makeSheff = function (name) {
    //     const makeDish = function (dish) {
    //         console.log(`${name} готовит ${dish}`);
    //     };

    //     return makeDish;
    // };

    // const mango = makeSheff('Mango');
    // // console.log(mango);
    // const poly = makeSheff('Poly');

    // mango('котлеты');
    // mango('пирожок');
    // poly('чай');
    // poly('омлет');
}

{console.log('Example: Округлятор');

    // {
    const floatingPoint = 3.326445454;
    const someInt = Math.round(floatingPoint); // 3
    const withDecimals = Number(floatingPoint.toFixed(2)); // 3.26

    // console.log(Number(floatingPoint.toFixed(3)));
    // console.log(Number(floatingPoint.toFixed(4)));

    // const number1 = 5.125665;
    // const number2 = 12.654554;
    // console.log(Number(number1.toFixed(2)));
    // console.log(Number(number2.toFixed(4)));

    // const rounder = function (number, places) {
    //     return Number(number.toFixed(places))
    // };

    // console.log(rounder(3.548975, 4));
    // console.log(rounder(3.55454, 3));
    // console.log(rounder(3.21578, 5));
    // console.log(rounder(3.212215465987, 7));
    // }

    // {
    //     const rounder = function (places) {
    //     return function (number) {
    //         return Number(number.toFixed(places))
    //     }
    // }
    //     const rounder2 = rounder(2);
    //     const rounder3 = rounder(3);
    //     const rounder5 = rounder(5);
    //     const rounder7 = rounder(7);

    //     // console.dir(rounder2);

    //     console.log(rounder2(3.548975));
    //     console.log(rounder3(3.55454));
    //     console.log(rounder5(3.21578));
    //     console.log(rounder7(3.212215465987));
    // }

}
        
{console.log('Example: Приватные данные и функции - скрытие реализации, интерфейс');

    // const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    //     let salary = baseSalary;

    //     const changeBy = function (amount) {
    //         salary += amount;   // можно убрать строку
    //     };
    

    //     return {
    //         raise(amount) {
    //             changeBy(amount);  // если убрать строку - выше, тогда salary += amount;
    //         },
    //         lower(amount) {
    //             changeBy(amount);// если убрать строку - выше, тогда salary -= amount;
    //         },
    //         current() {
    //             return `Текущая зарплата ${employeeName} - ${salary}`;
    //         },
    //     };
    // };

    // const salaryManager = salaryManagerFactory('Mango', 5000);

    // console.log(salaryManager.current());

}

{console.log('Стрелочные функции');

    /* 
    * - Объявление
    * - Явный и неявный возврат
    * - Аргумент
    * - Неявный возврат объекта
    */

// {    const add = function (a, b, c,) {
//         console.log(a, b, c);
//         return a + b + c;
//     };

//         console.log(add(5, 10, 15));
// }
    
// {    const addArrow = (a, b, c) => {   // {} - явный возврат (explicit)
//         console.log(a, b, c);
//         return a + b + c;
//     };

//     console.log(addArrow(12, 18, 32));
// }

// {    const addArrow1 = (a, b, c) => a + b + c;  // !{} - НЕявный возврат (impicit)
        
//     console.log(addArrow1(37, 25, 69));
//     }

//     {const fnA = function () {
//         return {
//             a: 5,
//         };
//     };
        
//         console.log(fnA())
    
//         const arrowFnA = () => ({arrowA: 5,})

//         console.log(arrowFnA());
//     }

    // {        console.log(`Синтаксис стрелочной функции`);
        /*
        * 
        * - с параметрами
        * - с одним параметром
        * - без параметров
       */

        // const add = (a, b) => {
        //     console.log(`afaff`);
        //     return a + b;
        // }
        // console.log(add(2, 3));


        // const logMessage = message => {
        //     console.log(message)
        // };
        // logMessage(`Привет`);


        // const greet = () => {
        //     console.log(`Привет`);
        // };
        // greet();

        /*
        * Явный (explicit) и неявный (implicit) возврат
        */
        
        // const add = (a, b) => {
        //     return a + b;
        // }
        // console.log(add(2, 3));


        // const add1 = (a, b) => a + b;

        // console.log(add1(2, 3));

        /*
        * Псевдомассив arguments
        */

        
        // const add = (...args) => {
        //     console.log(args);
        // };
        // add(1, 2, 3, 4, 5, 6, 7);
//    }

    // { console.log(`Контекст стрелки`)
        
        /*
        * Контекст внутри стрелки определяется местом её объявления,
        * а не вызова и ссылается на контекст родительской функции
        */
        
        // const showThis = () => {   // Контекст стрелки формируется и запоминается в месте её объявления
        //     console.log(`this in showThis: `, this);
        // };

        // showThis(); // this in showThis: window

        // const user = { name: `Mango` };
        // user.showContext = showThis;

        // user.showContext(); // this in showThis: window



        // const user = {
        //     fullName: `Mango`,
        //     showName() {
        //         console.log(`this: `, this);
        //         console.log(`this.fullName: `, this.fullName);

        //         const inner = () => {
        //             console.log(`this in inner: `, this);
        //         };
        //     inner();
        //     },
        // };

        // user.showName();

        /*
        * 💩 Стрелки как методы объекта (стрелочная функция запоминает this при объявлении
        * и не может быть перезаписан при вызове)
        */
        
        // const user = {
        //     fullName: `Mango`,
        //     showName() {   //showName: () => {   - undefined 💩
        //         console.log(`this: `, this);
        //         console.log(`this.fullName: `, this.fullName);
        //     },
        // };

        // user.showName();

/* 
* 💩 Стрелка конструктор (стрелочная функция не может быть конструктором)
*/

        // const User = function (name) {  // const User = name => {  - 💩
        //     this.name = name;
        // }

    // console.log(new User(`Mango`));
    
    //   }

    // {
    //     const objA = {
    //     x: 5,
    //     showX() {
    //         console.log("This in objA.showX: ", this);
    //         console.log(this.x);

    //         const objB = {
    //             y: 10,
    //             showThis: () => {
    //                 console.log("This in objB.showThis: ", this);
    //             },
    //         };

    //         objB.showThis();
    //     },
    // };

    // objA.showX();

    // }
}

{console.log('Autocheck: 11');

// // Change code below this line
// const filterArray = (numbers, value) => {
//   let filteredNumbers = [];

//  numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
//     console.log(filterArray([1, 2, 3, 4, 5], 3));
//     console.log(filterArray([1, 2, 3, 4, 5], 4));
//     console.log(filterArray([1, 2, 3, 4, 5], 5));
//     console.log(filterArray([12, 24, 8, 41, 76], 38));
//     console.log(filterArray([12, 24, 8, 41, 76], 20));


}

{console.log('Autocheck: 13');

function changeEven(numbers, value) {
  // Change code below this line

    let newNumbers = [];

numbers.forEach(number => {
  if (number % 2 === 0) {
    newNumbers.push(number + value);
  } else {
      newNumbers.push(number);}
});
    return newNumbers

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] += value;
//     }
//   }
  // Change code above this line
    }
    
    // console.log(changeEven([1, 2, 3, 4, 5], 10));
    // console.log(changeEven([2, 8, 3, 7, 4, 6], 10))
    // console.log(changeEven([17, 24, 68, 31, 42], 100))
    // console.log(changeEven([44, 13, 81, 92, 36, 54], 100))

}

{ console.log('Task-Konsp: Императивное программирование');

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

// console.log(filteredNumbers); // [4, 5]
}

{console.log('Task-Konsp: Декларативное программирование');

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]
}

{console.log('Example: Цепочки вызовов');

    const numbers = [1, 2, 5, 6, 3, 4];
    
    /* const greaterThenTwo = numbers.filter(function (num) {
        return num > 2;
    }); */
    const greaterThenTwo = numbers.filter(num => num > 2 );

    // console.log(greaterThenTwo);

    /* const multByTwo = greaterThenTwo.map(function (num) {
        return num * 3;
    }); */
    const multByTwo = greaterThenTwo.map((num) => num * 3);

    // console.log(multByTwo);

    /* const sorted = multByTwo.sort(function (a, b) {
        return a - b;
    }); */
    const sorted = multByTwo.sort((a, b) => a - b);

    // console.log(multByTwo);


    /* const res = numbers
        .filter(function (num) {
            return num > 2;
        })
        .map(function (num) {
            return num * 3;
        })
        .sort(function (a, b) {
            return a - b;
        }); */
    const res = numbers
        .filter(num => num > 2)
        .map(num => num * 3)
        .sort((a, b) => a - b);

    // console.log(res);







    
}

{console.log('Example: Сортировка тех кто онлайн по рангу');

    // const players = [
    //     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
    //     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
    //     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
    //     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
    // ];

/*     const onlineAndSorted = players
        .filter(function (player) {
            return player.isOnline;
        })
        .sort(function (prevPlayer, nextPlayer) {
            return prevPlayer.rank - nextPlayer.rank;
        }); */
    
    //     const onlineAndSorted = players
    //     .filter(player => player.isOnline)
    //     .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
    // console.table(onlineAndSorted);
}

{console.log('Example: Увеличиваем количество поинтов каждого игрока');

    const players = [
        { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
        { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
        { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, online: true},
        { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, online: false},
        { id: 'player-5', name: 'Kiwi', timePlayed: 80, points: 48, online: true},
    ];

    /* const updatePlayers = players.map(function (player) {
        return {
            ...player,
            points: player.points + player.points * 0.1,
        };
    }); */
    
    const updatePlayers = players.map(player => ({
            ...player,
            points: player.points + player.points * 0.1,
        }));
    // console.table(updatePlayers);
}

{console.log('Example: Увеличиваем количество часов игрока по id');
    
    const players = [
        { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
        { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
        { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, online: true},
        { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, online: false},
        { id: 'player-5', name: 'Kiwi', timePlayed: 80, points: 48, online: true},
    ];

    const playerIdToUpdate = 'player-3';

    /* const updatePlayers = players.map(function (player) {
        if (player.id === playerIdToUpdate) {
            return {
                ...player,
                timePlayed: player.timePlayed + 50,
            };
        }
        return player;
    }); */

    /*  const updatePlayers = players.map(player => {
            return player.id === playerIdToUpdate
                ? { ...player, timePlayed: player.timePlayed + 50}
                : player;
        }); */
    
        const updatePlayers = players.map(player =>
        player.id === playerIdToUpdate
                ? { ...player, timePlayed: player.timePlayed + 50}
                : player
                );
    
    // console.table(updatePlayers);
}

{console.log('Example: ');
    

}

{console.log('Autocheck: ');

}

{console.log('Task-Konsp: ');

}

{console.log(' ')}


console.log('%cArtem Ricych: ', 'color: blue');

{   console.log('Callback')
    // const arr = [2, 6, 1, 7, 3];

    // function each(arr, callback) {
    //     let total = arr[0];
    //     for (let i = 1; i < arr.length; i +=1) {
    //         total = callback(total, arr[i]);
    //         // console.log(item);
    //     };
    //     return total;
    // };

    // console.log(each(arr, add));

    // console.log(each(arr, sub));
    
    // console.log(each(arr, multiply));

    // console.log(each(arr, division));

    // function add(first, second) {
    //     return first + second;
    // };
    
    // function sub(first, second) {
    //     return first - second;
    // };

    // function summultiply(first, second) {
    //     return first * second;
    // };

    // function division(first, second) {
    //     return first / second;
    // }
}

{console.log('Example 3 - forEach - Перебрати весь масив')
/* 
* - Що він робить?
* - Що він приймає?
* - Що він повертає?
*/
    const arr = [2, 6, 1, 7, 3];

    // arr.forEach(function (_, idx) {
    //     console.log(idx);
    // })

    // item - ітеруємий елемент
    // idx - індекс поточного елемента
    // arr - масив який ітеруємо (перебираємо)
    // arr.forEach(function (item, idx, arr) {
    //     console.log('item: ', item);
    //     console.log('idx: ', idx);
    //     console.log('arr: ', arr);
    // }
    // );

    // arr.forEach(function (item, idx, arr) {
    //     arr[idx] = item * 2;
    // })
    // console.log(arr)

}

{console.log('Function-Arrow')
/* 
* - arguments - відсутній
* - 
* - 
* - 
*/
    // const foo = (...rest) => {
    //     console.log(rest)
    // };

    // foo(1,2,3,4,5);
    // foo(1, 2, 3, 4, 21, 532, 5324, 5);
    
    // const arr = [2, 6, 1, 7, 3];


    // function each(arr, callback) {
    //     let total = arr[0];
    //     for (let i = 1; i < arr.length; i +=1) {
    //         total = callback(total, arr[i]);
    //         // console.log(item);
    //     };
    //     return total;
    // };


/*     function add(first, second) {
        return first + second;
    }; */
    const add = (first, second) => first + second;
    
/*     function sub(first, second) {
        return first - second;
    }; */
    const sub = (first, second) => first - second;

/*     function multiply(first, second) {
        return first * second;
    }; */
    const multiply = (first, second) => first * second;

    /*     function division(first, second) {
        return first / second;
    } */
    const division = (first, second) => first / second;

    
    // console.log(each(arr, add));
    // console.log(each(arr, sub));
    // console.log(each(arr, multiply));
    // console.log(each(arr, division));

    // const user = {
    //     userName: 'Test user',
    //     say() {
    //         console.log(`Hello ${this.userName}`);
    //     },
    //     sayHello: () => {
    //         console.log(`Hello ${this.userName}`);
    //   }
    // };
    
    // user.say();
    // user.sayHello();
}

{console.log('Example 1 - callback - createProduct')
    /* Напишіть наступні функції:
    * - createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
    * Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор
    * у властивість id та викликає коллбек передаючи йому створений об'єкт.
    * - logProduct(product) - коллбек приймаючий об'єкт продукту і логуччий його в консоль.
    * - logTotalPrice(producn) - коллбек, що приймає об'єкт продукту і логує 
    * загальну вартість товару в консоль. 
    */
   
    // function createProduct(obj, callback) {
    //     const product = {
    //         id: Date.now(),
    //         ...obj,
    //     };
    //     callback(product);
    //     console.log(product);
    // };

    // function logProduct(obj) {
    //     console.log(`Product: ${obj.name}`);
    // };

    // function logTotalPrice({price, quantity}) { 
    //     console.log(`Total price: ${price * quantity}`);
    // };

    // createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
    // createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
}

{console.log('Example 2 - callback - TRANSACTION_LIMIT')
/*  
* - Додайте в об'єкт account методи withdraw (amount, onSuccess, onError)
* та deposit(amount, onSuccess, onError), де перший параметр це сума операцій,
* а другий та третій - коллбеки.
* - Метод withdraw викликає onError, якщо amount більше TRANSACTION_LIMIT, 
* або this.balance, і onSuccess в іншому випадку.
* - Метод deposit викликає onError, якщо amount більше TRANSACTION_LIMIT,
* або менше або дорівнює нулю, і onSuccess в іншому випадку.
*/
    
    // const TRANSACTION_LIMIT = 1000;

    // const account = {
    //     userName: 'Jacob',
    //     balance: 400,

    //     withdraw(amount, onSuccess, onError) {
    //         if (amount > TRANSACTION_LIMIT) {
    //             onError(`TRANSACTION_LIMIT: ${TRANSACTION_LIMIT}`)
    //             return;
    //         } else if (this.balance < amount) {
    //             onError(`Not enough in the account`);
    //             return;
    //         } 
    //         this.balance -= amount;
    //         onSuccess(`Transaction complete: ${amount}, balance: ${this.balance}`);
    //     },

    //     deposit(amount, onSuccess, onError) {
    //         if (amount > TRANSACTION_LIMIT) {
    //             onError(`TRANSACTION_LIMIT: ${TRANSACTION_LIMIT}`);
    //             return;
    //         } else if (amount <= 0) {
    //             onError(`Nice try Bro! 😂`);
    //             return;
    //         }
    //         this.balance += amount;
    //         onSuccess(`Transaction complete: ${amount}, balance: ${this.balance}`)
    //     }
    // };

    // function handleSuccess(message) {
    //     console.log(`✅ Success! ${message}`);
    // };

    // function handleError(message) {
    //     console.log(`❌ Error! ${message}`);
    // };
    



    // account.withdraw(2000, handleSuccess, handleError);
    // account.withdraw(600, handleSuccess, handleError);
    // account.withdraw(300, handleSuccess, handleError);
    // account.deposit(1700, handleSuccess, handleError);
    // account.deposit(0, handleSuccess, handleError);
    // account.deposit(-600, handleSuccess, handleError);
    // account.deposit(600, handleSuccess, handleError);
}

{console.log('Example 4 - function Arrow - createProduct')

    // Виконайте рефакторинг коду за допомогою стрілочних функцій.
    
/*     const  createProduct = (partialProduct, callback) => {
        const product = {
            id: Date.now(),
            ...partialProduct,
        };
        callback(product);
    }; */
    
    // const createProduct = (partialProduct, callback) => callback({
    //         id: Date.now(),
    //         ...partialProduct,
    //     });
    

/*     function logProduct(obj) {
        console.log(`Product: ${obj.name}`);
    }; */
    
    // const logProduct = product => console.log(`Product: ${product.name}`);

/*     function logTotalPrice({price, quantity}) { 
        console.log(`Total price: ${price * quantity}`);
    }; */

    // const logTotalPrice = ({price, quantity}) => console.log(`Total price: ${price * quantity}`)

    // createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
    // createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
}

{console.log('Example 5 - function Arrow - TRANSACTION_LIMIT')

// Виконайте рефакторинг коллбеків за допомогою стрілочних функцій

    // const TRANSACTION_LIMIT = 1000;

    // const account = {
    //     userName: 'Jacob',
    //     balance: 400,

    //     withdraw(amount, onSuccess, onError) {
    //         if (amount > TRANSACTION_LIMIT) {
    //             onError(`TRANSACTION_LIMIT: ${TRANSACTION_LIMIT}`)
    //             return;
    //         } else if (this.balance < amount) {
    //             onError(`Not enough in the account`);
    //             return;
    //         } 
    //         this.balance -= amount;
    //         onSuccess(`Transaction complete: ${amount}, balance: ${this.balance}`);
    //     },

    //     deposit(amount, onSuccess, onError) {
    //         if (amount > TRANSACTION_LIMIT) {
    //             onError(`TRANSACTION_LIMIT: ${TRANSACTION_LIMIT}`);
    //             return;
    //         } else if (amount <= 0) {
    //             onError(`Nice try Bro! 😂`);
    //             return;
    //         }
    //         this.balance += amount;
    //         onSuccess(`Transaction complete: ${amount}, balance: ${this.balance}`)
    //     }
    // };

/*     function handleSuccess(message) {
        console.log(`✅ Success! ${message}`);
    }; */
   
    // const handleSuccess = message => console.log(`✅ Success! ${message}`);

/*     function handleError(message) {
        console.log(`❌ Error! ${message}`);
    }; */

    // const handleError = message => console.log(`❌ Error! ${message}`);
    



    // account.withdraw(2000, handleSuccess, handleError);
    // account.withdraw(600, handleSuccess, handleError);
    // account.withdraw(300, handleSuccess, handleError);
    // account.deposit(1700, handleSuccess, handleError);
    // account.deposit(0, handleSuccess, handleError);
    // account.deposit(-600, handleSuccess, handleError);
    // account.deposit(600, handleSuccess, handleError);
}

{console.log('Example 6 - inline Arrow function')

    // function each(array, callback) {
    //     const newArr = [];
    //     for (const el of array) {
    //         newArr.push(callback(el));
    //     }
    //     return newArr;
    // };
    
/*     console.log(
        each([64, 49, 36, 25, 16], function (value) {
            return value * 2;
        }),
    ); */
    // console.log(each([64, 49, 36, 25, 16], value => value * 2));

/*     console.log(
        each([64, 49, 36, 25, 16], function (value) {
            return value - 10;
        }),
    ); */
    // console.log(each([64, 49, 36, 25, 16], value => value - 10));

/*      console.log(
        each([64, 49, 36, 25, 16], function (value) {
            return Math.sqrt(value);
        }),
    ); */
    // console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

/*     console.log(
        each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
            return Math.ceil(value);
        }),
    ); */
    // console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

/*     console.log(
        each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
            return Math.floor(value);
        }),
    ); */
    // console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
}

{console.log('%cExample 2 - callback', "color: green")

// Виконати рефакторитг коду за допомогою методу forEach та стрілочної функції

    function logItems(items) {
        console.log(items);
        for (let i = 0; i < logItems.length; i += 1) {
            console.log(`${i + 1} - ${items[i]}`)
        }
    }
    
    logItems(['Mango', 'Poly', 'Ajax']);
    logItems(['🍎','🍇','🍑','🍌','🍋']);

}
{   console.log('%cNext', "color: red")
}

