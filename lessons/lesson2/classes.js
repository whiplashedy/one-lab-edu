class Transport {
    constructor(status){
        this.isActive=status;
    }
    activate(){
        this.isActive=true;
        console.log("activate");
    }
    deactivate(){
        this.isActive=false;
        console.log("deactivate");
    }
    move(){
        console.log("move");
    }
    getStatus(){
        console.log(this.isActive);
    }
}
class car extends Transport{
    constructor(active){
    super(active);
    this.seatPlace=4;
    this.moveSpeed=60;
    }
}
class bus extends Transport{
    constructor(active){
    super(active);
    this.seatPlace=20;
    this.moveSpeed=40;
    }
}
class plain extends Transport{
    constructor(active){
    super(active);
    this.seatPlace=300;
    this.moveSpeed=500;
    }
}
class Toyota extends car {
    constructor(active,model,hp){
        super(active);
        this.model=model;
        this.hp=hp;
    }
    accelerate(){
        console.log("accelerate");
    }
}
class Setra extends bus {
    constructor(active,model,hp){
        super(active);
        this.model=model;
        this.hp=hp;
    }
    accelerate(){
        console.log("accelerate");
    }
}
class Boeing extends plain {
    constructor(active,model,hp){
        super(active);
        this.model=model;
        this.hp=hp;
    }
    accelerate(){
        console.log("accelerate");
    }
}
const inputs = document.getElementsByClassName('transport');
console.log(inputs);
myfunc = () => {
console.log(inputs[0].value);
var x=new Transport(inputs[0].value);
var y=new car(inputs[0].value);
var z=new Toyota(inputs[0].value,"camri",3);
document.getElementById("root").innerHTML=x.isActive;
x.deactivate()
document.getElementById("root1").innerHTML=x.isActive;

document.getElementById("root2").innerHTML=y.seatPlace;
document.getElementById("root3").innerHTML=z.moveSpeed;
console.log(z.isActive);
}

