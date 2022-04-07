// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLibrary = {
  lowerCase: "abcdefghijklmnopqrstuvWxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  specialChar: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  typeNameStr: ["Lowercase", "Uppercase", "Number", "Special Character"],
};
// Store in the array for convenience in the for loop later. (line39)
var typeName = [pwdLibrary.lowerCase, pwdLibrary.upperCase, pwdLibrary.number, pwdLibrary.specialChar];


// This function will ask user to choose the type and length of password,
// Then it will generate the password properly.
function generatePassword() {
  // Check whether length is proper. Check user chooses at least one type of password.
  var pwdLengthPass = true;
  var conditionNumber = 0;
  // Range is the whole types of password string that user chosen.
  // TypeDisplay is the notification of password types which will show on the screen.
  // Password is output.
  var pwdRange = "";
  var pwdTypeDisplay = "";
  var pwd = "";
  // Get the length of password from user. And it's limited between 8-128.
  while(pwdLengthPass){
    var pwdLengh = prompt("How many characters would you like to set to your password?\n (Tip: enter a number between 8 to 128)");
    if(pwdLengh>=8 && pwdLengh<=128) {
      alert("Password length set!\n Your expected Password Length: " + pwdLengh);
      pwdLengthPass = false;
    } else {
      alert("Not a valid input, Please enter a number between 8-128");
    }
  }
  
  // Ask the type of password will be, and won't stop if don't choose any type.
  while(conditionNumber==0) {
    for (var i=0; i<pwdLibrary.typeNameStr.length; i++) {
      if(confirm((i+1) + ". Do you expect your Password to include "+ pwdLibrary.typeNameStr[i]+ "?")) {
        conditionNumber++;
        pwdRange = pwdRange.concat(typeName[i]);
        pwdTypeDisplay = pwdTypeDisplay.concat(pwdLibrary.typeNameStr[i], "\n");
      };
    };

    if(conditionNumber==0) {
      alert("You have to choose at least one password type in order to generate your Password.");
    } else {
      alert("Excellent! Your Password type will include: \n\n"+ pwdTypeDisplay + "\nLength: "+ pwdLengh);
    }
  }

  // Generate the password.
  var index = 0;
  for (var j=0; j<pwdLengh; j++) {
    index = Math.floor(Math.random()*pwdRange.length);
    pwd = pwd.concat(pwdRange[index]);
  }

  // return the generated password
  return pwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
