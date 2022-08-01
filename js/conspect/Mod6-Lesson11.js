    console.log('Repeta: ');

{ console.log('Repeta: DOM');
//     { console.log('query-selectors')
//         const magicBtn = document.querySelector('.js-magic-btn');

//         /*
//         * document.querySelector(selector) и documentSelectorAll(selector)
//         *   selector - любой валидный селектор
//         *
//         * Что возвращает?
//         */
        
//         const navEl = document.querySelector('ul');   // первый найденный     // navRef
//         // console.dir(navEl);
        
//         const navLinksEl = navEl.querySelectorAll('.site-nav__link');   // ищет только в navEl
//         // console.log('navLinksEl: ', navLinksEl);    // всю коллекцию передаёт в псевдо-массив

//          /*
//         * Document.querySelector* и Element.querySelectorAll*
//         *
//         * Что возвращает?
//         */
        
// }
    
    {console.log('Properties')
        
        
        const magicBtn = document.querySelector('.js-magic-btn');
        
        console.log('Свойства элемента (hero)')
        /* 
        * 
        * - Изображение
        * - Тексе и textContent
        * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
        */

        // magicBtn.addEventListener('click', () => {
            const imageEl = document.querySelector('.hero__image');
            // console.log('imageEl: ', imageEl);
            // console.log(imageEl.src);
            imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'
            imageEl.alt = 'Это новый котик'
       

            const heroTitleEl = document.querySelector('.hero__title');
            // console.log('heroTitleEl: ', heroTitleEl);
            // console.log(heroTitleEl.textContent);
            heroTitleEl.textContent = 'Я сладкий пирожочек!';
        // });
    
        console.log('Атрибуты')
            
        
            /* 
            * 
            * - get(имя-атрибута) - вернуть значение атрибут
            * - set(имя-атрибута) - 
            * - remove(имя-атрибута) - удалить атрибут
            * - has(имя-атрибута) - проверить, есть ли атрибут? (true/false)
            */

            // console.log(imageEl.getAttribute('src'));  // для всех атрибутов
            // console.log(imageEl.src);       // для свойств объекта 
        
        
        
            /* 
            * Data-атрибуты
            */

        const actions = document.querySelectorAll('.js-actions button');
        // console.log(actions);

        // console.log(actions[1].dataset.action);


    }
    
    {console.log('Интерфейс classList')
    
  const magicBtn = document.querySelector('.js-magic-btn');
    /* 
    * - add(класс) - добавить класс
    * - remove(класс) - удалить класс
    * - toggle(класс) - переключение (если класса нет - он добавится, если класс есть - он удалится)
    * - replace(старыйКласс, новыйКласс) - заменить старый на новый
    * - contains(класс)  - проверить существование класса на элементе (true/false)
    */
        
        
        // // magicBtn.addEventListener('click', () => {
        // const navEl = document.querySelector('.site-nav');
        // console.log(navEl.classList);
        // navEl.classList.add('super-cool', 'force');
        // navEl.classList.remove('super-cool');
        // navEl.classList.replace('force', 'super-force')
        //     console.log(navEl.classList.contains('super-force'));
        // // }        );
        
        // magicBtn.addEventListener('click', () => {
        //     navEl.classList.toggle('fine');
        // });

        // const currentPageUrl = '/portfolio';

        // const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
        // console.log(linkEl);
        // linkEl.classList.add('site-nav__link--current');




      
    }
    
    
}

{ console.log('Repeta: Навигация по DOM');

/* 
* Свойства "навигации" по DOM-узлам (взять список)
* https://fecore.net.ua/books/m5ph3r-javascript/module-o7/dom-traversal.html
*/

const navEl = document.querySelector('.site-nav')

// const firstNavItemEl = navEl.querySelector('.site-nav__item')
    const firstNavItemEl = navEl.firstElementChild;
    console.log(firstNavItemEl);
console.log(navEl.children)


}

{ console.log('Repeta: ');

}





    {console.log('Example: ');



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





{    console.log('Task-Konsp: DOM');

    
// {    console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
//     console.log(listItems);}

//     {
//         const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
//     }
    
//     {
//         //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';
//     }
    

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}

{    console.log('Task-Konsp:');

}


{console.log(': ');

    
    
    
    
    
}
