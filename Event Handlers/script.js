const myButton = document.getElementById("myBtn");
myButton.addEventListener("click", handleClick);
function handleClick() {
    const parent = document.getElementById("container");
    const newNode = document.createElement("a");
    newNode.setAttribute("href", "https://www.w3schools.com/js/js_htmldom_eventlistener.asp");
    newNode.innerText = "Click on the W3 School link for getting info on Event Listerners.";

    parent.insertAdjacentElement("beforeend", newNode);

    setTimeout(() => { alert("Button is clicked"); }, 2000);

    setTimeout(() => {
        myButton.removeEventListener("click", handleClick);
        parent.removeChild(newNode);
    }, 3000);
}
