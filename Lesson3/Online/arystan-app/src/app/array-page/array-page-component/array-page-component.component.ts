@Component({
  selector: 'app-array-page-component',
  templateUrl: './array-page-component.component.html',
  styleUrls: ['./array-page-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArrayPageComponentComponent implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  inputs: any;

  ngOnInit(): void {
    this.inputs = this.element.nativeElement.querySelectorAll('.js-text-inputs');
  }

  htmlEnc = (s: any) => {
    if (!s) {
      return '';
    }
    return s.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&#34;');
  };

  doRefreshBtns = (elem: any) => {
    const childrenBtns = elem.parentElement.getElementsByClassName('js-button');
    for (const i of childrenBtns) {
      if (i.classList.contains('btn--grad--secondary')) {
        i.classList.remove('btn--grad--secondary');
      }
      if (!i.classList.contains('btn--grad')) {
        i.classList.add('btn--grad');
      }
    }
  };

  doRefreshDisplayBtns = (elem: any) => {
    const display = document.getElementsByClassName('js-description');
    if (display && display.length > 0) {
      display[0].innerHTML = '<p>input0 + input1 + input2 = Array1</p><p>input3 + input4 + input5 = Array2 </p>';
    } else {
      console.log('Error, no display');
    }
    this.doRefreshBtns(elem);
  };

  doConcat = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2) = <br>';
      tmp += '['.fontcolor('red');
      ar3.forEach((value, i) => {
        tmp += this.htmlEnc(ar3[i]);
        if (i !== ar3.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', ar3);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doEvery = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.every((el) => {
      return el.length > 0;
    });
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).every((elem) => elem.length > 0) = ' + passed.toString().fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doFilter = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.filter((el) => el.length > 0);
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).filter((elem) => elem.length > 0) = <br>';
      tmp += '['.fontcolor('red');
      passed.forEach((value, i) => {
        tmp += this.htmlEnc(passed[i]);
        if (i !== passed.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  }

  doForeach = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).forEach((elem, index) => console.log(elem, index))<br>';
      ar3.forEach((value, i) => {
        tmp += this.htmlEnc(ar3[i]);
        if (i !== ar3.length - 1) {
          tmp += '<br>';
        }
      });
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
      ar3.forEach((el, index) => console.log(el));
    } else {
      console.log('Error, should be ==> ', ar3);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  }

  doIndexOf = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.indexOf('Arystan');
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).indexOf(\'Arystan\') = ' + passed.toString().fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  }

  doJoin = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = this.htmlEnc(ar3.join(', '));
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).join(\', \') = <br>' + passed.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };


  doLastIndexOf = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.lastIndexOf('Arystan');
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).lastIndexOf(\'Arystan\') = ' + passed.toString().fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doMap = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.map((el) => el + el);
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).map((elem) => elem + elem) = <br>';
      tmp += '['.fontcolor('red');
      passed.forEach((value, i) => {
        tmp += this.htmlEnc(passed[i]);
        if (i !== passed.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  }

  doPop = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    let popped = ar3.pop();
    if (!popped) {
      popped = '';
    }
    const passed = this.htmlEnc(popped);
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).pop() = ' + passed.toString().fontcolor('red');
      tmp += '<br>After pop = <br>';
      tmp += '['.fontcolor('red');
      ar3.forEach((value, i) => {
        tmp += this.htmlEnc(ar3[i]);
        if (i !== ar3.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doPush = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.push('Arystan');
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).push(\'Arystan\') = ' + passed.toString().fontcolor('red') + '<br>';
      tmp += '<br>After push = <br>';
      tmp += '['.fontcolor('red');
      ar3.forEach((value, i) => {
        tmp += this.htmlEnc(ar3[i]);
        if (i !== ar3.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doReduce = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = this.htmlEnc(ar3.reduce((a, b) => a + b));
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).reduce((a, b) => a + b) = <br>' + passed.toString().fontcolor('red') + '<br>';
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doReduceRight = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = this.htmlEnc(ar3.reduceRight((a, b) => a + b));
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).reduceRight((a, b) => a + b) = <br>' + passed.toString().fontcolor('red') + '<br>';
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doReverse = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.reverse();
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).reverse() = <br>';
      tmp += '['.fontcolor('red');
      ar3.forEach((value, i) => {
        tmp += this.htmlEnc(ar3[i]);
        if (i !== ar3.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doShift = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    let shifted = ar3.shift();
    if (!shifted) {
      shifted = '';
    }
    const passed = this.htmlEnc(shifted);
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).shift() = ' + passed.toString().fontcolor('red') + '<br>';
      tmp += '<br>After shift = <br>';
      tmp += '['.fontcolor('red');
      ar3.forEach((value, i) => {
        tmp += this.htmlEnc(ar3[i]);
        if (i !== ar3.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doSlice = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.slice(1, 4);
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).slice(1, 4) = <br>';
      tmp += '['.fontcolor('red');
      passed.forEach((value, i) => {
        tmp += this.htmlEnc(passed[i]);
        if (i !== passed.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doSome = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.some((el) => el.length > 0);
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).some((elem) => elem.length > 0) = ' + passed.toString().fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doSort = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.sort();
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).sort() = <br>';
      tmp += '['.fontcolor('red');
      passed.forEach((value, i) => {
        tmp += this.htmlEnc(passed[i]);
        if (i !== passed.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doSplice = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.splice(0, 0, 'Arystan', 'Kalimov');
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).splice(0, 0, \'Arystan\', \'Kalimov\') = <br>';
      tmp += '['.fontcolor('red');
      ar3.forEach((value, i) => {
        tmp += this.htmlEnc(ar3[i]);
        if (i !== ar3.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doToString = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = this.htmlEnc(ar3.toString());
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).toString() = <br>' + passed.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doUnshift = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.unshift('Arystan', 'Kalimov');
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).unshift(\'Arystan\', \'Kalimov\') = ' + passed.toString().fontcolor('red') + '<br>';
      tmp += '['.fontcolor('red');
      ar3.forEach((value, i) => {
        tmp += this.htmlEnc(ar3[i]);
        if (i !== ar3.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doToSource = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = 'toSource() is deprecated. This feature is obsolete. ' +
      'Although it may still work in some browsers, its use is discouraged since it could be removed at any time. ' +
      'Try to avoid using it.';
    if (display && display.length > 0) {
      let tmp = passed.toString().fontcolor('red') + '<br>';
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };



  doFind = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const inputFind = document.getElementById('input-find') as HTMLInputElement;
    const inputFindValue = (inputFind ? inputFind.value : null);

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.find((el) => el === inputFindValue);
    let passedString = '';
    if (display && display.length > 0) {
      if (passed === undefined) {
        passedString = 'Undefined';
      } else {
        passedString = this.htmlEnc(passed.toString());
      }
      let tmp = 'ar1.concat(ar2).find((elem) => elem === input-find) = ' + passedString.fontcolor('red') + '<br>';
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doFindIndex = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const inputFindIndex = document.getElementById('input-findIndex') as HTMLInputElement;
    const inputFindIndexValue =  (inputFindIndex ? inputFindIndex.value : null);

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.findIndex((el) => el === inputFindIndexValue);
    let passedString = '';
    if (display && display.length > 0) {
      if (passed === undefined) {
        passedString = 'Undefined';
      } else {
        passedString = passed.toString();
      }
      let tmp = 'ar1.concat(ar2).findIndex((elem) => elem === input-findIndex) = '
        + passedString.fontcolor('red') + '<br>';
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doEntries = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.entries();
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).entries() = <br>';
      let i = passed.next();
      tmp += this.htmlEnc(i.value.toString());
      i = passed.next();
      for (; !i.done; i = passed.next()) {
        tmp += ', '.fontcolor('red');
        tmp += this.htmlEnc(i.value.toString());
      }
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };


  doFrom = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = Array.from(ar3);
    if (display && display.length > 0) {
      let tmp = 'Array.from(ar1.concat(ar2)) = <br>';
      tmp += '['.fontcolor('red');
      passed.forEach((value, i) =>  {
        tmp += this.htmlEnc(passed[i]);
        if (i !== passed.length - 1) {
          tmp += ','.fontcolor('red');
          tmp += ' ';
        }
      });
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };

  doKeys = (elem: any) => {
    this.doRefreshBtns(elem);

    const inputs = this.inputs;

    const ar1 = [(inputs[0] as HTMLInputElement).value, (inputs[1] as HTMLInputElement).value, (inputs[2] as HTMLInputElement).value];
    const ar2 = [(inputs[3] as HTMLInputElement).value, (inputs[4] as HTMLInputElement).value, (inputs[5] as HTMLInputElement).value];

    const display = document.getElementsByClassName('js-description');
    const ar3 = ar1.concat(ar2);
    const passed = ar3.keys();
    if (display && display.length > 0) {
      let tmp = 'ar1.concat(ar2).keys() = <br>';
      tmp += '['.fontcolor('red');
      let i = passed.next();
      tmp += this.htmlEnc(i.value.toString());
      i = passed.next();
      for (; !i.done; i = passed.next()) {
        tmp += ','.fontcolor('red');
        tmp += ' ';
        tmp += this.htmlEnc(i.value.toString());
      }
      tmp += ']'.fontcolor('red');
      tmp = '<p>' + tmp + '</p>';
      display[0].innerHTML = tmp;
    } else {
      console.log('Error, should be ==> ', passed);
    }
    if (elem.classList.contains('btn--grad') && !elem.classList.contains('btn--grad--secondary')) {
      elem.classList.remove('btn--grad');
      elem.classList.add('btn--grad--secondary');
    } else {
      this.doRefreshDisplayBtns(elem.parentElement);
    }
  };
}

import {Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
