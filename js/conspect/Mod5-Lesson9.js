    console.log('Repeta: ');


{ console.log('Repeta: Контекст (this)');
    /* 
    * - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекстю
    * - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
    */
    
    //{
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
  // }


    {
/* 
* Как метод объекта, но объявлена как внешняя функция.
* В контексте объекта.
*/

    // const showTag = function () {
    //     console.log('showTab -> this', this);
    //     console.log('showTab -> this.tag', this.tag);
    // };

    // showTag();

    // const user = {
    //     tag: 'Mango',
    // };

    // user.showUserTag = showTag;
    // console.log('user', user)

    // user.showUserTag();

    /* 
    * Вызов без контекста, но объявлена как метод объекта.
    */
  }



  {

    /* 
    * Вызов без контекста, но объявлена как метод объекта.
    */

  //   const user = {
  //   tag: 'Mango',
  //     showTag() {
  //     console.log('showTag -> this', this);
  //     console.log('showTag -> this.tag', this.tag);
  //   },
  // };
    
  //   user.showTag();

  //   const outerShowTag = user.showTag;

  //   outerShowTag();
  }

    
    {
      /* 
      * Контекст в callback-функциях
      */
      
      const user = { 
        tag: 'Mango',
        showTag() {
          console.log('showTag ')
          console.log('showTag -> this', this);
      console.log('showTag -> this.tag', this.tag);
    },
  };
          
          const invokeAction = function (action) {
            console.log(action);

            action();
          };

          invokeAction(user.showTag);
          
          
      




    }




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



{console.log('Task-Konsp: Метод "Call');

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Поли",
};

greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.
// greetGuest.call(poly, "С приездом"); // С приездом, Поли.



}

{console.log('Task-Konsp: Метод "Apply"');

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Поли",
};

// greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.



}

{console.log('Task-Konsp: Метод "bind"');

    function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = {
  service: "Steam",
    };
    
    const steamGreeter = greet.bind(steam);
    
steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

const gmail = {
  service: "Gmail",
    };
    
    const gmailGreeter = greet.bind(gmail);
    
gmailGreeter("Поли"); // "Поли, добро пожаловать в «Gmail»."

    


}


{console.log('Task-Konsp: "bind" и методы объекта ');

//     const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции



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
