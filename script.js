const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");



function handleGreeting() {

    const name = nameInput.value.trim();

    if (name === "") {

        mainHeading.textContent = "Please enter your name.";

        messageArea.textContent =
            "Please enter your name before displaying the greeting.";

    } else {

        mainHeading.textContent =
            "Hello, " + name + "!";

        messageArea.textContent =
            "Welcome to the webpage, " + name + "!";

    }

}



function handleBackground() {

    document.body.style.backgroundColor = "lightgreen";

    messageArea.textContent =
        "The background color has been changed.";

}



function handleReset() {

    mainHeading.textContent =
        "Welcome to My Interactive Webpage";

    nameInput.value = "";

    document.body.style.backgroundColor =
        "lightblue";

    messageArea.textContent =
        "";

}


function handleInput() {

    const name = nameInput.value;

    if (name === "") {

        messageArea.textContent = "";

    } else {

        messageArea.textContent =
            "You are typing: " + name;

    }

}


function handleMouseOver() {

    console.log(
        "The mouse is over the greeting button."
    );

}

greetingButton.addEventListener(
    "click",
    handleGreeting
);

backgroundButton.addEventListener(
    "click",
    handleBackground
);

resetButton.addEventListener(
    "click",
    handleReset
);

nameInput.addEventListener(
    "input",
    handleInput
);

greetingButton.addEventListener(
    "mouseover",
    handleMouseOver
);