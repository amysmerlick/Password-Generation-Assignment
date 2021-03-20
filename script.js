 // Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", "`"];
var combinedarray = [];
var password = "";


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

function generatePassword(){
  var wantsLowercase = confirm ('Do you want lowercase?');
  console.log(wantsLowercase);
  if (wantsLowercase){
    combinedarray = combinedarray.concat(lowercase);
    console.log(combinedarray);
  } 

  var wantsUppercase = confirm ('Do you want uppercase?');
  console.log (wantsUppercase);
  if (wantsUppercase){
    combinedarray = combinedarray.concat(uppercase);
  } 

  var wantsNumbers = confirm ('Do you want numbers?');
  console.log (wantsNumbers);
  if (wantsNumbers){
    combinedarray = combinedarray.concat(numbers);
 }

  var wantsSpecial = confirm ('Do you want special characters?');
  console.log (wantsSpecial);
  if (wantsSpecial){
    combinedarray = combinedarray.concat(special);
    console.log(combinedarray);
  }
  
  var passwordLength = window.prompt("Please choose a password length.");
    console.log (passwordLength);
    if (passwordLength < 8 || passwordLength > 128){
    window.alert ("It must contain a minimum of 8 and maximum of 128 characters.");  
  }

  var finishpassword= "";

  for(let i = 0; i < parseInt(passwordLength); i++) {
    var randomchar = combinedarray[Math.floor(Math.random()*combinedarray.length)]
    finishpassword += randomchar    
  }
  return finishpassword;
}


 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
