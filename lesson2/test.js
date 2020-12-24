const inputs = document.getElementsByClassName('text-inputs');

assign = () => {
    let ar1 = [inputs[0].value, inputs[1].value];
    let ar2 = [inputs[2].value, inputs[3].value];

    console.log(ar1.filter((v) => v.length>2));
    console.log(ar2.filter((v) => v.length>3));
    console.log("Concat: " + ar1.concat(ar2));
};

const numInputs = document.getElementsByClassName('number-inputs');

myFunc = () => {
    let arr = Array.of(numInputs[0].value, numInputs[1].value, numInputs[2].value, numInputs[3].value); 
    console.log("Mapping: " + arr.map((v) => Math.pow(v,2)));
    console.log("Find: " + arr.find(v => v == 2));
    console.log("Find Index: " + arr.findIndex(v => v == 4));
    console.log("Reducing: " + arr.reduce((x,y) => x*y));
    console.log("Join: " + arr.join());
    console.log("Entries: " + arr.entries());
    console.log("Keys: " + arr.keys());
    console.log("Every: " + arr.every(v => v > 2));
    console.log("isArray: " + Array.isArray(arr));
    console.log("Fill: " + arr.fill(777,1,4));
    console.log("Includes: " + arr.includes(777));
};