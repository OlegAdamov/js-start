    console.log('Repeta: ');


{ console.log('Repeta: Контекст (this)');
    /* 
    * - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекстю
    * - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
    */
    
    /*
    * Как метод объекта. В контексте объектаю
    */

    // const user = {
    //     tag: 'Mango',
    //     showTag() {
    //         console.log('showTag -> this', this);
    //     },
    // };

    // user.showTag(); // - момент вызова функции. Слева от имени функции
    
    /* Вызов без контекста
    * - В строгом режиме = undefined
    * - Не в строгом режиме = window
    */

    // const foo = function () {
    //     console.log('foo -> this', this);
    // };


    // foo();

/* 
* Как метод объекта, но объявлена как внешняя функция.
* В контексте объекта.
*/

    const showTag = function () {
        console.log('showTab -> this', this);
        console.log('showTab -> this.tag', this.tag);
    };

    // showTag();

    const user = {
        tag: 'Mango',
    };

    user.showUserTag = showTag;
    console.log('user', user)

    user.showUserTag();

    /* 
    * Вызов без контекста, но объявлена как метод объекта.
    */






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



{console.log('Task-Konsp: ');





}

{console.log('Task-Konsp: ');




}

{console.log('Task-Konsp: ');




}



{console.log(': ');

    
    
    
    
    
}
