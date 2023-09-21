console.log('Repeta: ');

{ console.log("Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)")
    /* 
* - Литерал объекта
* - Свойства, ключи (имя) и значения
* - Как отличить объект от области видимости
*/
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// console.log(playlist);
}

{ console.log("Доступ к свойству")
    /* 
* - obj.key
* - obj[key]
* - Отсутствующие свойства
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
    
// const propertyName = 'tracks';
// console.log(playlist[propertyName]);
}

{ console.log("Короткая запись свойства")
// const username = 'Mango';
// const email = 'mango@mail.com'

// const signupData = {
//     username: username,
//     email,
// };
// console.log(signupData)
}

{ console.log("Вычисляемые свойства")

// <input name="color" value="tomato">

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
// [inputName]: inputValue,
// };
// console.log(colorPickerData);
}

{    console.log("Добавление элементов в объект после его создания")
    
//     const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

//     laylist.rating = 15;
//     playlist.phone = 10;
    
//     console.log(playlist.phone)
//     console.log(playlist.rating)
}

{console.log("Методы объекта и this при обращении к свойствам в методах")

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

{  console.log('Замена имени через функцию')

        /* 
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
    //     changeName(newName) {
    //         // console.log('this внутри changeName: ', this);
    //         this.name = newName;
    //     },
    //     addTrack(track) {
    //         this.tracks.push(track);
    //     },
    //     updateRating(newRating) {
    //         this.rating = newRating;
    //     },
    //     getTrackCount() { return this.tracks.length; },
    // };

    // // console.log(playlist.getTrackCount());

    // // playlist.changeName('Новое имя');

    // // playlist.addTrack('новый трек');
    // // console.log(playlist.getTrackCount());

    // // playlist.addTrack('новый трек');
    // // console.log(playlist.getTrackCount());


    // // playlist.updateRating(4);

    // // console.log(playlist);
}

{ console.log("Перебор через for...in и Object.keys|values|entries")

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback); // Возвращает массив ключей

// console.log(keys);

//     // for (const key of keys) {
//     //     console.log(key);
//     //     console.log(feedback[key]);

//     //     totalFeedback += feedback[key];
//     // }
//     // console.log('totalFeedback: ', totalFeedback);
    

//     const values = Object.values(feedback); // Возвращает массив значений

//     console.log(values);

    
//     for (const value of values) {
//         console.log(value);

//         totalFeedback += value
//     }

//     console.log('totalFeedback: ', totalFeedback);
}

{  console.log('Task - Работа с коллекцией(масивом объекта)');

    // const friends = [
    //     { name: 'Mango', online: false },
    //     { name: 'Kiwi', online: true },
    //     { name: 'Poly', online: true },
    //     { name: 'Ajax', online: false },
    // ];

    // console.table(friends);

    // for (const friend of friends) {
    //     console.log(friend);
    //     console.log(friend.name);
    //     console.log(friend.online);

    //     friend.newprop = 555;
    // }
    
    // console.table(friends);
    /* 
    * Ищем друга по имени
    */
    
    const findFriendByName = function (allFriends, friendName) { 
    for (const friend of allFriends) {
        // console.log(friend);
        // console.log(friend.name);

        if (friend.name === friendName) {
            return "COMPLETE!!!"
        }
        } 
        return 'Do not complete !!!'
};
    // console.log(findFriendByName(friends, 'Poly'));
    // console.log(findFriendByName(friends, 'Chelsy'));

/* 
* Получаем имена всех друзей
*/    
    const getAllNames = function (allFriends) {
        const names = [];

        for (const friend of allFriends) {
            // console.log(friend.name);

            names.push(friend.name);
        }

        return names;
    };
    // console.log(getAllNames(friends));

    /*
    * Получаем имена только друзей, которые онлайна
    */
    const getOnlineFriends = function (allFriends) {
        const onlineFriends = [];

        for (const friend of allFriends) {
            // console.log(friend);
            // console.log(friend.online);

            if (friend.online) {
                onlineFriends.push(friend);

            }
        }
        return onlineFriends;
    };
    
    // console.log(getOnlineFriends(friends));

    const getOfflineFriends = function (allFriends) { 

        const offlineFriends = [];

        for (const friend of allFriends) {
            // console.log(friend);
            // console.log(friend.online);

            if (!friend.online) {
                
                offlineFriends.push(friend);
            }
        }
        return offlineFriends;
    
    };
    // console.log(getOfflineFriends(friends));

    const getFriendsByOnlineStatus = function (allFriends) {
        const friendsByStatus = {
            online: [],
            offline: [],
        };

        for (const friend of allFriends) {
            if (friend.online) {
                friendsByStatus.online.push(friend);
                continue;
            }

            friendsByStatus.offline.push(friend);

            // friendsByStatus[friend.online ? 'online' : 'offline'].push(friend);
        }
            
        return friendsByStatus;
    };
// console.log(getFriendsByOnlineStatus(friends));
}

