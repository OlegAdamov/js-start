{console.log('Example: Поварёнок');

    
    const makeDish = function (sheffName, dish) {
        console.log(`${sheffName} готовит ${dish}`);
    };


    makeDish(`Mango`, `пирожок`);
    makeDish(`Mango`, `омлет`);
    makeDish(`Mango`, `чай`);
    
    makeDish(`Poly`, `котлеты`);
    makeDish(`Poly`, `супик`);
    makeDish(`Poly`, `кофе`);

    const makeSheff = function (name) {
        const makeDish = function (dish) {
            console.log(`${sheffName} готовит ${dish}`);
        };

        return makeDish;
    };


};
