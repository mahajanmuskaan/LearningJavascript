// querySelector() Method Usage:

const ele = document.querySelector("h1");
ele.innerText = "Hi, Muskaan Mahajan!!"
console.log(ele);

// querySelectorAll() Method Usage:

const elem = document.querySelectorAll("div");  // 2 Nodes of div elements
console.log(elem);

//getElementByID Method Usage:

const newEle = document.getElementById("heading1").style.backgroundColor = "blue";

//getElementsByClassName Method Usage

const newElem = document.getElementsByClassName("firstDiv")[1];
console.log(newElem);
newElem.id = "newID";

//getElementsByTagName Method Usage

const newElems = document.getElementsByTagName("div");
console.log(newElems);

// createElement() and appendChild() Methods Usage

// const newCreatedEle = document.createElement("div");
// console.log(newCreatedEle);
// newCreatedEle.id = "newcreatedID";
// newCreatedEle.innerHTML = "This is a new created Div Element";
// newElem.appendChild(newCreatedEle);

//replaceChild() Method

const parentEle = document.querySelector(".secondDiv");
console.log(parentEle);
const oldChildEle = document.querySelectorAll("span")[1];
console.log(oldChildEle);
const newCreatedEle = document.createElement("span");
newCreatedEle.id = "newcreatedID";
newCreatedEle.innerHTML = "This is a new created Div Element";
console.log(newCreatedEle);
parentEle.replaceChild(newCreatedEle,oldChildEle);


// Usage of matches, closest and contains methods:

const parentElement = document.querySelector(".firstDiv");
console.log(parentElement);

const ele1 = document.getElementById("newfirstSpan");
console.log(ele1);

console.log(ele1.closest(".newans"));

console.log(parentElement.matches("#firstDiv"));

console.log(parentElement.matches(".firstDiv"));

console.log(parentEle.contains(newCreatedEle));
