// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
lowerCase = lowerCase.split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
upperCase = upperCase.split("");

let symbols = "!@#$%^&*";
symbols = symbols.split("");
let digits = "1234567890";
digits = digits.split("");

let lowerCase2 = true;
let upperCase2 = true;
let symbols2 = true;
let digits2 = true;
let emptyA = [];
let passwordLength = prompt("How long do you want the password?");
if (isNaN(passwordLength)){
  alert("password must be a number");
  return; 
}
if (passwordLength < 8){

 alert("password must be a number between 8 to 128");
  return;
}
if (passwordLength > 128){

 alert("password must be a number between 8 to 128");
  return;
}
lowerCase2 = confirm("Do you want lowercase letters?");
upperCase2 = confirm("Do you want uppercase letters?");
symbols2 = confirm("Do you want symbols?");
digits2 = confirm("Do you want digits?");

if (lowerCase2 === true){
emptyA = emptyA.concat

}

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
