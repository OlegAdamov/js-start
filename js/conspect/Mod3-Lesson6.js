console.log('Repeta: ');

{ console.log('Операция spread (распыление)')
/* 
* - Array.prototype.concat() м аналог через spread
* - [].concat() - то же самое
*/


    // const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
    
    const numbers = [ ...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

    // console.log(numbers);

    /* 
    * Поиск самой маленькой или большой температуры (числа)
    */
    const temps = [18, 14, 12, 21, 17, 29, 24]
    
    // console.log(Math.max(1, 3, 5, 12, 54, 6));
    // console.log(Math.min(...temps))




    /* 
    * Сшиваем несколько массивов в один через concat() и spread
    */

    const lastWeekTemps = [1, 2, 3];
    const currentWeekTemps = [4, 5, 6];
    const nextWeekTemps = [7, 8, 9];

    const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
    // console.log(allTemps);

    /*
    * Распыление объектов
   * - Object.prototype.assign() и spread
    */
const a = { x: 1, y: 2 };
    const b = {x: 0, z: 3 };

// const c = Object.assign({x: 5}, a, b)

    const c = {
        ...a,
        x: 19,
        ...b,
        y: 26,
}
    // console.log(c);


    
}

{ console.log('Деструктуризация объекта')
/* 
* - Значения по умолчанию
* - Имя переменной отличное от имени свойства
*/

    // const playlist = {
    //     name: 'Мой супер плейлист',
    //     rating: 5,
    //     tracks: ['track-1', 'track-2', 'track-3'],
    //     trackCount: 3,
    //     location: 'Colorado',
    // };

    // const { name, rating, tracks, trackCount: numberOfTracks, author = 'John', location = 'Paramount'} = playlist;

    // console.log(name);
    // console.log(rating);
    // console.log(tracks);
    // console.log(numberOfTracks);
    // console.log(location);
    

    // console.log(name, rating, tracks, numberOfTracks, author, location);

    // console.log(
    //     playlist.name,
    //     playlist.rating,
    //     playlist.tracks,
    //     playlist.trackCount,
    // );






    /* 
    * Глубокая деструктуризация
    */
    
    // const profile = {
    //     name: "Jacques Gluke",
    //     tag: 'jgluke',
    //     location: 'Ocho Rios, Jamaica',
    //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twittr.r_oy/128.jpg',
    //     stats: {
    //         followers: 5603,
    //         views: 4827,
    //         likes: 1308,
    //     },
    // };

    // const { name, tag, location, avatar, stats: {followers, views, likes}, } = profile;


    // console.log(
    //     name, tag, location, avatar, followers, views, likes,
    // )

    /* 
    * Деструктуризация массивов
    */
    
    // const rgb = [255, 100, 80];

    // const [a, , c] = rgb;
    // console.log(a, c);

    // {
    //     const authors = {
    //         kiwi: 4,
    //         poly: 7,
    //         ajax: 9,
    //         mango: 6,

    //     };
    
    
        // {
        //     const ratings = Object.values(authors);
        //     console.log(ratings);
        //     console.log(Math.max(...ratings));
        // }

        // {
        //     const keys = Object.keys(authors);
        //     for (const key of keys) {
        //         console.log(key);
        //         console.log(authors[key]);
        //         }
        // }
    
        //    {
        // const entries = Object.entries(authors);
        //     // console.log(entries);

        //     for (const entry of entries) {
        //         // console.log(entry)
        
        //         const name = entry[0];
        //         const rating = entry[1];
        
        //         console.log(name, rating);
        //     }
        //}
    
    
        // {
        //     const entries = Object.entries(authors);

        //     for (const entry of entries) {
        //         const [name, rating] = entry;

        //         console.log(name, rating);
        //     }
        // }


        // {
        //     const entries = Object.entries(authors);

        //     for (const [name, rating] of entries) {
        //         // const [name, rating] = entry;

        //         console.log(name, rating);
        //     }
        // }

    // } 
}

{ console.log('Операция rest (сбор)')
    /* 
    * 
    */
    
    // const profile = {
    //     name: "Jacques Gluke",
    //     tag: 'jgluke',
    //     location: 'Ocho Rios, Jamaica',
    //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twittr.r_oy/128.jpg',
    //     stats: {
    //         followers: 5603,
    //         views: 4827,
    //         likes: 1308,
    //     },
    // };

// {    const { name, tag, location } = profile;

//     const restProps = {
//         avatar: profile.avatar,
//         stats: profile.stats,
//     }
//     console.log(restProps)}

    // {
    //     const { name, tag, location, ...restProps } = profile;

    //     console.log(name, tag, location);
    //     console.log(restProps);
    //     console.log(profile);
    // }
}

{ console.log('Объект параметров')
    // const { name, tag, location, ...resProps } = profile;
    

    // console.log(name, tag, location);
    // console.log(rest);
    // console.log(profile);
    
    /* 
    * Паттерн "объект настроек"
    * - деструктуризация параметра-объекта в подписи функции
    * - rest при деструктуризации в подписи
    */

//         {    const showProfileInfo = function (userProfile) {
//         console.log(userProfile)


//         const {
//             name,
//             tag,
//             location,
//             avatar,
//             stats: { followers, views, likes },
//     } = userProfile;
//     console.log(name, location, tag, avatar, followers, views, likes);
// };
//      const profile = {
//         name: "Jacques Gluke",
//         tag: 'jgluke',
//         location: 'Ocho Rios, Jamaica',
//         avatar: 'https://s3.amazonaws.com/uifaces/faces/twittr.r_oy/128.jpg',
//         stats: {
//             followers: 5603,
//             views: 4827,
//             likes: 1308,
//         },
//     };
//         showProfileInfo(profile);
//     }
    
//     {
//         const showProfileInfo = function ({ name,
//             tag,
//             location,
//             avatar,
//             stats: { followers, views, likes }, }) {
        
//     console.log(name, location, tag, avatar, followers, views, likes);
// };
//      const profile = {
//         name: "Jacques Gluke",
//         tag: 'jgluke',
//         location: 'Ocho Rios, Jamaica',
//         avatar: 'https://s3.amazonaws.com/uifaces/faces/twittr.r_oy/128.jpg',
//         stats: {
//             followers: 5603,
//             views: 4827,
//             likes: 1308,
//         },
//     };
//     showProfileInfo(profile);
//     }
}

{ console.log('Операция Object - примеры')

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
//     }
}

{console.log('Операция Массив Объектов - примеры')

//     const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
    // ];
    // for (const book of books) {
        // Объект книги
        // console.log(book);
        // Название
        // console.log(book.title);
        // Автор
        // console.log(book.author);
        // Рейтинг
        // console.log(book.rating);
    // }
    
    // Например, получим список названий всех книг в коллекции books.
//     const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

    
    // Узнаем средний рейтинг всей нашей коллекции.
//     let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2
    
}

{    console.log(`Task AutoCheck-28`);
/* В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся 
* результаты тестирования отдельных групп. Используя распыление дополни код так,
* чтобы:
* - В переменной allScores хранился массив всех результатов от первой до третьей группы.
* - В переменной bestScore был самый высокий общий балл.
* - В переменной worstScore был самый низкий общий балл. 
*/

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores);
const bestScore = Math.max(...allScores);
    // console.log(bestScore);
    const worstScore = Math.min(...allScores);
    // console.log(worstScore);



}

