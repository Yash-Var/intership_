function validateForm() {
  var username = document.forms["signupForm"]["username"].value;
  var password = document.forms["signupForm"]["password"].value;
  var confirm_password = document.forms["signupForm"]["confirm_password"].value;

  if (username == "") {
    document.getElementById("message").innerHTML =
      "<p class='error'>Please enter a username</p>";
    return false;
  }

  if (password.length < 8) {
    document.getElementById("message").innerHTML =
      "<p class='error'>Password must be at least 8 characters long</p>";
    return false;
  }

  if (password != confirm_password) {
    document.getElementById("message").innerHTML =
      "<p class='error'>Passwords do not match</p>";
    return false;
  }

  document.getElementById("message").innerHTML =
    "<p class='success'>Form submitted successfully!</p>";
  return true;
}
