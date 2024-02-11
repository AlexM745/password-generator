
//arrays for character types in password
//lowercase characters
var smallabc = [
  'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z']; 
// uppercase characters
var bigabc = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'];
// numbers
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
// special characters
var spl = [
'@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.']; 


function passoptions(){
  // password length prompt
  var lengthinput = Number (window.prompt("How many characters do you want your password to contain? Enter number between 8 and 128."));

    // Checking if length criteria is met 
    if (lengthinput < 8 ){
      alert("Must be atleast 8 characters!");
      return "";
    }

    if (lengthinput > 128) {
      alert ('Must be less than 129 characters!')
      return "";
    }
    // prompts for the character criteria 
    var uppercase = confirm("Click Okay to continue if you want Uppercase letters?");
    var lowercase = confirm ("Click Okay to continue if you want Lowercase Characters");
    var numeric = confirm("Click Okay to continue if you want Numbers?");
    var special = confirm("Click Okay to continue if you want Special Characters?");
    // if comfirm prompts retun null user will get this alert
    if (uppercase === false && lowercase === false && numeric === false && special === false) {
        alert("You have to choose at least one type of character fo the password.")
        return "";
}
return {lengthinput, uppercase, lowercase, numeric, special};// for the prompts to show up.

}


// Gets a ramdom character from array
function getramdom(arr) {
  var  ramdomchar= Math.floor(Math.random() * arr.length);
  return arr[ramdomchar];

}

// generates the password with user choices
function generatePassword(){
 var result = []; // stores the random characters for final result 
 var useroption = passoptions(); // makes a new variable for function
 var charset= [];// stores all characters arrays variables 

 // gets the arrays if they are comfirmed by user
 if (useroption.uppercase) {
  charset = charset.concat(bigabc);
}
if (useroption.lowercase) {
  charset = charset.concat(smallabc);
}
if (useroption.numeric) {
  charset = charset.concat(num);
}
if (useroption.special) {
  charset = charset.concat(spl);
}

// ramdomizes by the length given and characters selected
for (var i = 0; i < useroption.lengthinput; i++){
result.push(getramdom(charset)); // new items to the end of getramdom array
}

var finalpass = result.join('');// creates and returns the array into a string.

return finalpass;// result of password with all user choices.

}

// getting button element from #generate
var generateBtn = document.querySelector("#generate");    
// to write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);