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
        const myPromise2 = new Promise((resolve, reject) => {
            const number = Math.floor((Math.random()) * 10);
            if (number <= 5) {
                resolve(number);
            }
            else {
                reject(new Error("Number is greater than 5. Number is: " + number));
            }
        });
        myPromise2
            .then((result) => {
                console.log("Promise2 :"+result);
                const myPromise3 = new Promise((resolve, reject) => {
                    const number = Math.random();
                    if (number <= 0.5) {
                        resolve(number);
                    }
                    else {
                        reject(new Error("Number is greater than 0.5. Number is: " + number));
                    }
                })
                myPromise3
                    .then((result) => {
                        console.log("Promise3 :"+result);
                    })
                    .catch((error) => {
                        console.log("Promise 3: Some error is there " + error);
                    })
            })
            .catch((error) => {
                console.log("Promise2: Some error is there " + error);
            })
    })
    .catch((error) => {
        console.log("Promise 1: Some error is there " + error);
    });
