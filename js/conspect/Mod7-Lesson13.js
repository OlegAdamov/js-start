    console.log('Repeta: ');

{ console.log('Repeta: Делегирование событий');

    /* 
    * - общий слушатель
    * - фильтр цели клика
    */
    
    const container = document.querySelector('.js-container');

    container.addEventListener('click', onClick);

    function onClick(event) {
        if (event.target.nodeName !== 'BUTTON') {
            return;
        }
            console.log(event.target);
            console.log(event.target.textContent);
            console.log(event.target.nodeName);
        
    }

    /* 
    * Код добавления кнопок
    */
    const addBtn = document.querySelector('.js-add-btn');
    let labelCounter = 6;

    addBtn.addEventListener('click', onAddBtnClick);

    function onAddBtnClick() {
        const btn = document.createElement('button');
        btn.textContent = `Кнопка ${labelCounter}`;
        btn.type = 'button';

        container.appendChild(btn);
        labelCounter += 1;
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





{    console.log('Task-Konsp: event.target');

    const parent = document.querySelector("#parent")

    parent.addEventListener("click", (event) => {
        console.log("event.target: ", event.target);
        console.log("event.currentTarget: ", event.currentTarget);
    })

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
