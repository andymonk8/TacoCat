//get starting values from the scree
//Controller Function

function getValue() {
  // Hides the Results alert
  document.getElementById("alert").classList.add("invisible");

  // Get the User input
  let userString = document.getElementById("userString").value;

  if (userString == "") {
    Swal.fire({
      icon: "error",
      backdrop: false,
      title: "Rewind",
      text: "Input required!",
    });
  } 
  else 
  {
    // Reverse the user input
    //let revString = ReverseAStringJS(userString);
    let revString = palindrome(userString);
    
    let msg = '';
    if(userString == revString) {
      msg = 'Your Word is a Palindrome!';
    }
    else{
      msg = "Your Word is NOT a Palindrome!";
    }


    // Display the reversed User input
    displayString(msg);
  }
}

//Reverse the string
function palindrome(userString) {
  let revString = [];

  // User input = 'word'
  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
  }

  const regex = /[^A-Za-z0-9]/gi;
  userString = userString.toLowerCase().replace(regex, "");

  return revString;
}



/* //Reverse the string JS style
function ReverseAStringJS(userString) {
  // Split the string into an array
  let usrArray = userString.split("");

  // Reverse the array
  let revArray = usrArray.reverse();

  // Reurn the array to a string
  let revString = revArray.join("");

  return revString;
} */

//Display the string
function displayString(revString) {
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: <strong>${revString}</strong>`;
  document.getElementById("alert").classList.remove("invisible");
}
