console.log("scripts loaded");

const inputs = document.getElementsByClassName('text-inputs');
console.log(inputs);

assign = () => {
    let ar1 = [inputs[0].value, inputs[1].value];
    let ar2 = [inputs[2].value, inputs[3].value];

    Document.getElementById("result").innerHTML = ssdasdasd;
   
  
};

// const people = [
//     {name:'Sanzhar',age: 21, salary: 10000},
//     {name:'Igor',age: 18, salary: 13000},
//     {name:'Elena',age: 25, salary: 9000},
//     {name:'Dilda',age: 25, salary: 6000},
//     {name:'Artem',age: 20, salary: 12000},
//     {name:'Sanzhar', age: 25, salary: 100000}
// ]

//FOr each
// people.forEach(function(person,index,pArr)
// {
//     console.log(person)
// })
// people.forEach(person=> console.log(person))
//MAP
// const newPeople = people.map (person => `${person.name} (${person.age})`);
// console.log(newPeople);


//toString
// var cars = ["Mers", "BMW", "KIA", "HYUNDAY"];
// document.getElementById("demo").innerHTML = cars.toString();

//join
// var cars = ["Mers", "BMW", "KIA", "HYUNDAY"];
// document.getElementById("demo").innerHTML = cars.join(" * ");

//pop
// var cars = ["Mers", "BMW", "KIA", "HYUNDAY"];
// document.getElementById("demo").innerHTML = cars;
// cars.pop();
// document.getElementById("demo1").innerHTML = cars;

//push
// var cars = ["MERS", "BMW", "KIA", "HYUNDAY"];
// document.getElementById("demo").innerHTML = cars;

// function myFunction() {
//   cars.push("HONDA");
//   document.getElementById("demo").innerHTML = cars;
// }

// var cars = ["MERS", "BMW", "KIA", "HYUNDAY"];
// document.getElementById("demo1").innerHTML = cars;

// function myFunction() {
//   document.getElementById("demo2").innerHTML = cars.push("HONDA");
//   document.getElementById("demo1").innerHTML = cars;
// }

// var cars= ["BMW","MERS", "KIA", "HYUNDAY"];
// document.getElementById("demo1").innerHTML = cars;
// cars.shift();
// document.getElementById("demo2").innerHTML = cars;

// var cars = ["BMW","MERS", "KIA", "HYUNDAY"];
// document.getElementById("demo").innerHTML =cars;

// function myFunction() {
//   cars.unshift("LADA");
//   document.getElementById("demo").innerHTML = cars;
// }

// var cars = ["BMW","MERS", "KIA", "HYUNDAY"];
// document.getElementById("demo1").innerHTML = cars;
// cars[0] = "HONDA";
// document.getElementById("demo2").innerHTML = cars;

// var  cars = ["BMW","MERS", "KIA", "HYUNDAY"];
// document.getElementById("demo1").innerHTML =
// "The first cars is: " +  cars[0];
// delete  cars[0];
// document.getElementById("demo2").innerHTML =
// "The first  cars is: " +  cars[0];

// var cars = ["BMW","MERS", "KIA", "HYUNDAY"];
// document.getElementById("demo1").innerHTML = "Original Array:<br>" + cars;
// function myFunction() {
//   cars.splice(2, 0, "HONDA", "LADA");
//   document.getElementById("demo2").innerHTML = "New Array:<br>" + cars;
// }

//splice
// var cars = ["BMW","MERS", "KIA", "HYUNDAY"];
// document.getElementById("demo").innerHTML = cars;
// function myFunction() {
//   cars.splice(0, 1);
//   document.getElementById("demo").innerHTML = cars;
// }

//concat
// var arr1 = ["Sanzhar", "Artem"];
// var arr2 = ["Adil", "Dias"];
// var arr3 = ["Bob", "Daniyar"];
// var myFriends= arr1.concat(arr2, arr3); 
// document.getElementById("demo").innerHTML = myFriends;


// var cars = ["BMW","MERS", "KIA", "HYUNDAY"];
// var citrus = cars.slice(2);
// document.getElementById("demo").innerHTML = cars + "<br><br>" + citrus;


