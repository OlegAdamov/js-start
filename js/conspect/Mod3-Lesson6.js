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

// const showProfileInfo =  

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
    







    


























