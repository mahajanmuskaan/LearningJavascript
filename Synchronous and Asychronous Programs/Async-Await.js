function calculateRandomNumber() {
    return new Promise((resolve, reject) => {
        console.log("Arithmetic Operations begin!!");
        setTimeout(() => {

            const result = Math.floor(Math.random() * 10);
            if (result <= 5) {
                resolve(result);
            }
            else {
                const error = new Error("Some Error is there. Number is greater than 5. Number is : " + result);
                reject(error);
            }
        }, 2000);
    })
}

function getFinalResult(result) {

    if (result < 5) {
        return parseInt(result) * 5;
    }
    return parseInt(result) * 10;
}

async function processArithmeticOperations() {
    try {
        const firstPromise = await calculateRandomNumber();

        const secondPromise = await getFinalResult(firstPromise);

        console.log("All Operations Completed successfully!!")
    }
    catch (error) {
        console.error("Error is there. Promise is rejected. " + error);
    }
}

processArithmeticOperations();