// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "0123456789";
var specialCharacter = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var uppercaseQ;
var numberQ;
var specialQ;

//Function for password length
function determineLength() {
  passwordLength = prompt(
    "Choose the number of characters for your password (Note: Must be between 8-128 characters): "
  );

  if (passwordLength < 8) {
    alert("Password length must be between 8-128 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Password length must be between 8-128 characters");
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be between 8-128 characters");
    determineLength();
  } else {
    alert(
      "The follwoing questions will decide what type of characters you want included in your password.\nIf 'No' is selected for all, your password will only contain lowercase letters."
    );
  }
  return passwordLength;
}

//Function for uppercase characters in the password
function determineUppercase() {
  uppercaseQ = prompt(
    "Do you want to include uppercase letters in your password? \n(Yes or No)"
  );
  uppercaseQ = uppercaseQ.toLowerCase();

  if (uppercaseQ === null || uppercaseQ === "") {
    alert("Please answer: Yes or No");
    determineUppercase();
  } else if (uppercaseQ === "yes" || uppercaseQ === "y") {
    uppercaseQ = true;
    return uppercaseQ;
  } else if (uppercaseQ === "no" || uppercaseQ === "n") {
    uppercaseQ = false;
    return uppercaseQ;
  } else {
    alert("Please answer: Yes or No");
    determineUppercase();
  }
  return uppercaseQ;
}

//Function used for numbers in the password
function determineNumbers() {
  numberQ = prompt(
    "Do you want to include numbers in your password? \n(Yes or No)"
  );
  numberQ = numberQ.toLowerCase();

  if (numberQ === null || numberQ === "") {
    alert("Please answer: Yes or No");
    determineNumbers();
  } else if (numberQ === "yes" || numberQ === "y") {
    numberQ = true;
    return numberQ;
  } else if (numberQ === "no" || numberQ === "n") {
    numberQ = false;
    return numberQ;
  } else {
    alert("Please answer: Yes or No");
    determineNumbers();
  }
  return numberQ;
}

//Function used for special characters in the password
function determineSpecial() {
  specialQ = prompt(
    "Do you want to include special characters in your password? \n(Yes or No)"
  );
  specialQ = specialQ.toLowerCase();

  if (specialQ === null || specialQ === "") {
    alert("Please answer: Yes or No");
    determineSpecial();
  } else if (specialQ === "yes" || specialQ === "y") {
    specialQ = true;
    return specialQ;
  } else if (specialQ === "no" || specialQ === "n") {
    specialQ = false;
    return specialQ;
  } else {
    alert("Please answer: Yes or No");
    determineSpecial();
  }
  return specialQ;
}

//Function used to generate a password using a random number generator and the charAt method
function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseQ);
  determineNumbers();
  console.log(numberQ);
  determineSpecial();
  console.log(specialQ);

  var characters = lowercaseCharacter;
  var password = "";
  if (uppercaseQ && numberQ && specialQ) {
    characters += uppercaseCharacter + numberCharacter + specialCharacter;
  } else if (uppercaseQ && numberQ) {
    characters += uppercaseCharacter + numberCharacter;
  } else if (numberQ && specialQ) {
    characters += numberCharacter + specialCharacter;
  } else if (uppercaseQ && specialQ) {
    characters += uppercaseCharacter + specialCharacter;
  } else if (uppercaseQ) {
    characters += uppercaseQ;
  } else if (numberQ) {
    characters += numberCharacter;
  } else if (specialQ) {
    characters += specialCharacter;
  } else {
    characters === lowercaseCharacter;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
