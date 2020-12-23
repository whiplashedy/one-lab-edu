//ES6 New Functions
console.log("scripts loaded kekw");

const inputs = document.getElementsByClassName("input_taker");

let arr1, arr2, arr3;

let assign = () => {
    arr1 = [inputs[0].value, inputs[1].value];
    arr2 = [inputs[2].value, inputs[3].value];
    arr3 = [...arr1, ...arr2];
    alert("arr1: [" + arr1 + "] arr2: [" + arr2 + "] arr3: [" + arr3 + "]");
}

let concat = () => {
    document.getElementById("demo").innerHTML = "concat: " + [...arr1, ...arr2];
}

let every = () => {
    document.getElementById("demo").innerHTML = "every (string.length > 2): " + arr3.every((e) => e.length > 2);
}

let fill = () => {
    document.getElementById("demo").innerHTML = "fill with bananas: " + arr3.fill("banana");
    arr3 = [...arr1, ...arr2];
}

let filter = () => {
    document.getElementById("demo").innerHTML = "filtered elements (length > 2): " + arr3.filter((e) => e.length > 2);
}
let find = () => {
    document.getElementById("demo").innerHTML = "find first element (starting with 'a'): " + arr3.find((e) => e[0] === 'a');
}
let findIndex = () => {
    document.getElementById("demo").innerHTML = "findIndex first Index (starting with 'a'): " + arr3.findIndex((e) => e[0] === 'a');
}
let forEach = () => {
    document.getElementById("demo").innerHTML = "";
    arr3.forEach((item, index) => (document.getElementById("demo").innerHTML += index + ":" + item + "<br>"));
}
let from = () => {
    let myArr = Array.from("ABCDEFG");
    document.getElementById("demo").innerHTML = "created Array with string 'abcdefg' using 'from': " + "[" + myArr + "]";
}
let includes = () => {
    document.getElementById("demo").innerHTML = "includes 'asd'? " + arr3.includes('asd');
}
let indexOf = () => {
    document.getElementById("demo").innerHTML = "includes 'asd' at which start index? " + arr3.indexOf('asd');
}
let lastIndexOf = () => {
    document.getElementById("demo").innerHTML = "includes 'asd' at which last index? " + arr3.lastIndexOf('asd');
}
let isArray = () => {
    document.getElementById("demo").innerHTML = "is Array ? " + Array.isArray(arr3);
}
let join = () => {
    document.getElementById("demo").innerHTML = "joined in one string: " + arr3.join();
}
let keys = () => {
    document.getElementById("demo").innerHTML = "";
    let key_object = arr3.keys();
    for (let k of key_object) {
        document.getElementById("demo").innerHTML += k + "<br>";
    }
}

let map = () => {
    document.getElementById("demo").innerHTML = "Mapping to Uppercase: " + arr3.map((e) => e.toUpperCase());
}

let slice = () => {
    document.getElementById("demo").innerHTML = "sliced (given start argument, and ends at, but does not include (0,2)): " + arr3.slice(0, 2);
    arr3 = [...arr1, ...arr2];
}

let splice = () => {
    arr3.splice(2, 0, "banana", "apple");
    document.getElementById("demo").innerHTML = "spliced bananas and apples into 2nd index of array and deleted 0 elements((2,0,\"banana\",\"apple\") : " + arr3;
}