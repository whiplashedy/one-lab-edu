function settings(){
    return {
        display: {color: 'red'},
        keyboard: {layout: 'querty'}
    }
}

const {display :{color: displayColor}, keyboard:{layout: keyboardLayout}} = settings();
console.log(displayColor, keyboardLayout);
