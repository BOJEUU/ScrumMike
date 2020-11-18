let enterFirstNumber = "";
let enterSecondNumber = "";
let enterOperator = "";

let compteurPoint = 0;
// let regexPoint = RegExp(/^[0-9]+[.]?[0-9]+$/);

let isRight = false;


let inititialisationFirstNumber = document.getElementById('firstNumber');
let inititialisationSecondNumber = document.getElementById('secondNumber');
let inititialisationOperator = document.getElementById('operator');
let inititialisationResult = document.getElementById("finalResult");



let buttonZeroNumber = document.getElementById('buttonZeroNumber');

buttonZeroNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 0;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 0;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }

})


let buttonOneNumber = document.getElementById('buttonOneNumber');

buttonOneNumber.addEventListener('click', function () {

    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 1;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 1;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})

let buttonTwoNumber = document.getElementById('buttonTwoNumber');

buttonTwoNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 2;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 2;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})


let buttonThreeNumber = document.getElementById('buttonThreeNumber');

buttonThreeNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 3;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 3;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})

let buttonFourNumber = document.getElementById('buttonFourNumber');

buttonFourNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 4;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 4;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})

let buttonFiveNumber = document.getElementById('buttonFiveNumber');

buttonFiveNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 5;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 5;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})

let buttonSixNumber = document.getElementById('buttonSixNumber');

buttonSixNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 6;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 6;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})

let buttonSevenNumber = document.getElementById('buttonSevenNumber');

buttonSevenNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 7;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 7;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})


let buttonEightNumber = document.getElementById('buttonEightNumber');

buttonEightNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 8;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 8;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})

let buttonNineNumber = document.getElementById('buttonNineNumber');

buttonNineNumber.addEventListener('click', function () {
    if (isRight == false) {

        enterFirstNumber = enterFirstNumber + 9;
        inititialisationFirstNumber.innerHTML = enterFirstNumber;

    } else {
        enterSecondNumber = enterSecondNumber + 9;
        inititialisationSecondNumber.innerHTML = enterSecondNumber;
    }
})

let buttonPoint = document.getElementById('buttonPoint');

buttonPoint.addEventListener('click', function () {
    if (isRight == false) {

        if (compteurPoint == 0) {
            enterFirstNumber = enterFirstNumber + ".";
            inititialisationFirstNumber.innerHTML = enterFirstNumber;
            compteurPoint++;
        } else {
            alert('erreur !');
        }

    } else {
        if (compteurPoint == 0) {
            enterSecondNumber = enterSecondNumber + ".";
            inititialisationSecondNumber.innerHTML = enterSecondNumber;
            compteurPoint++;
        } else {
            alert('done MuthaFucka !');
        }
    }
})

reinitialiserCalculette = document.getElementById('reinitialiserCalculette');

reinitialiserCalculette.addEventListener('click', function () {
    enterFirstNumber = "";
    enterSecondNumber = "";
    inititialisationFirstNumber.innerHTML = 'Tapez votre calcul';
    inititialisationSecondNumber.innerHTML = enterSecondNumber;
    inititialisationResult.innerHTML = "";
    inititialisationOperator.innerHTML = "";
    compteurPoint = 0;
    isRight = false;
})


plusOperator = document.getElementById("plusOperator");
plusOperator.addEventListener('click', function () {
    enterOperator = "+";
    inititialisationOperator.innerHTML = enterOperator;
    isRight = true;
    compteurPoint = 0;

})

multiplyOperator = document.getElementById("multiplyOperator");
multiplyOperator.addEventListener('click', function () {
    enterOperator = "*";
    inititialisationOperator.innerHTML = enterOperator;
    isRight = true;
    compteurPoint = 0;

})

substractOperator = document.getElementById("substractOperator");
substractOperator.addEventListener('click', function () {
    enterOperator = "-";
    inititialisationOperator.innerHTML = enterOperator;
    isRight = true;
    compteurPoint = 0;

})

divideOperator = document.getElementById("divideOperator");
divideOperator.addEventListener('click', function () {
    enterOperator = "/";
    inititialisationOperator.innerHTML = enterOperator;
    isRight = true;
    compteurPoint = 0;

})

equalResult = document.getElementById('equalResult');

equalResult.onclick = function () {

    let result = 0;

    if (enterOperator == "+") {
        result = (parseFloat(enterFirstNumber) + parseFloat(enterSecondNumber))
        inititialisationResult.innerHTML = result;


    } else if (enterOperator == "*") {
        result = (parseFloat(enterFirstNumber) * parseFloat(enterSecondNumber))
        inititialisationResult.innerHTML = result;

    } else if (enterOperator == "-") {
        result = (parseFloat(enterFirstNumber) - parseFloat(enterSecondNumber))
        inititialisationResult.innerHTML = result;

    } else if (enterOperator == "/") {

        result = (parseFloat(enterFirstNumber) / parseFloat(enterSecondNumber))
        inititialisationResult.innerHTML = result;
    }

}