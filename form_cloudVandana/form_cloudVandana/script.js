document.getElementById("submit-button").addEventListener("click", function () {

    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var country = document.getElementById("country").value;
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobile-number").value;

    var gender = [];
    if (document.getElementById("male").checked) {
        gender.push("Male");
    }
    if (document.getElementById("female").checked) {
        gender.push("Female");
    }

    if (!firstName || !lastName || !dateOfBirth || !country || gender.length === 0 || !profession || !email || !mobileNumber) {
        alert("Please fill in all the required fields.");
    } else {
        var confirmationMessage = "You have submitted the following information:\n\n";
        confirmationMessage += "First Name: " + firstName + "\n";
        confirmationMessage += "Last Name: " + lastName + "\n";
        confirmationMessage += "Date of Birth: " + dateOfBirth + "\n";
        confirmationMessage += "Country: " + country + "\n";
        confirmationMessage += "Gender: " + gender.join(", ") + "\n";
        confirmationMessage += "Profession: " + profession + "\n";
        confirmationMessage += "Email: " + email + "\n";
        confirmationMessage += "Mobile Number: " + mobileNumber + "\n";

        alert(confirmationMessage);

        
        document.getElementById("survey-form").reset();
    }
});

document.getElementById("reset-button").addEventListener("click", function () {
    
    document.getElementById("survey-form").value=" ";
});