console.log("scripts loaded");

const inputs = document.getElementsByClassName('text-inputs');
console.log(inputs);

assign = () => {
    var transport1 = new Transport("Saule's car", true, 0);
    transport1.getStatus();
    //just to check
};


// Transport classes
class Transport{
    constructor(name, isActive){
        this.name = name;
        this.isActive = isActive;
        this.position = 0;
    }
    static getStatus(){
        return isActive, position;
    }
    activate(){
        this.isActive = true;
        console.log("Transport is active", this.isActive)
    }
    deactivate(){
        this.isActive =false;
        console.log("Transport is deactive", this.isActive)
    }
    move(){
        this.position +=5;
    }
}

    class Car extends Transport{
        constructor(seatPlaces){
            super();
            this.seatPlaces = seatPlaces;
            this.moveSpeed = 80;
        }
        getmoveSpeed(){
            return this.moveSpeed;
        }
    }
    class Bus extends Transport{
        constructor(seatPlaces){
            super();
            this.seatPlaces = seatPlaces;
            this.moveSpeed = 40;
        }
        getmoveSpeed(){
            return this.moveSpeed;
        }
    }
    class Plain extends Transport{
        constructor(seatPlaces){
            super();
            this.seatPlaces = seatPlaces;
            this.moveSpeed = 120;
        }
        getmoveSpeed(){
            return this.moveSpeed;
        }
    }

    class Toyota extends Car,Bus,Plain{
        constructor(model,hp){
            this.model = model;
            this.hp = hp;
        }
        static accelerate(){
            console.log("whatever it does")
        }
    }
    class Setra extends Car, Bus, Plain{
        constructor(model,hp){
            this.model = model;
            this.hp = hp;
        }
        static accelerate(){
        }
    }
    class Boeing extends Car, Bus, Plain{
        constructor(model,hp){
            this.model = model;
            this.hp = hp;
        }
        static accelerate(){
        }
    }