let cargoHold = [ 1138,
    'space suits',
    'parrot',
    'instruction manual',
    'meal packs',
    'space tether',
    '20 meters' ];

    cargoHold.splice(3, 0, 'keys');
    
    console.log(cargoHold);

    let indexToBeRemoved = cargoHold.indexOf('instruction manual');
    if(indexToBeRemoved !== -1) {
        cargoHold.splice(indexToBeRemoved, 1);
    }
    console.log(cargoHold);

    cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
    console.log(cargoHold);