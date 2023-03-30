// Assignment code here


lowerAlpha = ["a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p","z","x","c","v","b","n","m"]
upperAlpha = ["Z","X","C","V","B","N","M","A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P"]
numeric = ["1","2","3","4","5","6","7","8","9","0"]
special = ['!','"',"'",'#',"$","%","&","(",")","*","+",",","-",".","/",":",":",";","<",">","=","?","@","[","]","^","_","`","{","}","|","~"]

passwordChars = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function get_length(){
  length_defined = prompt("Please enter a length between 8-120");
  if(length_defined < 8 || length_defined > 120) {
    alert("Password must be between 8 and 120 characters 😃");
    
  }
  else{
    lowercase_defined = "Do you want lowercase?";
      if (confirm(lowercase_defined) == true){
      passwordChars = passwordChars.concat(lowerAlpha)
      }
      uppercase_defined = "Do you want capitals?";
      if (confirm(uppercase_defined) == true){
      passwordChars = passwordChars.concat(upperAlpha)
      }
      numeric_defined = "Do you want numbers?";
      if (confirm(numeric_defined) == true){
        passwordChars = passwordChars.concat(numeric)
      }
      special_defined = "Do you want specials?";
      if (confirm(special_defined) == true){
        passwordChars = passwordChars.concat(special)
        }
        console.log(passwordChars[Math.floor(Math.random()*passwordChars.length)])
      
  }
}