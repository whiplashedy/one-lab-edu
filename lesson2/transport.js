class Transport {
    constructor(isActive){
        this.isActive = isActive;
    }
    activate() {
        console.log("Transport activated");
        this.isActive = true;
    }
    deactivate() {
        console.log("Transport deactivated");
        this.isActive = false;
    }
    move() {
        console.log("Transport moved");
    }
    getStatus() {
        console.log(this.isActive);
    }
}
class Car extends Transport {
    constructor(active){
        super(active);
        this.seatPlaces = 4;
        this.moveSpeed = 60;
    }
}
class Bus extends Transport {
    constructor(active){
        super(active);
        this.seatPlaces = 4;
        this.moveSpeed = 50;
    }
}
class Plane extends Transport {
    constructor(active){
        super(active);
        this.seatPlaces = 100;
        this.moveSpeed = 300;
    }
}
class Toyota extends Car {
    constructor(active,model, hp) {
        super(active);
        this.model = model;
        this.hp = hp;
    }
    accelarate() {
        console.log("Transport accelarated");
    }
}
class Setra extends Bus {
    constructor(active,model, hp) {
        super(active);
        this.model = model;
        this.hp = hp;
    }
    accelarate() {
        console.log("Transport accelarated");
    }
}
class Boeing extends Plane {
    constructor(active,model, hp) {
        super(active);
        this.model = model;
        this.hp = hp;
    }
    accelarate() {
        console.log("Transport accelarated");
    }
}
const inputs = document.getElementsByClassName("transport");
const inputs1 = document.getElementsByClassName("transport1");
const inputs2 = document.getElementsByClassName("transport2");
myFunc = () => {
    let toyota = new Toyota(inputs[0].value,inputs1[0].value,inputs2[0].value);
    
    if (inputs[0].value == "true"){
        document.getElementById("temp0").innerHTML = toyota.isActive;
        toyota.activate();
        toyota.move();
    }
    else if (inputs[0].value == "false"){
        document.getElementById("temp0").innerHTML = toyota.isActive;
        toyota.deactivate();
    }
    document.getElementById("temp1").innerHTML = toyota.seatPlaces;
    document.getElementById("temp2").innerHTML = toyota.moveSpeed;
    document.getElementById("temp3").innerHTML = toyota.model;
    document.getElementById("temp4").innerHTML = toyota.hp;
    
    console.log(toyota);

}

