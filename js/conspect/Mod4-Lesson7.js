console.log('Repeta: ');

{console.log('Функция обратного вызова (callback): ');

/*
* - Функция может принимать другие функции как параметры
* - Функцмя, которая передается другой функции как аргумент, называется
* "функция обратного (отложенного) вызова" (callback-функция)
* - Функция, которая принимает другую функцию как параметр
* или возвращает как результат своей работы, называется
* "функцией высшего порядка"
*/

{    const fnA = function (message, callback) {
        // console.log(message);

        // console.log(callback);
        // callback(100);
        
    };
    
    const fnB = function (number) {
        // console.log('Это лог при вызове fnB', number);
    };

        fnA('afajfsdjfls', fnB)
}
    {
        const doMath = function (a, b, callback) {
            const result = callback(a, b);

            // console.log(result);
        };

        doMath(2, 3, function (x, y) { // const add = function (x, y)
            return x + y;
        });                         // };

        doMath(26, 15, function (x, y) { //const sub = function
            return x - y;
        });                     // };

                            // doMath(2, 3, add);
                            // doMath(26, 15, sub);
    }

}





{console.log('Example: Отложенный вызов: регистрация событий');

    // const buttonRef = document.querySelector('.js-button');   //  - класс кнопки в html

    // const handleBtnClick = function () {
    //     console.log('Клик по кнопке ' + Date.now());
    // };

    // buttonRef.addEventListener('click', handleBtnClick); // - слушатель события - видає помилку, знайти, яку

}

{console.log('Example: Отложенный вызов: геолокация');

    // const onGetPositionSuccess = function (position) {
    //     console.log('Это вызов onGetPositionSuccess');
    //     console.log(position);
    // }
    
    // const onGetPositionError = function (error) {
    //     console.log('Это вызов onGetPositionError');
    //     console.log(error);
    // }

    
    // window.navigator.geolocation.getCurrentPosition(
    // onGetPositionSuccess,
    //     onGetPositionError,);

}

{console.log('Example: Отложенный вызов: интервалы');

    // const callback = function () {
    //     console.log('Через 3 секунды внтури колбека в таймауте');
    // };

    // console.log('В коде перед таймаутом');

    // setTimeout(callback, 2000);

    // console.log('В коде после таймаутом');

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
    

    // const filter = function (array, test) {
    //     const filteredArray = [];

    //     for (const el of array) {
    //         console.log(el);
    //         console.log(test(el));
    //     }
    //     return filteredArray;
    // };

    // 1. надо передать функцию
    // 2. функция получает элемент массива
    // 3. если элемент массива удовлетворяет условию то функция вернет true
    // 3. если элемент массива НЕ удовлетворяет условию то функция вернет false
    
    // const callback1 = function (value) {
    //     return value >= 3;
    // }
   

    // const r1 = filter([1, 2, 3, 4, 5,], callback1)
    // console.log(r1);
    
    // const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    //     return value <= 4;
    // });
    // console.log(r2);


    // const fruits = [
    //     { name: 'apples', quantity: 200, isFresh: true },
    //     { name: 'grapes', quantity: 150, isFresh: false },
    //     { name: 'bananas', quantity: 100, isFresh: true },
    // ];

    // const getFruitsWithQuantity = function (fruit) {
    //     return fruit.quantity >= 120;
    // };

    // const r3 = filter(fruits, getFruitsWithQuantity);
    // // console.log(r3);

}

{console.log('Функция замыкания: ');

/* Функция результатом своей работы может возвращать другую функцию.
* 
* Возвращаемая функция во время вызова будет иметь доступ
* ко всем локальным переменным (области видимости)
* родительской функции (той, из которой её вернули)б
* это называется "замыкание".
*/
    
    const fnA = function (parameter) {
        const innerVariable = 'значение втутренней переменной функции fnA';

        const innerFunction = function () {
            // console.log(parameter);
            // console.log(innerVariable);
            // console.log('Это вызов innerFunction');
        };
        
        return innerFunction;
    };

    const fnB = fnA(45455);

    fnB();

    // console.log(fnB);
}

{console.log('Example: Поварёнок');



    /* 
    * 
    */
    
    const makeDish = function (sheffName, dish) {
        console.log(`${sheffName} готовит ${dish}`);
    };


    makeDish(`Mango`, `пирожок`);
    makeDish(`Mango`, `омлет`);
    makeDish(`Mango`, `чай`);
    
    makeDish('Poly', 'котлеты');
    makeDish('Poly', 'супик');
    makeDish('Poly', 'кофе');

    const makeSheff = function (name) {
        const makeDish = function (dish) {
            console.log(`${sheffName} готовит ${dish}`);
        };

        return makeDish;
    };


};

{console.log('Example: ');



}

{console.log('Example: ');



}



{console.log('Autocheck: ');




}

{console.log('Autocheck: ');




}

{console.log('Autocheck: ');




}

{console.log('Autocheck: ');




}

{console.log('Autocheck: ');




}



{ console.log('Task-Konsp: ');


}

{console.log('Task-Konsp: ');




}

{console.log('Task-Konsp: ');




}

{console.log('Task-Konsp: ');




}

{console.log('Task-Konsp: ');




}



{console.log(': ');

    
    
    
    
    
}