{ console.log('Task - Работаем с коллекцией товара в корзине')
/*  
* - getItems()
* - add(product)
* - remove(productName)
* - clear()
* - countTotalPrice()
* - increaseQuantity(productName)
* - decreaseQuantity(productName)
*
* { name: 'apple', price: 50 }
* { name: 'raspberry', price: 70 }
* { name: 'lemon', price: 60 }
* { name: 'strawberry', price: 110 }
*/
    
//     const cart = {
//         items: [],
//         getItems() {
//             return this.items;
//          },
//         add(product) {

//             // console.table(this.items);
//             for (const item of this.items) {

//                 if (item.name === product.name) {
//                     item.quantity += 1;   // console.log('такой продукт уже есть', product.name);
//                     return;
//                 }
//             }
//             const newProduct = {
//                 ...product,

//                 quantity: 1,
//             };

//             this.items.push(newProduct);
//         },
//         remove(productName) {
//             for (let i = 0; i < this.items.length; i += 1) {
//                 const { name } = this.items[i];
//
//             if (productName === this.items[i].name) {
//                 // console.log('Нашли такой продукт: ', productName);
//                 // console.log('индекс: ', i);
//                 this.items.splice(i, 1);
//                 }
//             }
//         },
//         clear() {
//             this.items = [];
//          },
//         countTotalPrice() {
//         const { items } = this;    // console.log(this.items)            
//         let total = 0;

//          for (const { price, quantity } of items)    {   // for (const item of this.items)
//              total += price * quantity;              // total += item.price;
//             }

//             return total;
//          },
//         increaseQuantity(productName) {
//             for (const item of this.items) {

//                 if (item.name === productName) {
//                     item.quantity += 1;   // console.log('такой продукт уже есть', product.name);
//                     return;
//                 }
//             }
//         },
//         decreaseQuantity(productName) {
//             for (const item of this.items) {

//                 if (item.name === productName) {
//                     item.quantity -= 1;   // console.log('такой продукт уже есть', product.name);
//                     return;
//                 }
//             }
//         },
// }
    
// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
    
// console.table(cart.getItems());
    

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// cart.remove('🍋');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());
}

   { console.log("Операция spread (распыление)")
/* Array.prototype.concat() и аналог через spread
*/
    // const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

    // const numbers = [
    //     1000,
    //     ...[1, 2, 3],
    //     5000,
    //     ...[4, 5, 6],
    //     7000,
    //     ...[7, 8, 9],
    //     9000,
    // ];
    // console.log(numbers);

    
}
{ console.log("Поиск самой маленькой или большой температуры (числа)");

    // const temps = [18, 14, 12, 21, 17, 29, 24];
    
    // console.log(Math.max(1, 4, 17, 5, 6));
    // console.log(Math.min(1, 4, 17, 5, 6));
    // console.log(Math.max(...temps));


    // const lastWeekTemps = [1, 2, 3];
    // const currentTemps = [4, 5, 6];
    // const nextWeekTemps = [7, 8, 9];

    // const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);
    // const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

    // console.log(xx);
    // console.log(allTemps);
}
   { console.log("Распыление объектов")
/* Object.prototype.assing() и spread
*/
    
    
    // const a = { x: 1, y: 2 };
    // const b = { x: 0, z: 3 };

    // const c = Object.assign({}, a, b);
    // const d = {
    //     name: "Mango",
    //     ...a,
    //     x: 10,
    //     ...b,
    //     y: 20,
    // }
    // console.log(c);
    // console.log(d);

    // const defaultSettings = {
    //     theme: 'light',
    //     showNotification: true,
    //     hideSidebar: false,
    // };

    // const userSettings = {
    //     showNotification: false,
    //     hideSidebar: true,
    // };

    // const finalSettings = {
    //     ...defaultSettings,
    //     ...userSettings,
    // };

    // console.log(finalSettings);
    
}
   { console.log("Деструктуризация объекта")
/* 
* - Значения по умолчанию
* - Имя переменной отличное от имени свойства
*/
    
    // const playlist = {
    // name: 'Мой супер плейлист',
    // rating: 5,
    // tracks: ['track-1', 'track-2', 'track-3'],
    // trackCount: 3,
    // };
    
    
    // console.log(
    //     playlist.name,
    //     playlist.rating,
    //     playlist.tracks,
    //     playlist.trackCount,
    //     );
        
    // const {name, rating, tracks, trackCount: numberOfTracks, author = 'Henry' } = playlist; // Вытяни из playlist свойства для перечисленных имён

    // console.log(name);
    // console.log(rating);
    // console.log(tracks);
    // console.log(numberOfTracks);

    // console.log(
    //     name,
    //     rating,
    //     tracks,
    //     numberOfTracks,
    //     author,
    // );
}
   { console.log("Глубокая деструктуризация")

    // const profile = {
    //     name: 'Jacques Gluke',
    //     tag: 'jgluke',
    //     location: 'Ocho Rios, Jamaica',
    //     avatar: 'https://s3,amazonaws.com/uifaces/twitter/r_oy/128.jpg',
    //     stats: {
    //         followers: 5603,
    //         views: 4827,
    //         likes: 1208,
    //     },
    // };

    // // const { name, tag, location, avatar, stats } = profile;
    
    // const { name, tag, location, avatar, stats: { followers, views, likes }, } = profile;

    // console.log(name, tag, location, avatar);
    
    // // const { followers, views, likes } = stats;
    
    // console.log(followers, views, likes)
}
   { console.log("Деструктуризация массивов")
    // const rgb = [255, 100, 80];

    // const [red, green, blue] = rgb;

    // // console.log(red, green, blue);
    
    // const authors = {
    //     kiwi: 4,
    //     poly: 7,
    //     ajax: 9,
    //     mango: 6,
    // };
    // // // Первый метод
    // // const ratings = Object.values(authors); 
    // // console.log(Math.max(...ratings));
    
    
    // // // Второй метод
    
    // const entries = Object.entries(authors);

    // console.log(entries);

    // for (const [name, rating] of entries) { // Уровень третий, entry => [name, rationg]

    //     // const [name, rating] = entry // Уровень второй
        
    //     // const name = entry[0];  // Уровень первый
    //     // const rating = entry[1]; 

    //     console.log(name, rating);
    // }
}
   { console.log("Операция rest (сбор)")

//    const profile = {
//         name: 'Jacques Gluke',
//         tag: 'jgluke',
//         location: 'Ocho Rios, Jamaica',
//         avatar: 'https://s3,amazonaws.com/uifaces/twitter/r_oy/128.jpg',
//         stats: {
//             followers: 5603,
//             views: 4827,
//             likes: 1208,
//         },
//     };


//     const { name, tag, location, ...restProps } = profile;

//     console.log(name, tag, location);

//     // const restProps = {
//     //     avatar: profile.avatar,
//     //     stats: profile.stats,
//     // };

//     console.log(restProps);
}
   { console.log("Паттерн 'Объект' настроек")
/* - деструктуризация параметра-объекта в подписи функции
* - rest при деструктуризации в подписи
*/
    
    // const showProleInfo = function (userProfile) {
    //     const { name, tag, location, avatar, stats: { followers, views, likes }, } = userProfile
    //     console.log(name, tag, location, avatar, followers, views, likes);
    // };

    // const profile = {
    //         name: 'Jacques Gluke',
    //         tag: 'jgluke',
    //         location: 'Ocho Rios, Jamaica',
    //         avatar: 'https://s3,amazonaws.com/uifaces/twitter/r_oy/128.jpg',
    //         stats: {
    //             followers: 5603,
    //             views: 4827,
    //             likes: 1208,
    //         },
    // };
    
    // showProleInfo(profile);
}

