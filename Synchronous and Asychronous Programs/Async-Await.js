// First Promise function where a Random Number will be generated.
function calculateRandomNumber() {
    return new Promise((resolve, reject) => {
        console.log("Arithmetic Operations begin!!");
        setTimeout(() => {

            const result = Math.floor(Math.random() * 10);
            if (result <= 5) {
                resolve(result);        // If generated random Number is less than equal to 5 then promise will resolve.
            }
            else {
                const error = new Error("Error in Promise1. Number is greater than 5. Number is : " + result);
                reject(error);          // If generated random Number is greater than 5 then promise will reject.
            }
        }, 2000);
    })
}

// Second Promise function to do some final calculations based on calculateRandomNumber() function result.
function getFinalResult(result) {

    const finalResult = new Promise((resolve, reject) => {
        let r1;
        if (result == 5) {      // If result is equal to 5 then further operation will be done on it and  promise will resolve.
            r1 = parseInt(result) * 5;
            resolve(r1);
        }
        else if(result < 5) {       // If result is less than 5 then further operation will be done on it and  promise will resolve.
            r1 = parseInt(result) * 10;
            resolve(r1);
        }
        else {          // If some error is there with result, then promise will be rejected.
            const error = new Error("Error in Promise2. " + result);
            reject(error);
        }
    })
    return finalResult;
}

async function processArithmeticOperations() {
    try {
        // First Promise
        const firstPromise = await calculateRandomNumber();

        // Second Promise code will be executed once the first promise is fullfilled.
        const secondPromise = await getFinalResult(firstPromise);

        console.log("All Operations Completed successfully!! Final Result is: " + secondPromise);
    }
    catch (error) {
        console.error("Error is there. Promise is rejected. " + error);
    }
}

processArithmeticOperations();
