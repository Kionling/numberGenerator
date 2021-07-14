# numberGenerator
This simple number generator uses fundamental applications of javascript to generate, randomize, and display 
a number from 1-10000 upon the user's request. For future development, this program will include not only numbers, 
but randomized words at any character count the user chooses to select. 

# Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript

# Code Snippet
```
function numberGen() {
  var num = Math.round(Math.random() * 10000);
  numberGenerator.innerHTML = num;
  return num;
}
```
- This is the main function of this application that randomizes the number and appends the information to the HTML. Utilizing Math.random(), I set the randomization boundaries by multiplying it by 10000. In post, adding Math.round() to remove any decimal values. 

# Deployment Links

* [Link to Repo](https://github.com/Kionling/numberGenerator)
* [Link to Deployed Site](https://kionling.github.io/numberGenerator/)