{    console.log(`Task AutoCheck-30`);
/* Напиши функцию makeTask(data) которая принимает один параметр data -
* объект со следующими свойствами.
* - text - текст задачи.
* - category - категория задачи.
* - priority - приоритет задачи
* Функция должна составить и вернуть новый объект задачи, не изменяя
* напрямую параметр data. В новом объекте должно быть свойство completed,
* значение которого хранится в одноимённой локальной переменной.
* В параметре data гарантированно будет только свойство text, а остальные два, 
* category и priority, могут отсутствовать. Тогда, в новом объекте задачи, 
* в свойствах category и priority должны быть значения по умолчанию,
* хранящиеся в одноимённых локальных переменных. 
*/

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
return {
  completed,
  category,
  priority,
  ...data,

}
  // Change code above this line
    }
    // console.log(makeTask({}));
    // console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
    // console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
    // console.log(makeTask({ text: "Buy bread" }));



}

{    console.log(`Task AutoCheck-32`);
/* Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело 
* функции addOverNum() так, чтобы она считала сумму только тех аргументов,
* которые больше чем заданное число. Это число должно быть первым
* параметром функции.
*/
    
// Change code below this line
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber)
    {total += arg;}
    
  }

  return total;
  // Change code above this line
}

    // console.log(addOverNum(50, 15, 27));
    // console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
    // console.log(addOverNum(15, 32, 6, 13, 19, 8));
    // console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));



}

{    console.log(`Task AutoCheck-41`);
/* Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не 
* с массивом строк, а с массивом объектов.
*
*
*
* - getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
* - addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в
* свойстве potions, но только если такого зелья еще нет в инвентаре. В
* противном случае возвращается строка.
* - removePotion(potionName) - удаляет объект зелья с именем potionName из
* массива в свойстве potions.
* - updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с
* названием oldName на newName в массиве potions.
* - 
*/

    
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
       
    this.potions.push(newPotion);
  },


  removePotion(potionName) {

  for (let i = 0; i < this.potions.length; i += 1){
  if (potionName === this.potions[i].name) {
    this.potions.splice(i, 1);
   return `Potion ${potionName} is not in inventory!`;
  }
  }
  },
  
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName;
    return `Potion ${oldName} is not in inventory!`;
      }
    }
  },
  // Change code above this line
};



