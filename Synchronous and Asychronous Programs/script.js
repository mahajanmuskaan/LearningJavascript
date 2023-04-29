// Synchronous Programming

function syncTask() {
    console.log("Sync Task starts");
    console.log("Sync Task completes");
}

console.log("Before Synchronous Task");
syncTask();
console.log("After Synchronous Task");


// Asynchronous Programming

function asyncTask() {
    console.log("Async Task starts");
    setTimeout(() => {
        console.log("Async Task completes");
    }, 3000);
}

console.log("Before Asynchronous Task");
asyncTask();
console.log("After Asynchronous Task");