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

}