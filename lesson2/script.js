'use strict';


let names = [],
    abc = [];


function add() {
    names.push(document.querySelector('#i1').value, document.querySelector('#i2').value);
    abc.push(document.querySelector('#i3').value, document.querySelector('#i4').value);

    names = names.map((item) => item.toUpperCase());

    let shortAbc = abc.filter((item) => {
    return item.length < 5
    });
   

    const element = document.createElement('div');
    element.innerHTML = `
        <div>
            <h2> Names Uppercase:${names} </h2> <br>
            <h2>Less than five:${shortAbc}</h2> <br>
        </div>
    `;
    document.querySelector('.b').appendChild(element);
}

//homework2
//ES6 new Array methods

let letters = Array.from('abcdefghjklm');
console.log(letters);

let letters = Array.of(42);
console.log(letters);
console.log(letters.length);

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j']
console.log(letters.copyWithin(0,3,5));  

const numbers = [33, 101, 218, 5, 46];
console.log(numbers.find((item) => item > 100));

const numbers = [33, 101, 218, 5, 46];
console.log(numbers.findIndex((item) => item > 100));

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j']
const s = letters.entries();  
for (i of s) {  
  console.log(i);  
}  

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j']
const s = letters.keys();
console.log(...s);

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j']
const s = letters.values();
console.log(...s);

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j']
const s = letters.fill('a', 4, 8);
console.log(...s);



//creation of classes

class Transport {
    constructor(isActive) {
        this.isActive = isActive;
    }
    
    activate() {
        this.isActive = !this.isActive;
        return this.isActive;
    }
    deactivate() {
        this.isActive = !this.isActive;
        return this.isActive;
    }
    move() {

    }
    getStatus() {
        return this.isActive === false ? 'This transport is unavailable' : 'This transport is available'; 
    }
}

const a = new Transport(false);
a.activate();
a.getStatus();
console.log(a.getStatus());

class Car extends Transport {
    constructor(isActive, seatPlaces = 5, moveSpeed = 80) {
        super(isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
}

const kia = new Car(true);
console.log(kia);

class Bus extends Transport {
    constructor(isActive, seatPlaces = 30, moveSpeed = 60) {
        super(isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
}

const b = new Bus(true, 40);
console.log(b);

class Plane extends Transport {
    constructor(isActive, seatPlaces = 200, moveSpeed = 500) {
        super(isActive);
        this.seatPlaces = seatPlaces;
        this.moveSpeed = moveSpeed;
    }
}
const airbus = new Plane(true, undefined, 600)
console.log(airbus);

class Toyota extends Car {
    constructor(isActive, seatPlaces, moveSpeed, model, hp) {
        super(isActive, seatPlaces, moveSpeed);
        this.model = model;
        this.hp = hp;
    }
    accelerate() {
        this.moveSpeed = this.moveSpeed + 40;
        return this.moveSpeed;
    }
}

const camry = new Toyota(false, 5, 80, 'v70', 300);
camry.accelerate();
console.log(camry);

class Setra extends Bus {
    constructor(isActive, seatPlaces, moveSpeed, model, hp) {
        super(isActive, seatPlaces, moveSpeed);
        this.model = model;
        this.hp = hp;
    }
    accelerate() {
        this.moveSpeed = this.moveSpeed + 20;
        return this.moveSpeed;
    }
}

const hdh = new Setra(true, 55, 80, 's315', 300);
hdh.accelerate();
console.log(hdh);

