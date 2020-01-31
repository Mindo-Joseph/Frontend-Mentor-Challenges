document.getElementById("registration-form").onsubmit = function() {
    var x = document.forms["registration-form"]["fname"].value;
    var y = document.forms["registration-form"]["lname"].value;
    var z = document.forms["registration-form"]["email"].value;

    var submit = true;


    if (x == null || x == "") {
        fname_error = "First Name cannot be empty";
        document.getElementById("fname_error").innerHTML = fname_error;
        submit = false;
    }
    if (y == null || y == "") {
        lname_error = "Last Name cannot be empty";
        document.getElementById("lname_error").innerHTML = lname_error;
        submit = false;
    }
    if (z == null || z == "") {
        email_error = "Email Name cannot be empty";
        document.getElementById("email_error").innerHTML = email_error;
        submit = false;
    }
    return submit;

}
function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("fname").onkeyup = removeWarning;
document.getElementById("lname").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
