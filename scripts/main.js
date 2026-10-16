const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/crochet.jpg") {
    myImage.setAttribute("src", "images/crochet-snowflake-2.jpg");
  } else {
    myImage.setAttribute("src", "images/crochet.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Crochet is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Crochet is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
