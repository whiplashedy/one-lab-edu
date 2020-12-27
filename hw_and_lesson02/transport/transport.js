class Transport {

    isActive = false;

    activate() {
        if (!this.isActive) {
            console.log("Transport was activated");
            this.isActive = true;
        } else {
            console.log("Transport already is active");
        }
    }

    deactivate() {
        if (this.isActive) {
            console.log("Transport was deactivated");
            this.isActive = false;
        } else {
            console.log("Transport already is deactivated");
        }
    }

    move() {
        console.log("transport is moving");
    }

    getStatus() {
        return this.isActive;
    }
}

class Car extends Transport {

    seatPlaces;
    moveSpeed;

    constructor() {
        super();
        this.seatPlaces = 4;
        this.moveSpeed = 150;
    }
}

class Bus extends Transport {
    seatPlaces;
    moveSpeed;

    constructor() {
        super();
        this.seatPlaces = 20;
        this.moveSpeed = 100;
    }
}

class Plain extends Transport {

    seatPlaces;
    moveSpeed;

    constructor() {
        super();
        this.seatPlaces = 100;
        this.moveSpeed = 300;
    }

}

class Toyota extends Car {
    model;
    hp;
    constructor(model, hp) {
        super();
        this.model = model;
        this.hp = hp;
    }
    accelerate(){
        console.log("Accelerating...");
    }
}

class Setra extends Bus {
    model;
    hp;
    constructor(model, hp) {
        super();
        this.model = model;
        this.hp = hp;
    }
    accelerate(){
        console.log("Accelerating...");
    }
}

class Boeing extends Plain {
    model;
    hp;
    constructor(model, hp) {
        super();
        this.model = model;
        this.hp = hp;
    }
    accelerate(){
        console.log("Accelerating...");
    }
}
let b = new Setra("h11", 200);
b.accelerate();
