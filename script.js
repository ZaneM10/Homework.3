// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,]
var uppercase = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',];
var lowwercase = [, 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',];
var specialChars = ['!', '?', '<', '>', '@', '$', '#', '%'];


// var passwordLenght = prompt ('How long do you want your passeord ?');
// var shouldIncludeLowercase = confirm ( ' Do you want lowwer case ?');
// var shouldIncludeUpperercase = confirm ( ' Do you want upper case ?');
// var shouldIncludeSpecialChars = confirm ( ' Do you want special characters ?');
// var shouldIncludeNumbers = confirm ( ' Do you want numbers ?');

// var char = [];


function generatePassword() {
  var char = [];
  var passwordLenght = prompt ('How long do you want your password ?');




  var shouldIncludeLowercase = confirm(' Do you want lowwer case ?');
  if (shouldIncludeLowercase === true) {
    for (var i = 0; i < lowwercase.length; i++) {
      char.push(lowwercase[i]);
    }
  }
  var shouldIncludeUpperercase = confirm(' Do you want upper case ?');
  if (shouldIncludeUpperercase === true) {
    for (var i = 0; i < uppercase.length; i++) {
      char.push(uppercase[i]);
    }
  }
  var shouldIncludeSpecialChars = confirm(' Do you want special characters ?');
  if (shouldIncludeSpecialChars === true) {
    for (var i = 0; i < specialChars.length; i++) {
      char.push(specialChars[i]);
    }
  }
  var shouldIncludeNumbers = confirm(' Do you want numbers ?');
  if (shouldIncludeNumbers === true) {
    for (var i = 0; i < numbers.length; i++) {
      char.push(numbers[i]);
    }
    
  }
  var password = '';
  for (i =0 ; i < passwordLenght; i++) {
    var randomIndex= Math.floor(Math.random()* char.length);
    var randomChar= char[randomIndex];
    password = password +randomChar;
  }



  return password;
}
function writePassword() {
  var passwordText = document.querySelector('#password');
  var password = generatePassword();

  passwordText.value = password
}
generateBtn.addEventListener('click', writePassword)


// var password = document.getElementById('password');

// document.getElementById('password').value = password;














// Write password to the #password input
// for(i = 0; i < 10; i ++)
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
