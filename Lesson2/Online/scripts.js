function settings() {
    return { display: { color: "red" }, keyboard: { layout: "querty" } };
}

const { display: { color: displayColor }, keyboard: { layout: keyboardLayout } } = settings();

console.log(displayColor, keyboardLayout);


let form  = document.getElementById('form_submit');

if (typeof (form) && form) {
    let data = JSON.parse(sessionStorage.getItem("form_data"));

    if (typeof (data) !== undefined && data) {
        form.elements['FirstArrayFirstElement'].value   = data["FirstArrayFirstElement"];
        form.elements['FirstArraySecondElement'].value  = data["FirstArraySecondElement"];
        form.elements['SecondArrayFirstElement'].value  = data["SecondArrayFirstElement"];
        form.elements['SecondArraySecondElement'].value = data["SecondArraySecondElement"];
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let data = {
            "FirstArrayFirstElement":   form.elements['FirstArrayFirstElement'].value,
            "FirstArraySecondElement":  form.elements['FirstArraySecondElement'].value,
            "SecondArrayFirstElement":  form.elements['SecondArrayFirstElement'].value,
            "SecondArraySecondElement": form.elements['SecondArraySecondElement'].value,
        };
        sessionStorage.setItem("form_data", JSON.stringify(data));
        let inpData = document.getElementsByTagName('input');
        const [FirstArray, SecondArray] = [[inpData[0].value, inpData[1].value], [inpData[2].value, inpData[3].value]];
        console.log(FirstArray);
        console.log(SecondArray);

        let output = document.getElementById('output');
        output.innerHTML = SecondArray.reduce((elem) => elem.concat());
    });
}
