document.getElementById("userForm").addEventListener("submit", function (event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get form inputs
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Get error message elements
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");

    // Reset error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Validate username
    if (usernameInput.value.trim() != "admin") {
        usernameError.textContent = "invalid username";
        usernameInput.focus();
        return false; // Prevent form submission
    }

    // Validate password
    if (passwordInput.value.trim() != "admin") {
        passwordError.textContent = "invalid Password ";
        passwordInput.focus();
        return false; // Prevent form submission
    }
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        passwordInput.focus();
        return false; // Prevent form submission
    }
window.location.replace("./index.html");
    // If everything is valid, submit the form
    var successAlert = document.getElementById("successAlert");
    successAlert.style.display = "block";
  
    // Hide the alert after 3 seconds (adjust the duration as needed)
    setTimeout(function() {
      successAlert.style.display = "none";
    }, 3000); // 3000 milliseconds = 3 seconds
  
    
});
