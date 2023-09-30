let inputs = "";
let input = '';
let output = 0;
let func = '';
let answer = ``;

function addInput(numb) {
    input = input.concat(String(numb));
    inputBar.innerHTML = (inputs + input);
}

function c() {
    console.log('it did stuffs')
    inputs = "";
    input = '';
    answer = ``;
    func = '';
    output = 0;
    inputBar.innerHTML = '';
}

function addition() {
    expression();
    inputs = inputs.concat(`+`);
    input = '';
    inputBar.innerHTML = (inputs);
}

function subtraction() {
    expression();
    inputs = inputs.concat(`-`);
    input = '';
    inputBar.innerHTML = (inputs);
}

function multiplication() {
    expression();
    inputs = inputs.concat(`*`);
    input = '';
    inputBar.innerHTML = (inputs);
}


function division() {
    expression();
    inputs = inputs.concat(`/`);
    input = '';
    inputBar.innerHTML = (inputs);
}

function calculate() {
    inputs = inputs.concat(input);
    input = '';
    answer = `${eval(inputs)}`;
    inputBar.innerHTML = answer;
    inputs = "";
}

function expression() {
    inputs = inputs.concat(input);
    if(inputs.length === 0) {
        inputs = inputs.concat(`${answer}`);
    }
}

const inputBar = document.getElementById('inputBar');

