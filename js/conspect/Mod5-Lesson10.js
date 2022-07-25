    console.log('Repeta: ');

{ console.log('Repeta: Прототип Объекта');

    
    /* 
    * 
    * - https://miro.com/app/board/o9]_ku0WE0=/
    * - Object.create()
    * - [[Prototipe]] и __proto__
    * - Object.getPrototypeOf()
    * - Собственные свойства и Object.prototype.hasOwnProperty()
    * - Цепочка прототипов 
    */
    
    // const objC = {
    //     z: 5,
    // };
    // // console.log("objC: ", objC);


    // const objB = Object.create(objC);
    // objB.y = 2;

    // // console.log("objB: ", objB);

    // // console.log(objB.y);
    // // console.log(objB.z);

    // const objA = Object.create(objB);
    // objA.x = 1;

    // console.log("objA: ", objA.z);    // 'Это свойство на объекте-прототипе'

    // objA.z = 1000;

    // console.log("objA: ", objA);    // 'Это собственное свойство объекта'
    // console.log("objC: ", objC);

    // console.log(objA.hasOwnProperty('x')); // Поиск свойства в объекте (собственное - true / на объекте-прототипе - false)


    
    /*
    * Алгоритм поиска свойства в цепочке прототипов:
    * 1. Поиск начинается в собственных свойствах
    * 2. Если свойства нет в собственных, поиск переходит к цепочке прототипов
    * 3. Поиск прекращается при первом совпадении (есть такое свойство)
    * 4. Возвращается значение свойства
    */
    
    
    
}

{    console.log('Repeta: Основы ООП: класс, экземпляр (объект), интерфейс');

    /* 
    * Функции-конструкторы
    * - Именование
    * - Оператор new
    * - Свойство Function.prototype
    */
    
    const Car = function ({brand, model, price} = {})  {         // (config = {}) {
        // console.log(config);
                                                              // const { brand, model, price } = config;
    // 2. Функция вызывается в контексте созданного объекта, 
    //    то есть в this записывается ссылка на него
        // console.log(this);
        this.brand = brand
        this.model = model;
        this.price = price;

            // 3. В свойство this.__proto__ записывается ссылка на объект Car.prototype
    //    то есть Car.prototype это ПРОТОТИП будущего объекта (экземпляра) - {constructor: f}




   
    // 4. Ссылка на объект возвращается в место вызова new Car
    };

    Car.prototype.sayHi = function () {
        // console.log('Car.prototype.sayHi -> this', this);
        // console.log('Hello :) ');
    };

            Car.prototype.changePrice = function (newPrice) {
            this.price = newPrice;
        };

    // console.log(Car.prototype);

    // 1. Если функция вызывается через new, создается пустой объект
    const myCar = new Car({
        brand: 'Audi',
        model: 'Q3',
        price: 35000,
    });
    // console.log(myCar);

    myCar.sayHi();
    
    const myCar2 = new Car({
        brand: "BMW",
        model: 'X6',
        price: 50000,
    });
    
    // console.log(myCar2);

        myCar2.sayHi();

    
    const myCar3 = new Car({
        brand: "Audi",
        model: 'A6',
        price: 65000,
    });
    // console.log(myCar3);

        myCar3.sayHi();


    


}


    {console.log('Example: ');



}

    {console.log('Example: ');



}

    {console.log('Example: ');



}

    {console.log('Example: ');



}





{console.log('Autocheck: 12');

class Car {
  // Change code below this line
    #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  };

  getBrand() {
    return this.#brand;
  };
  
  changeBrand(newBrand) {
    this.#brand = newBrand;
  };

  // Change code above this line
    }
    
    // console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));


}

{console.log('Autocheck: 17');

    class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
static checkPrice(price) {
    return (Car.constructor.checkPrice > Car.#MAX_PRICE)
        ? "Error! Price exceeds the maximum"
        : "Success! Price is within acceptable limits";
}



  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 34000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"




}

{console.log('Autocheck: ');


    

}





{    console.log('Task-Konsp: ООП');
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

// console.log(getWage(baseSalary, overtime, rate));
   
    
    const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
    };
// console.log(employee.getWage());
    {
        // console.log('Метод: Object.create(obj)')
    
        const animal = {
            legs: 4,
        };
        const dog = Object.create(animal);
        dog.name = "Манго";

        // console.log(dog);
        // console.log(animal.isPrototypeOf(dog));

        // console.log(dog.hasOwnProperty("name"));
        // console.log(dog.name);
        
        // console.log(dog.hasOwnProperty("legs"));
        // console.log(dog.legs);
    }
    {
        const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
     if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks, eats
}
  }  
}

{    console.log('Task-Konsp: class - static');

  class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com"));
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
