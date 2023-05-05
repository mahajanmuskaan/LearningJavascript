async function fetchApiData() {
    try {
        // Fetching response from Public API
        const response = await fetch("https://geek-jokes.sameerkumar.website/api?format=json", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        console.log(response.status);   // Getting Response status
        console.log(response.ok);       // Getting boolean value of response.ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);     // if boolean value of response.ok is false, it will throw the error.
        }
        console.log("Data is going to parse.")
        const json_data = await response.json(); // Parse the JSON response
        console.log("Data is parsed.")
        console.log(json_data);
        const dataElement = document.getElementById('data');
        dataElement.innerHTML = json_data["joke"]; // set the value of key- Joke
    }
    catch (error) {
        console.error("Error is there while fetching API. ", error); // Log any errors
    }
}

console.log("Button to be clicked");
const button = document.getElementById("myBtn");
button.addEventListener("click", fetchApiData);