//append() Method Usage

const nodeFirst = document.getElementById("para1");
console.log(nodeFirst);

const ele1 = document.createElement("span");
ele1.innerHTML = "<p><b>This is a new appended span element.</p>"
ele1.style.color = "blue";
nodeFirst.append(ele1);

//.prepend() Method Usage

const nodeSecond = document.getElementById("para2");
console.log(nodeSecond);

const ele2 = document.createElement("h1");
ele2.innerText = "Hi, This is h1 Heading Tag."
ele2.style.color = "blue";
nodeSecond.prepend(ele2);

//.before() and after() Method Usage

const nodeThird = document.getElementsByClassName("header2")[0];
console.log(nodeThird);

const ele3 = document.createElement("h2");
ele3.innerText = "Hi, This is h2 Heading Tag."
ele3.style.color = "blue";

const ele4 = document.createElement("h3");
ele4.innerText = "Hi, This is h3 Heading Tag."
ele4.style.color = "blue";

nodeThird.before(ele3);

nodeThird.after(ele4);

// .replaceWith() Method Usage

const nodeFifth = document.getElementById("para2");
console.log(nodeFifth);

const ele5 = document.createElement("div");
ele5.innerHTML = "This is a newly created div element.";
ele5.style.color = "red";

nodeFifth.replaceWith(ele5);
