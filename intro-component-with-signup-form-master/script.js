function validateForm() {
    let testResult = test();
    if (testResult === false) {
        document.getElementById('button').disabled = true;
    }
  }
  
  
  function test() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById("lname");
    let password = document.getElementById("pass");
    let regexpEmail = /[a-zA-Z0-9_.-]+@[a-zA-Z]+\.[a-zA-Z]{2,10}/g;
    let regexpPassword = /([a-zA-Z0-9@_.#*&+-]+){7,20}/g;
    let email = document.getElementById("email");
    if (firstName.value == '') {
     let newP = document.createElement('p');
     let newPText = document.createTextNode('First Name cannot be empty');
     let currentDiv = document.getElementById('fname_error');
     newP.appendChild(newPText);
     currentDiv.insertBefore(newP, null);
     firstName.style = 'border: 3px solid hsl(0, 100%, 74%)';
     firstName.placeholder = '';
   } if (lastName.value == '') {
     let newP = document.createElement('p');
     let newPText = document.createTextNode('Last Name cannot be empty');
     let currentDiv = document.getElementById('lname_error');
     newP.appendChild(newPText);
     currentDiv.insertBefore(newP, null);
     lastName.style = 'border: 3px solid hsl(0, 100%, 74%)';
     lastName.placeholder = '';
   } if (email.value == '' || !regexpEmail.test(email.value)) {
     let newP = document.createElement('p');
     let newPText = document.createTextNode('Looks like this is not an email');
     let currentDiv = document.getElementById('email_error');
     newP.appendChild(newPText);
     currentDiv.insertBefore(newP, null);
     email.style = 'border: 3px solid hsl(0, 100%, 74%)';
     email.placeholder = 'email@example/com';
   } if (password == '' || !regexpPassword.test(password.value)) {
     let newP = document.createElement('p');
     let newPText = document.createTextNode('Invalid password format');
     let currentDiv = document.getElementById('password_error');
     newP.appendChild(newPText);
     currentDiv.insertBefore(newP, null);
     password.style = 'border: 3px solid hsl(0, 100%, 74%)';
     password.placeholder = '';
     return false;
   }
    return true;
  }