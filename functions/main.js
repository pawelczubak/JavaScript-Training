function hello() {
    console.log("Hello");
}

// hello();


function sum(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
// sum(1, 3);

// ----------   data return   ----------- 


// function sum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }
// let result = sum(5, 3);
// console.log(result);


//-----------  arrow function   -------------

// let sum = (firstNumber, secondNumber) => console.log(firstNumber + secondNumber);
// sum(2, 4);


// or


// let sum = (firstNumber, secondNumber) => {
//     console.log("Function");
//     console.log(firstNumber + secondNumber);
// }
// sum(2, 4);


// or 

// let hello = () => console.log("Hello");
// hello();

// --------------------------------------

const greeting = yourName => {
    const result = `Hello ${yourName}`;
    console.log(result);
}

const name = prompt('What is your name?');
greeting(name);