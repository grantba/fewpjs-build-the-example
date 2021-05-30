// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDisplay = document.querySelector("#modal");

window.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has loaded.");
});

errorDisplay.className = "hidden";

function toggleErrorDisplay() {
  if (errorDisplay.className === "hidden") {
    errorDisplay.className = "";
  }
  else {
    errorDisplay.className = "hidden";
  }
};

function errorMessage(error) {
  if (errorDisplay.textContent === "\n      Error!\n      \n    ") {
    errorDisplay.innerText += error;
  }
};

document.addEventListener('click', function(event) {
  if (event.target.innerText === EMPTY_HEART) {
    const result = mimicServerCall();

    mimicServerCall()
    .then(function(serverMessage) {
      event.target.innerText = FULL_HEART;
      event.target.style.color = "red";
      alert("You notified the server!")
      alert("Pretend remote server notified of action!")
    })
    .catch(error => {
      errorMessage(error);
      toggleErrorDisplay();
      setTimeout(toggleErrorDisplay, 5000);
    })
  }
  else if (event.target.innerText === FULL_HEART) {
    mimicServerCall()
    .then(function(serverMessage) {
      event.target.innerText = EMPTY_HEART;
      event.target.style.color = "black";
      alert("You notified the server!")
      alert("Pretend remote server notified of action!")
    })
    .catch(error => {
      errorMessage(error);
      toggleErrorDisplay();
      setTimeout(toggleErrorDisplay, 5000);
    })
  }
  else {
    return;
  }
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
