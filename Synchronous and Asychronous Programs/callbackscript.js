// function f1(f2) {

//     console.log("Before Calling");
//     f2();
//     console.log("After Calling") ;
// }

// function f2() {

//     console.log("Calling f2");
//     setTimeout(() => {
//         console.log("Hi")
//     }, 3000);

// }

// f1(f2);

// function f1() {
//     console.log("Before Calling");
//     f2();
//     console.log("After Calling") ;
// }

// function f2() {
//     console.log("Calling f2");
// }

// f1();

// function performCalculation(num1, num2, callback) {
//     let result = 0;
//     return result = callback(num1, num2);  // callback function is called
// }

// // Defining multiple function having different opeartions
// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }
// function remainder(num1, num2) {
//     return num1 % num2;
// }

// // Passing functions in other function
// let result1 = performCalculation(20, 28, add);
// console.log(result1);
// let result2 = performCalculation(20, 28, subtract);
// console.log(result2);
// let result3 = performCalculation(20, 28, multiply);
// console.log(result3);
// let result4 = performCalculation(20, 28, divide);
// console.log(result4);
// let result5 = performCalculation(20, 28, remainder);
// console.log(result5);


function getData(callback) {
    // perform an asynchronous operation
    setTimeout(function () {
        let data = prompt("Enter data: ");
        if (data !== '') {
            // Invoke the callback with the result
            callback(null, data);
        } else {
            // Invoke the callback with an error
            const error = new Error('Some Error is there:');
            callback(error, null);
        }
    }, 2000);
}

// callback function that handles errors
function handleData(error, data) {
    if (error) {
        console.error('Error:', error.message);
        return;
    }
    console.log('Data:', data);
}

// invoke the fetchData function and pass the handleData callback function
getData(handleData);