console.log('Artem Rysich: ');

{
    console.log("Об'єкти")
   
{   // const user1 = {
    //     name: "Oleg",
    //     age: 39,
    //     languages: {
    //         html: true,
    //         css: true,
    //         js: true,
    //         "React Native": false,
    //     },
    // };
    // // Object.freeze(user);

    // user1.city = 'Od';
    // console.log(user1);

    // delete user1.city;
    // console.log(user1);
    // console.log(user1['languages']["React Native"]);

    // for (const key in user1) {
    //     console.log(user1[key])
            
        //     };
    }

{    // const user2 = {
        //     name: "Oleg",
        //     age: 39,
        //     languages: {
        //         html: true,
        //         css: true,
        //         js: true,
        //         "React Native": false,
        //     },
        // };
     
        // const user21 = Object.create(user2);
        // user21.age = 33;
        // console.log(user21);
     
        // for (const key in user21) {
        //     if (user21.hasOwnProperty(key)) {
        //         console.log('Own: ', user21[key]);
        //     } else {
        //         console.log('All: ', user21[key]);
        //     };
    // };
    }
        
{   // const user3 = {
    //     score: 0,
    // };

    // if (user3.score) {
    //     console.log('yes')
    // } else {
    //     console.log('no')
    // }

    // if (user3.hasOwnProperty('score')) { // Покаже чи є ключ в об'єкті (тільки власний ключ)
    //             console.log('yes')
    // } else {
    //     console.log('no')
    // }
    
    // if ('score' in user3) { // Покаже чи є ключ в об'єкті (будь який, навіть успадкований)
    //             console.log('yes')
    // } else {
    //     console.log('no')
    // }
    }

{   //     const user4 = {
    //         name: "Oleg",
    //         age: 39,
    //         languages: {
    //             html: true,
    //             css: true,
    //             js: true,
    //             "React Native": false,
    //         },
    //         sayHello() {
    //             console.log(this)
    //         },
    //     };

    // const user5 = Object.create(user4);
    // user5.age = 100;
    // console.log(user5);
    
    // user4.sayHello();
    // user5.sayHello();
    }



    
    

    }
    

   { console.log("")

    

    

    
}
   { console.log("")
/* 
*
*/
    
    
}