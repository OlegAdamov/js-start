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

{  console.log('Task - Работа с коллекцией(масивом объекта)');

/*
*
*/

    const friends = [
        { name: 'Mango', online: false },
        { name: 'Kiwi', online: true },
        { name: 'Poly', online: true },
        { name: 'Ajax', online: false },
    ];

    // console.table(friends);

    // for (const friend of friends) {
    //     console.log(friend.name);

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

    // console.log(getOfLineFriends(friends));
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
    
    const cart = {
        items: [],
        getItems() {
            return this.items;
         },
        add(product) {
            this.items.push(product);
        },
        remove(productName) { 
            for (let i = 0; i < this.items.length; i += 1) {
              
                const { name } = this.items[i];
            if (productName === this.items[i].name) {
                console.log('Нашли такой продукт: ', productName);
                console.log('индекс: ', i);
                this.items.splice(i, 1);
                }
            }
        },
        clear() { },
        countTotalPrice() { },
        increaseQuantity(productName) {},
        decreaseQuantity(productName) {},
}
    
    console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'raspberry', price: 70 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });
    
    console.table(cart.getItems());
    
    cart.remove('lemon');
    console.table(cart.getItems());
    
    // cart.clear();
    // console.table(cart.getItems());
    
    // cart.increaseQuantity('apple');
    // console.table(cart.getItems());
    
    // cart.decreaseQuantity('lemon');
    // cart.decreaseQuantity('lemon');
    // console.table(cart.getItems());
    
    //consol.log('Total: ', cart.countTotalPrice());
}



    
    
    
/* 
*
*/