//     console.table(atTheOldToad.getPotions()); // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
//     console.table(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
//     console.table(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.table(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))
// console.table(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
// console.table(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))
// console.table(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
// console.table(atTheOldToad.removePotion("Dragon breath"))
// console.table(atTheOldToad.removePotion("Speed potion"))
// console.table(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
// console.table(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
}


console.log('Artem Rysich: ');

{    console.log(`Example 1 - Деструктуризація`);
/* Перепиши функцію так, щоб вона прймала один об'єкт параметрів замість набору незалежних аргументів.
*
*/
  
  // JS Doc //** + Tab
/**
 * Розраховуємо індекс маси тіла людини
 * @param {Object} obj 
 * @returns {Number} BMI
 */
//   function calcBMI({weight, height}) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

//   // Було
//   console.log(calcBMI({weight : '88,3', height : '1.75'}));
//   console.log(calcBMI({weight : '68,3', height : '1.65'}));
//   console.log(calcBMI({weight : '118,3', height : '1.95'}));
}




{    console.log(`Example 2 - Деструктуризація`);
/* 
* Перепиши функцію так, щоб вона приймала один об'єкт параметрів
* замість набору незалежних аргументів.
*/
  
/**
 * 
 * @param {Object} obj 
 */
  
  //     function printContactsInfo({names, phones}) {
  //       const namesMassive = names.split(',');
  //       const phonesMassive = phones.split(',');
        
  //       for (let i = 0, n = 1; i < namesMassive.length, i < phonesMassive.length; i+=1, n+=1) {
  //               console.log(`${n}. ${namesMassive[i]} ${phonesMassive[i]}`);
  //           }
  //           // console.log(namesMassive);
  //           // console.log(phonesMassive);
  //       }
            
  // printContactsInfo({
  //   names: 'Jacob,William,Solomon,Artem',
  //   phones: '89001234567,89001112233,890055566377,890055566300'});
}
{    console.log(`Example 3 - Глибока деструктуризація`);
/* Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
*/
  

  // function getBotReport({companyName, repairBots, defenceBots}) {
  //   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
  // };

  // // Було
  // console.log(getBotReport({
  //   companyName: 'Cyberdyne Systems',
  //   repairBots: 150,
  //   defenceBots: 50,
  // }));

}
{    console.log(`Example 4 - Деструктуризація`);
/* Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями
* companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії
*/

  // function getStockReport({companyName, stock}) {
  //   let total = 0;
  //   for (const value of Object.values(stock)) {
  //     total += value;
  //   }
  //   return `${companyName} has ${total} items in stock`;
  // }
  
  // console.log(
  //   getStockReport({
  //     companyName: 'Cyberdyne Systems', 
  //     stock: {
  //     repairBots: 150,
  //     defenceBots: 50,
  //   },}
  //   ),
  // );

  // console.log(
  //   getStockReport({
  //     companyName: 'Belacci',
  //     stock: {
  //       shoes: 20,
  //       skirts: 10,
  //       hats: 5,
  //     },
  //   },),
  // );

}
{    console.log(`Example 5 - Операція Spread`);
/* Доповни функцію createContact(partialContact) так,
* щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt,
* а також List зі значенням "default", якщо в partialContact немає такої властивості.
*/
  // function createContact(partialContact) {
  //   return {
  //     list: "default",
  //     id: createdId(),
  //     createdAt: new Date(),
  //     ...partialContact,
  //   }
  // }

  // console.log(
  //   createContact({
  //     name: 'Mango',
  //     email: 'mango@mail.com',
  //     list: 'friends',
  //   }),
  // );

  // console.log(
  //   createContact({
  //     name: 'Poly',
  //     email: 'poly@hotmail.com',
  //   }),
  // );

  // function createdId() {
  //   return '_' + Math.random().toString(36).substr(2, 9);
  // }
}

{    console.log(`Example 6 - Операція rest`);
/* Напиши функцію transformUserName(user) так, щоб вона повертала
* новий об'єкт із властивістю fullName, замість firstName та lastName.
*/
  // function transformUserName({firstName, lastName, ...props}) {
  //   return {
  //     fullName: `${firstName} ${lastName}`,
  //     ...props,
  //   }
  //   }
  
  //   console.log(
  //     transformUserName({
  //     id: 1,
  //     firstName: 'Jacob',
  //     lastName: 'Mercer',
  //     email: 'j.mercer@mail.com',
  //     friendCount: 40,  
  //   }),
  // );

  //   console.log(
  //     transformUserName({
  //     id: 2,
  //     firstName: 'Adrian',
  //     lastName: 'Cross',
  //     email: 'a.cross@hotmail.com',
  //     friendCount: 30,
  //   }),
  // );
}
{    console.log(`Example - `);
/* 
*
*/


}





    


























