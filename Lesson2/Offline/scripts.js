console.log("scripts loaded");

const inputs = document.getElementsByClassName('js-text-inputs');
console.log(inputs);

function htmlEnc(s) {
    return s.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&#34;');
}

doRefreshBtns = (elem) => {
    let childrenBtns = elem.parentElement.getElementsByClassName('btn');
    for (let i of childrenBtns) {
        if (i.classList.contains('btn--grad--secondary')) {
            i.classList.remove('btn--grad--secondary');
        }
        if (!i.classList.contains('btn--grad')) {
            i.classList.add('btn--grad');
        }
    }
}

doRefreshDisplayBtns = (elem) => {
    let display = document.getElementsByClassName('js-description');
    if (display && display.length > 0) {
        display[0].innerHTML = "<p>input0 + input1 + input2 = Array1</p><p>input3 + input4 + input5 = Array2 </p>";
    } else {
        console.log("Error, no display");
    }
    doRefreshBtns(elem);
};

doConcat = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    if (display && display.length > 0) {
        let tmp = "ar1.concat(ar2) = <br>";
        tmp += "[".fontcolor('red');
        for (let i in ar3) {
            tmp += htmlEnc(ar3[i]);
            if (i != ar3.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", ar3);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doEvery = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.every((elem) => elem.length > 0);
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).every((elem) => elem.length > 0) = " + passed.toString().fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doFilter = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.filter((elem) => elem.length > 0);
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).filter((elem) => elem.length > 0) = <br>";
        tmp += "[".fontcolor('red');
        for (let i in passed) {
            tmp += htmlEnc(passed[i]);
            if (i != passed.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doForeach = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).forEach((elem, index) => console.log(elem, index))<br>";
        for (let i in ar3) {
            tmp += htmlEnc(ar3[i]);
            if (i != ar3.length - 1) {
                tmp += '<br>';
            }
        }
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
        ar3.forEach((elem, index) => console.log(elem));
    } else {
        console.log("Error, should be ==> ", ar3);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doIndexOf = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.indexOf("Arystan");
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).indexOf('Arystan') = " + passed.toString().fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doJoin = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.join(", ");
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).join(', ') = <br>" + passed.fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};


