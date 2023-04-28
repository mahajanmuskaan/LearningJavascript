//append() Method Usage

const nodeFirst = document.getElementById("para1");
console.log(nodeFirst);

const ele1 = document.createElement("span");
ele1.innerHTML = "<p>This is a new appended span element.</p>"
nodeFirst.append(ele1);

//.prepend() Method Usage

const nodeSecond = document.getElementById("para2");
console.log(nodeSecond);

const ele2 = document.createElement("h1");
ele2.innerText = "Hi, This is h1 Heading Tag."
nodeSecond.prepend(ele2);