# Password Generator Starter Code

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    

## Description 

[Visit the Deployed Site](https://bdalberson.github.io/password_generator/)



## Code Refactor Example


Below is the main conditional that starts off by getting user input to begin making the password, it verifies a valid entry was entered and got me some good practice on how to use prompts, alerts and confirms.

```javascript
length_defined = prompt("Please enter a length between 8-120");
   // prompts user for length when clicked and stores value
    if(length_defined < 8 || length_defined > 120) {
    alert("Password must be between 8 and 120 characters 😃")
    // making sure the correct length is entered
    }
```

Below is a little piece of magic that converts the selected characters into a randoom jumble of characters at a specified amount of characters:

```javascript
for (let i = 0; i < length_defined; i++) { //generates random chars
      answerIndex = passwordChars[Math.floor(Math.random()*passwordChars.length)];
      //adds random characters based on criteria
      answer.push(answerIndex);
      // makes a new array with all the random chars
    }
    var password = answer.join(''); //removes commas from random chars array

```


## Usage 

Just head to the site, touch the generate button and select a number between 8-120.  After verifying which type of characters you wuold like to use it will display a nice randomly generated string for you to copy paste into the browser of your choice.

## Learning Points 


This was a refactor.  I struggled quite a bit with the parts I didn't write myself.  I will have to learn to get better at understanding that. Learning to generate random elements was fun, will be of great use in a lot of projects particulary gaming or crypto.


## Author Info

QA professional turning into coder 

* [Portfolio](https://bdalberson.github.io/Course2Biopage/)
* [LinkedIn](https://www.linkedin.com/in/brian-alberson-464b2271/)
* [Github](https://github.com/bdalberson)
```

## Credits


Many thanks to Kaiden and Austin for giving me confidence and helping me out when I couldn't figure something out.  

---

## Tests
Tested numbers outside thee expected range, no character selections, each different option set, works on mobile. 

---