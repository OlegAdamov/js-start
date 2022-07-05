console.log('Repeta: ');

{/* Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
* - Литерал объекта
* - Свойства, ключи (имя) и значения
* - Как отличить объект от области видимости
*
*
*/


// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// console.log(playlist);
}

{/* Доступ к свойству
* - obj.key
* - obj[key]
* - Отсутствующие свойства
*
*/
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// playlist.phone = 10;
// playlist.rating = 15;

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// console.log(playlist['rating']);
}

{/* Короткая запись свойства
*/
// const username = 'Mango';
// const email = 'mango@mail.com'

// const signupData = {
//     username: username,
//     email,
// };
// console.log(signupData)
}

{/* Вычисляемые свойства
*/

// <input name="color" value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
// [inputName]: inputValue,
// };

// console.log(colorPickerData);
}

{/* Методы объекта и this при обращении к свойствам в методах
*
* http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
*
* - changeName
* - addTrack
* - updateRating
* - getTrackCount
*
*/

    // const playlist = {
    //     name: 'Мой супер плейлист',
    //     rating: 5,
    //     tracks: ['track-1', 'track-2', 'track-3'],
    //     trackCount: 3,
    //     getName() {
    //         console.log('Ага, это getName :)');
    //     }
    // };

    // console.log(playlist);
    // playlist.getName(5);
}

{    console.log('Task - 1');
    /* Замена имени через функцию
    * 
    *
    *
    * - 
    * - 
    * - 
    *
    */

    const playlist = {
        name: 'Мой супер плейлист',
        rating: 5,
        tracks: ['track-1', 'track-2', 'track-3'],
        changeName(newName) {
            // console.log('this внутри changeName: ', this);
            this.name = newName;
        },
        addTrack(track) {
            this.tracks.push(track);
        },
        updateRating(newRating) {
            this.rating = newRating;
        },
        getTrackCount() { return this.tracks.length; },
    };

    // console.log(playlist.getTrackCount());

    // playlist.changeName('Новое имя');

    // playlist.addTrack('новый трек');
    // console.log(playlist.getTrackCount());

    // playlist.addTrack('новый трек');
    // console.log(playlist.getTrackCount());


    // playlist.updateRating(4);

    // console.log(playlist);
}


 
{/* object.entries(obj)
*
*
* - 
* - 
* - 
*
*/
}

{/* Перебор через for...in и Object.keys|values|entries
*
* - 
*/

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

//     let totalFeedback = 0;
    
//     const keys = Object.keys(feedback); // Возвращает массив ключей

//     console.log(keys);

//     for (const key of keys) {
//         console.log(key);
//         console.log(feedback[key]);

//         totalFeedback += feedback[key];
//     }
//     console.log('totalFeedback: ', totalFeedback);
    

//     const values = Object.values(feedback); // Возвращает массив значений

//     console.log(values);

    
//     for (const value of values) {
//         console.log(value);

//         totalFeedback += value
//     }

//     console.log('totalFeedback: ', totalFeedback);
}

/* 
* 
*
*
* - 
* - 
* - 
*
*/




