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
        console.log("Promise1 :"+result);
    })
    .catch((error) => {
        console.log("Promise 1: Some error is there " + error);
    });
