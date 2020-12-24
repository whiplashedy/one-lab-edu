console.log("scripts loaded");

const inputs = document.getElementsByClassName('text-inputs');
console.log(inputs);
var ar1 = [inputs[0].value, inputs[1].value];
var ar2 = [inputs[2].value, inputs[3].value];
var bigArray = [inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value];

assign = () => {
    console.log(ar1.filter((v) => v.length>2));
};

show = () =>{
    document.getElementById("result").innerHTML = bigArray.join(" , ");
}

doAll = () =>{
    result1 = arr1.concat(arr2)
    document.getElementById("resultAll").innerHTML = result1, result2;
}