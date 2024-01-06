function matchPassword() {
  var pw1 = document.getElementById("user_password");
  var pw2 = document.getElementById("user_Cpassword");
  if (pw1 != pw2) {
    alert("Passwords did not match");
  } else {
    alert("Password created successfully");
  }
}
