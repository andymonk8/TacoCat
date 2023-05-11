//get starting values from the screen
//Controller Function

function getValue() {
  // Hides the Results alert
  document.getElementById("alert").classList.add("invisible");

  let userString = document.getElementById("userString").value;

  if (userString == "") {
    Swal.fire({
      icon: "error",
      backdrop: false,
      title: "Sorry!",
      text: "Must enter a word",
    });
  }

  /* Regex Gets Rid of Spaces and Special Charcters?!
  To Lower Case / toLowerCase Makes Everything / the String Lower Case?! */
  const regex = /[^a-z0-9]/gi;
  userString = userString.toLowerCase().replace(regex, "");

  let resultString = reverseString(userString);
  let isPalindrome = palChecker(userString, resultString);


  displayData(resultString, isPalindrome);
}

// Reverse / Reversing the String?!
function reverseString(userString) {

  let revString = [];

  // Loop?! String Length Total - 1 is the Last Chacter of the index?!
  for (let i = userString.length - 1; i >= 0; i--) {
    
    revString += userString[i];
  }


  return revString;
}



// Checks if Palindrome?!
function palChecker(userString, resultString) {

    if (resultString.toLowerCase() === userString.toLowerCase()) {
      isPalindrome = true;
    }else{
      isPalindrome = false;
    }

    
    return isPalindrome;
}



function displayData(resultString, isPalindrome) {
  document.getElementById("alert").classList.add("alert-success");
  document.getElementById("alert").classList.remove("alert-danger");

  if (isPalindrome) {
    document.getElementById("alert").classList.add("alert-success");
    document.getElementById("alertHeader").innerHTML = "Well done! It is a Palindrome!";
    document.getElementById(
      "msg"
    ).innerHTML = `Your reversed string is: <br><h5><strong>${resultString}<strong><h5>`;
  } else {
    document.getElementById("alert").classList.add("alert-danger");
    document.getElementById("alertHeader").innerHTML = "Sorry! Not a Palindrome!";
    document.getElementById(
      "msg"
    ).innerHTML = `Your reversed string is: <br><h5><strong>${resultString}<strong><h5>`;
  }

  document.getElementById("alert").classList.remove("invisible");
}
