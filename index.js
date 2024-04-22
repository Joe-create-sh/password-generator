const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@",
    "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".",
    "?", "/"];


const passwordLength = document.querySelector('#user-number');
const checkBox = document.querySelector('#symbols-numbers');
let isChecked = false;
let isPasswordPopulated = false;
const generateButton = document.querySelector('.password-btn');
let userNumber = 0;
const passwordOneContainer = document.querySelector('.password-one');
const passwordTwoContainer = document.querySelector('.password-two');
const lettersOnly = characters.filter(isLetter); // pass-in the isLetter function which filters the characters array and returns only upper- and lower-case letters
console.log(lettersOnly);
const copyToClipBoardButton = document.querySelector('.copy-clipboard');
const passwordOne = document.querySelector('.password-one');
const passwordTwo = document.querySelector('.password-two');


passwordLength.addEventListener('input', function () { 

    userNumber = passwordLength.value;

    console.log(`The user has input: ${userNumber}`);

});


checkBox.addEventListener("change", function () {

    isChecked = checkBox.checked ? true : false;
    console.log(`Checkbox checked: ${isChecked}`);


});


generateButton.addEventListener('click', function () { 

    if (!isPasswordPopulated) {
        
        passwordOneContainer.textContent = passwordGenerator();
        passwordTwoContainer.textContent = passwordGenerator();

        isPasswordPopulated = true;

    } else {


        clearPassword();

    }


});


copyToClipBoardButton.addEventListener('click', function () { 


    let copyPasswordOne = passwordOne.innerText;
    let copyPasswordTwo = passwordTwo.innerText;

    let combinedCopiedPasswords = copyPasswordOne + '\n' + copyPasswordTwo;

    if (copyPasswordOne && copyPasswordTwo) {
    
        navigator.clipboard.writeText(combinedCopiedPasswords)
            .then(() => {

                alert('Passwords have been copied to clipboard');

            }).catch(error => {

                console.log('Error encountered copying passwords to clipboard', error);

            });

    } else { 

        alert('Password fields are empty');

    }


});

// function that filters the characters array and returns a new array containing only letters

function isLetter(character) {
    

    return /[a-zA-Z]/.test(character); // implement the regular expression test method to test if the passed-in character matches the regular expression

}


function passwordGenerator() {
         
    let password = ""; 
    
    if (userNumber && checkBox.checked) { 

        for (let i = 0; i < userNumber; i++) {
                  
            index = Math.floor(Math.random() * characters.length);
                   
            password += characters[index];
            
        }
        
    } else if(userNumber && !checkBox.checked){ 

        for (let i = 0; i < userNumber; i++){

            index = Math.floor(Math.random() * lettersOnly.length);

            password += lettersOnly[index];

        }


    } else {


        alert('Please enter a number');

    }

    return password;
      
}


function clearPassword() { 

    passwordOneContainer.textContent = ""; 
    passwordTwoContainer.textContent = "";
    isPasswordPopulated = false; 


}












    











