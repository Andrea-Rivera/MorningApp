//Lesson 1 &2

const greeting = "Hello World";
console.log(greeting);

let totalSum = 2 + 5;
console.log(totalSum);

let raining = true;
console.log(typeof raining);

let greetingTwo = "Good Morning!";
console.log(greetingTwo.toUpperCase());

let message = "Today is a sunny day!";
console.log(message.toLowerCase());

function countingWords(str) {
  if (str === null || "") {
    return 0;
  }
  return str.length;
}
console.log(countingWords("Andrea"));
//console.log(str); //Error because str is a local variable.

//Lesson 3
function coffee() {
  alert("You clicked me! Ok, Let me have my coffee first.");
}

setInterval(greetingFunction, 1000);

function greetingFunction() {
  var greetingOption = document.getElementById("greeting");
  if (greetingOption.innerHTML === "Hello") {
    greetingOption.innerHTML = "Good Morning";
  } else {
    greetingOption.innerHTML = "Hello";
  }
}

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}
function removeQuote() {
  document.getElementById("phrase").innerHTML = "";
}

function myFunction() {
  document.getElementById("demo").innerHTML =
    "Believe you can, and you're halfway there.";
}

function jsFunction(value) {
  if (value === "Shopping") {
    document.getElementById("answer").innerHTML =
      "Christmas Shopping is coming!";
  } else if (value === "Rest") {
    document.getElementById("answer").innerHTML =
      "Take your time, you deserve it.";
  } else {
    document.getElementById("answer").innerHTML =
      "Have a coffee and let's do it.";
  }
}

const activity_btn = document.getElementById("activity_btn");
activity_btn.addEventListener("click", getRandomActivity);

const activity_result = document.getElementById("activity_result");

function getRandomActivity() {
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      activity_result.innerHTML = `${data.activity}`;
    });
}
