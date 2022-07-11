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

    const buttonRef = document.querySelector('.js-button');   //  - класс кнопки в html

    const handleBtnClick = function () {
        console.log('Клик по кнопке ' + Date.now());
    };

    buttonRef.addEventListener('click', handleBtnClick); // - слушатель события

}

{console.log('Example: ');



}

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



{console.log('Task-Konsp: ');




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