doLastIndexOf = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.lastIndexOf("Arystan");
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).lastIndexOf('Arystan') = " + passed.toString().fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doMap = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.map((elem) => elem + elem);
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).map((elem) => elem + elem) = <br>";
        tmp += "[".fontcolor('red');
        for (let i in passed) {
            tmp += htmlEnc(passed[i]);
            if (i != passed.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doPop = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.pop();
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).pop() = " + passed.toString().fontcolor('red');
        tmp += "<br>After pop = <br>";
        tmp += "[".fontcolor('red');
        for (let i in ar3) {
            tmp += htmlEnc(ar3[i]);
            if (i != ar3.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doPush = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.push('Arystan');
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).push('Arystan') = " + passed.toString().fontcolor('red') + "<br>";
        tmp += "<br>After push = <br>";
        tmp += "[".fontcolor('red');
        for (let i in ar3) {
            tmp += htmlEnc(ar3[i]);
            if (i != ar3.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doReduce = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.reduce((a, b) => a + b);
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).reduce((a, b) => a + b) = <br>" + passed.toString().fontcolor('red') + "<br>";
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doReduceRight = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.reduceRight((a, b) => a + b);
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).reduceRight((a, b) => a + b) = <br>" + passed.toString().fontcolor('red') + "<br>";
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doReverse = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.reverse();
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).reverse() = <br>";
        tmp += "[".fontcolor('red');
        for (let i in ar3) {
            tmp += htmlEnc(ar3[i]);
            if (i != ar3.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doShift = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.shift();
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).shift() = " + passed.toString().fontcolor('red') + "<br>";
        tmp += "<br>After shift = <br>";
        tmp += "[".fontcolor('red');
        for (let i in ar3) {
            tmp += htmlEnc(ar3[i]);
            if (i != ar3.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doSlice = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.slice(1, 4);
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).slice(1, 4) = <br>";
        tmp += "[".fontcolor('red');
        for (let i in passed) {
            tmp += htmlEnc(passed[i]);
            if (i != passed.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doSome = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.some((elem) => elem.length > 0);
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).some((elem) => elem.length > 0) = " + passed.toString().fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doSort = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.sort();
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).sort() = <br>";
        tmp += "[".fontcolor('red');
        for (let i in passed) {
            tmp += htmlEnc(passed[i]);
            if (i != passed.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doSplice = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.splice(0, 0, "Arystan", "Kalimov");
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).splice(0, 0, 'Arystan', 'Kalimov') = <br>";
        tmp += "[".fontcolor('red');
        for (let i in ar3) {
            tmp += htmlEnc(ar3[i]);
            if (i != ar3.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doToString = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.toString();
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).toString() = <br>" + passed.fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doUnshift = (elem) => {
    doRefreshBtns(elem);

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.unshift("Arystan", "Kalimov");
    if (display && display.length > 0) {
        tmp = "ar1.concat(ar2).unshift('Arystan', 'Kalimov') = " + passed.toString().fontcolor('red') + '<br>';
        tmp += "[".fontcolor('red');
        for (let i in ar3) {
            tmp += htmlEnc(ar3[i]);
            if (i != ar3.length - 1) {
                tmp += ','.fontcolor('red');
                tmp += ' ';
            }
        }
        tmp += "]".fontcolor('red');
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doFind = (elem) => {
    doRefreshBtns(elem);

    let inputFind = document.getElementById('input-find').value;

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.find((elem) => elem === inputFind);
    if (display && display.length > 0) {
        if (passed === undefined) {
            passedString = "Undefined";
        } else {
            passedString = passed.toString();
        }
        tmp = "ar1.concat(ar2).find((elem) => elem === input-find) = " + passedString.fontcolor('red') + '<br>';
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doFindIndex = (elem) => {
    doRefreshBtns(elem);

    let inputFindIndex = document.getElementById('input-findIndex').value;

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    let display = document.getElementsByClassName('js-description');
    let ar3 = ar1.concat(ar2);
    let passed = ar3.findIndex((elem) => elem === inputFindIndex);
    if (display && display.length > 0) {
        if (passed === undefined) {
            passedString = "Undefined";
        } else {
            passedString = passed.toString();
        }
        tmp = "ar1.concat(ar2).find((elem) => elem === input-findIndex) = "
            + passedString.fontcolor('red') + '<br>';
        tmp = '<p>' + tmp + '</p>';
        display[0].innerHTML = tmp;
    } else {
        console.log("Error, should be ==> ", passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
        elem.classList.remove('btn--grad');
        elem.classList.add('btn--grad--secondary');
    } else {
        doRefreshDisplayBtns(elem.parentElement);
    }
};

doEntries = (elem) => {

};


assign = () => {

    console.log("assign");

    let ar1 = [inputs[0].value, inputs[1].value, inputs[2].value];
    let ar2 = [inputs[3].value, inputs[4].value, inputs[5].value];

    console.log(ar1.filter((v) => v.length > 2));
};

class Transport {
    constructor(isActive) {
        this.isActive = isActive;
        this.position = 0;
        this.moveSpeed = 0;
    }
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
    move() {
        this.position += this.moveSpeed;
    }
    getStatus() {
        return this.isActive;
    }
}

class Car extends Transport {
    constructor(isActive) {
        super(isActive);
        this.seatPlaces = 4;
        this.moveSpeed = 150;
    }
}

class Bus extends Transport {
    constructor(isActive) {
        super(isActive);
        this.seatPlaces = 30;
        this.moveSpeed = 100;
    }
}

class Plane extends Transport {
    constructor(isActive) {
        super(isActive);
        this.seatPlaces = 80;
        this.moveSpeed = 500;
    }
}

class Toyota extends Car {
    constructor(isActive, model, hp) {
        super(isActive);
        this.model = model;
        this.hp = hp;
    }
    accelerate() {

    }
}

class Setra extends Bus {
    constructor(isActive, model, hp) {
        super(isActive);
        this.model = model;
        this.hp = hp;
    }
    accelerate() {

    }
}

class Boeing extends Plane {
    constructor(isActive, model, hp) {
        super(isActive, name);
        this.model = model;
        this.hp = hp;
    }
    accelerate() {

    }
}

// let toyota = new Toyota();
// let setra = new Setra();
// let boeing = new Boeing();
