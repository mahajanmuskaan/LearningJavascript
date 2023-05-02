const myPromise = new Promise((resolve, reject) => {
    const number = Math.floor((Math.random()) * 10);
    if (number <= 5) {
        resolve(number);
    }
    else {
        reject(new Error("Number is greater than 5. Number is: " + number));
    }
});

myPromise
    .then((result) => {
        console.log("Promise1 :" + result);
        return result;
    })
    .then((result) => {
        if (result == 5) {
            console.log("Its 5!!!");
            console.log(result * 10);
            return result * 10;
        }
        return result * 5;
    })
    .then((result) => {
        console.log("Final Promise1 :" + result);
        return result;
    })
    .catch((error) => {
        console.error("Promise 1: Some error is there " + error);
    });
