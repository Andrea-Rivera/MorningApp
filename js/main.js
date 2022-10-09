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

function coffee() {
  alert("You clicked me! Ok, Let me have my coffee first.");
}

function header() {
  let head = document.querySelector("h1");
  head.style.textTransform = "uppercase";
  head.style.color = "#FF4D00";
}

function removeQuote() {
  document.getElementById("phrase").innerHTML = "";
}

//lesson 3
function countingWords(str) {
  if (str === null || "") {
    return 0;
  }
  return str.length;
}

function myFunction() {
  document.getElementById("demo").innerHTML =
    "Believe you can, and you're halfway there.";
}

console.log(countingWords("Andrea"));
//console.log(str); //Error because str is a local variable.

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
