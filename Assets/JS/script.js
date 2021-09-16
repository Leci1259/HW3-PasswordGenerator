// Assignment Code
var generateBtn = document.querySelector("#generate");

// password object
var wPassword = {
  length:0,


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Generator Function
function myFunction()  {
  //Password length 
  var passSizeInfo = window.prompt("Type a Password Length between 8-128 characters");
  if (!passSizeInfo) {
    return
  }
  else if (passSizeInfo > 128 || passSizeInfo < 8 ) {
    window.alert (" Error! Password length not in designated range. Try again");
    return  
  }
  else {
    var pass = [];
  }
  //Password criteria 
  var wantLow = window.confirm("Do you want to include lowercase?");
  var wantUpp =window.confirm("Do you want to include uppercase?");
  var wantNum =window.confirm("Do you want to include numbers?");
  var wantSpe=window.confirm("Do you want to include special characters?");

  //Hold-type variable
  var lowLett = "abcdefghijklmnopqrstuvwxyz";
  var uppLett = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numList = "0123456789";
  var speList ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //Loop to construct password
  
while (pass.length !== passSizeInfo) {

  //Adds lowercase letter if it was selected
   if (wantLow){
      function getRandomLC() {
          var c= Math.floor(Math.random() * lowLett.length);
          return lowLett[c]
        };

        var lowerCase= getRandomLC();
        pass.push (lowerCase);
   }

   //Adds Uppercase letter if selected
   if (wantUpp){
      function getRandomUC() {
          var c= Math.floor(Math.random() * uppLett.length);
          return uppLett[c]
        };

        var UpperCase = getRandomUC();
        pass.push(UpperCase);
   }

   //Add Num if selected
   if (wantNum) {
      function getRandomNum() {
          var c= Math.floor(Math.random() * numList.length);
          return numList[c]
      }; 

      var NumVal = getRandomNum();
      pass.push(NumVal);
  }
  // Add Special if selected
  if (wantSpe) {
      function getRandomSpe() {
          var c= Math.floor(Math.random() * speList.length);
          return speList[c]
      };

      var SpeVal =getRandomSpe();
      pass.push(SpeVal);
  }
   }

   window.alert(pass);
}



//alert, confirm prompt
//condition check for length
//use array/object methods for characters

//process
//make a randomized array of the length specificied
//after each prompt a true