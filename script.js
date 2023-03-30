lowerAlpha = ["a","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p","z","x","c","v","b","n","m"]
// list of all lowercase
upperAlpha = ["Z","X","C","V","B","N","M","A","S","D","F","G","H","J","K","L","Q","W","E","R","T","Y","U","I","O","P"]
// list of all uppercase
numeric = ["1","2","3","4","5","6","7","8","9","0"]
// list of all numerals
special = ['!','"',"'",'#',"$","%","&","(",")","*","+",",","-",".","/",":",":",";","<",">","=","?","@","[","]","^","_","`","{","}","|","~"]
// list of specials
passwordChars = []
//global for use in generating password, empty array
answer = [] 
//global for use in formating selected password parameters



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   length_defined = prompt("Please enter a length between 8-120");
   // prompts user for length when clicked and stores value
    if(length_defined < 8 || length_defined > 120) {
    alert("Password must be between 8 and 120 characters 😃")
    // making sure the correct length is entered
    }
    else{
      lowercase_defined = "Do you want lowercase?";
        if (confirm(lowercase_defined) == true){
          passwordChars = passwordChars.concat(lowerAlpha)
        }
        //adds lowercase if user wants them
      uppercase_defined = "Do you want capitals?";
        if (confirm(uppercase_defined) == true){
        passwordChars = passwordChars.concat(upperAlpha)
        }
                //adds uppercase if user wants them
      numeric_defined = "Do you want numbers?";
        if (confirm(numeric_defined) == true){
        passwordChars = passwordChars.concat(numeric)
      }
              //adds numbers if user wants them
      special_defined = "Do you want specials?";
        if (confirm(special_defined) == true){
        passwordChars = passwordChars.concat(special)
      }
              //adds speicals if user wants them
      }
    for (let i = 0; i < length_defined; i++) { //generates random chars
      answerIndex = passwordChars[Math.floor(Math.random()*passwordChars.length)];
      //adds random characters based on criteria
      answer.push(answerIndex);
      // makes a new array with all the random chars
    }
    var password = answer.join(''); //removes commas from random chars array
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  //removed the code for the event watcher down here.
  //I have no idea what it does and was making my prompts
  //fire unexpectedly, works fine without