// Assignment code here
// go through the user stories and make promopts
// make a Class that stores all the options that the user chooses during the prompts
// at the end the class will be used to generate the password based on the users selections.  

const password_criteria = {
  length_defined : 8,
  uppercase_defined : false,
  numeric_defined : false, 
  special_characters_defined : false
};


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
    uppercase_defined = "Do you want capitals?";
      if (confirm(uppercase_defined) == true){
      uppercase_defined = true
    }
      else{
      uppercase_defined = false
    }   
  
  numeric_defined = "Do you want numbers?";
      if (confirm(numeric_defined) == true){
        numeric_defined = true
    }
      else{
        numeric_defined = false
    }   
  }
}