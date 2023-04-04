// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [
  "!",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Write password to the #password input

function getLength() {
  var input = prompt("How long do you want your password to be?");

  if (input < 8) {
    alert("too short");
  } else if (input > 128) {
    alert("too long");
  } else {
    return input;
  }
}

function getSpecs() {
  var useUpperCase = confirm("Include uppercase letters?");
  var useLowerCase = confirm("Include lowercase letters?");
  var useNumber = confirm("Include numbers?");
  var useSpecialChar = confirm("Include special characters?");

  return {
    upper: useUpperCase,
    lower: useLowerCase,
    number: useNumber,
    special: useSpecialChar,
  };
}

function getRandomFrom(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getPossibleChars(specs) {
  var possibleChars = [];
  if (specs.upper) {
    possibleChars = [...possibleChars, ...upperCase];
  }
  if (specs.lower) {
    possibleChars = [...possibleChars, ...lowerCase];
  }
  if (specs.number) {
    possibleChars = [...possibleChars, ...numbers];
  }
  if (specs.special) {
    possibleChars = [...possibleChars, ...specialChar];
  }

  return possibleChars;
}

function generatePassword() {
  var length = getLength();
  var specs = getSpecs();

  var possibleChars = getPossibleChars(specs);

  var password = "";
  for (let index = 0; index < length; index++) {
    password += getRandomFrom(possibleChars);
  }

  return password;
}

function runScript() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", runScript);
