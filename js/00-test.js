

// ЗАДАЧА 1
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

    console.log(`ЗП работника номер ${i} - ${salary}`)

// 4. Суммировать все з.п.
    totalSalary += salary;

}
// 5. Лог
console.log('totalSalary; ', totalSalary);






// ЗАДАЧА 2
/*
* Напишите скрипт, который подсчитывает сумму всех чётных чисел,
* которые входят в диапазон чисел в переменных от min до max.
* Например, если min=0 и max=5, то в нём два чётных числа - 2 и 4, их сумма 6
* 
*/






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

const totalSpent = 2000;
let payment = 500;
let discount = 0;

//'Бронзовый партнёр, скидка 2%'
//'Серебряный партнёр, скидка 5%'
//'Золотой партнёр, скидка 10%'
//'У Вас ещё нет партнёрской скидки%'




