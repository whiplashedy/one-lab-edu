console.log("scripts loaded");

const inputs = document.getElementsByClassName('text-inputs');
console.log(inputs);

assign = () => {
    let ar1 = [inputs[0].value, inputs[1].value];
    let ar2 = [inputs[2].value, inputs[3].value];

    for (i of arr1) {  
        console.log(i);  
      } 
    for (i of arr2) {  
        console.log(i);  
    } 
    
    console.log(ar1.filter((v) => v.length>2));
};
