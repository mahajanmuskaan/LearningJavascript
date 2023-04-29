// insertAdjacentElement() Usage

const parent = document.getElementById("parent");
const newChild = document.createElement("span");
newChild.innerText = "This is new child."
newChild.style.backgroundColor = "green";

parent.insertAdjacentElement("beforeend", newChild);

const newChild1 = document.createElement("div");
newChild1.innerText = "This is new child."
newChild1.style.backgroundColor = "blue";

parent.insertAdjacentElement("afterend", newChild1);


const newChild2 = document.createElement("p");
newChild2.innerText = "This is new child."
newChild2.style.backgroundColor = "pink";

parent.insertAdjacentElement("beforebegin", newChild2);


const newChild3 = document.createElement("span");
newChild3.innerText = "This is new child."
newChild3.style.backgroundColor = "yellow";

parent.insertAdjacentElement("afterbegin", newChild3);


// insertAdjacentHTML() Usage

parent.insertAdjacentHTML("afterbegin", '<h1>This is a new Heading</h1>');

// insertAdjacentText() Usage

parent.insertAdjacentText("beforebegin", "Welcome to Page!");