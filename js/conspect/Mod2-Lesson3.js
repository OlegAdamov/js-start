{
//     const clients = ["Mango", "Poly", "Ajax", "Daria", "Robin", "Frank"];

// // // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);
// clients[0] = "Friend";
// clients[1] = "Maksim";

// console.log(clients);
// console.log(clients.length);

// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex);
// console.log(clients[lastElementIndex]);

// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);
// }

// for (const client of clients) {
//     console.log(client);
// }

// const clientNameToFind = "Frank";
// let message = "Клиент с таким иенем отсутствует в базе данных!";

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клиент с таким именем есть в базе данных!";
//         break;
//     }
    
// }
// console.log(message);
}


{

// const numbers = [1, 5, 16, 28, 30, 38, 10, 3];
// const threshold = 15;
// // // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }
}


{
// let a = 5;
// // // Присвоение по значению, в памяти будет создана еще
// // // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // // Изменим значение a
// a = 10;
// console.log(a); // 10
// // // Значение b не изменилось так как это отдельная копия
//     console.log(b); // 5
}

{
// const name = "Mango";
// console.log(name.split(""));

// const message = "JavaScript это интересно";
// console.log(message.split(" "));
}

{
// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("-"));
}

{
// const clients = ["Mango", "Poly", "Ajax", "Daria", "Robin", "Frank"];
// console.log(clients.indexOf("Robin"));
// console.log(clients.indexOf("Monkong"));

// console.log(clients.includes("Frank"));
// console.log(clients.includes("Pol"));
}

{
    // const fruit = "apple";

    // if (fruit === "apple" || fruit === "strawberry") {
    //     console.log("It is a red fruit!");
    // }

    // if (fruit === "apple" ||
    //     fruit === "strawberry" ||
    //     fruit === "cherry" ||
    //     fruit === "cranberries") {
    //     console.log("It is a red fruit!");
    // }
}

{
//     const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
//     const fruit = "cherry";
    
//     const hasFruit = redFruits.includes(fruit);

//     if (hasFruit) {
//         console.log(`${fruit} is a red fruit!`);
//     } else {
//         console.log(`${fruit} is not a red fruit`);
// }
}

{
//     const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(0, 2)); // ["Poly", "Kiwi"]
}

{
    // const scores = [1, 2, 3, 4, 5, 6];
    // const deletedScores = scores.splice(0, 3);
    // console.log(scores);

    // console.log(deletedScores);
}


{
    // const colors = ["red", "green", "blue"];

    // colors.splice(2, 0, "purple");
    // colors.splice(1, 0, "white", "black");
    // console.log(colors);
}


{
    // const languages = ['C', "C++", "Java", "JavaScript"];

    // languages.splice(1, 2, "Python");
    // console.log(languages);
}

{
    // const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
    // const newClients = ["Monkong", "Singu"];

    // const allClientsWithOldFirst = oldClients.concat(newClients);
    // console.log(allClientsWithOldFirst);

    // const allClientsWithNewFirst = newClients.concat(oldClients);
    // console.table(allClientsWithNewFirst);

    // console.table(oldClients);
    // console.table(newClients);
}


{
    /* Напиши скприпт поиска самого маленького числа в массиве
    * при условии, что числа уникальные (не повторяются).
    */
    
    // const numbers = [51, 18, 13, 24, 7, 85, 19];
    // let smallestNumber = numbers[0];

    // for (const number of numbers) {
    //     // console.log(number);

    //     if (number < smallestNumber) {
    //         smallestNumber = number;
    //     }
    // }
    // console.log('smallestNumber: ', smallestNumber);
}

{
/*  Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
* Элементов может быть произвольное количество.
* Пусть элементы массива в строке будут разделены запятой.
* - Сначала через for
* - Потом через join.
*/

    // const friends = ["Mango",  "Poly", "Kiwi", "Ajax"]

    // let string = '';
    // for (const friend of friends) {
    //     string += friend + ',';
    // }
    // string = string.slice(0, string.length - 1);

// const string = friends.join(', ')
//     console.log(string);
}

{
    /* Напиши скрипт, которые заменяет регистр каждого символа в строке на 
    * противоположный.
    * Например, если строка "JavaScript", то на выходе должна быть строка
    * "jAVAsCRIPT".
    */

    // const string = 'JavaScript';
    // const letters = string.split('');
    // let inverterdString = '';

    // console.log(letters);

    // for (const letter of letters) {
        // console.log(letter);
        
        // if (letter === letter.toLowerCase()) {
        //     // console.log('Эта буква в нижнем регистре!!! - ', letter);

        //     inverterdString += letter.toUpperCase();
        // } else {
        //     inverterdString += letter.toLowerCase();
        // }

    //     inverterdString +=
    //         letter === letter.toLowerCase()
    //             ? letter.toUpperCase()
    //             : letter.toLowerCase();

    // }

    // console.log(inverterdString);
}


{
    /*  Делаем slug в URL из названия статьи (например на dev.to)
    * Заголовок статьи состоит только из букв и пробелов
    * 
    * - Нормализируем строку
    * - Разбиваем по словам
    * - Сшиваем в строку с разделителями
    */

    // Должно получиться top-10-benefits-of-react-framework
    // const title = 'Top 10 benefits of React framework';
    // const normalizedTitle = title.toLowerCase();
    // const words = normalizedTitle.split(' ');
    // const slug = words.join('-');

    // console.log(words);
    // console.log(slug);
    
    // const slug1 = title.toLowerCase().split(' ').join('-');
    
    // console.log(slug1);
}

{
    /* 
    * Напиши скрипт, который считает сумму элементов двух массивов.
    */
    
    // const array1 = [5, 10, 15, 20];
    // const array2 = [10, 20, 30];

    // let total = 0;

    // // for (let i = 0; i < array1.length; i += 1) {
    // //     total += array1[i];
    // // }

    // // for (let i = 0; i < array2.length; i += 1) {
    // //     total += array2[i];
    // // }

    // const numbers = array1.concat(array2);

    // for (const number of numbers) {
    //     total += number;
    // }

    // console.log(total);
    // console.log(array1);
    // console.log(array2);
    // console.log(numbers);

}

{
    /* 
    * Работаем с коллекцией карточек в trello
    * - Метод splice()
    * - Удалить
    * - Добавить
    * -  Обновить
    */
    
    // const cards = [
    //     'Карточка-1',
    //     'Карточка-2',
    //     'Карточка-3',
    //     'Карточка-4',
    //     'Карточка-5',
    // ];

    // console.table(cards);

    /* 
    * Удаление (по индексу), метод indexOf()
    */

    // const cardToRemove = 'Карточка-3';
    // const indexRem = cards.indexOf(cardToRemove);
    // console.log(indexRem);
    // cards.splice(indexRem, 1);

    // console.table(cards);


    /* 
    * Добавление (по индексу)
    */
    
    // const cardToInsert = 'Карточка-6';
    // const indexIns = 3;

    // cards.splice(indexIns, 0, cardToInsert);

    // console.table(cards);

    
    /* 
    * Обновление (по индексу)
    */
    
    // const cardToUpdate = 'Карточка-4';
    // const indexUp = cards.indexOf(cardToUpdate);

    // cards.splice(indexUp, 1, "Обновленная карточка - 4");

    // console.table(cards);
}









