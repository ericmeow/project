const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    var re_aplhanum = /^[a-zA-Z0-9]+$/;
    var re_num = /[0-9]/;
    var re_uppercase = /[A-Z]/;
    var re_specialchar = /[/*-+!@#$^&*]/;
	
	if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');  
    } 
    else if (
        ("a" > usernameValue[0] || usernameValue[0] > "z") &&
        ("A" > usernameValue[0] || usernameValue[0] > "Z")
      ) {
        setErrorFor(username, 'Username must start with a-z or A-Z.');
      }
    else if (usernameValue.length < 3 || !re_aplhanum.test(usernameValue)) {
          setErrorFor(username, 'Username must include 3 or more Alphanumeric Characters.');
    }
    else {
        setSuccessFor(username);
	}

    
 

	if(passwordValue === '' ) {
        setErrorFor(password, 'Password cannot be blank');
        
    } 
    else if(passwordValue.length < 8){
        setErrorFor(password, 'password must contain 8 or more characters');

    }
    else if(!re_uppercase.test(passwordValue)){
        setErrorFor(password, 'password must contain least 1 upper case letter');

    }
    else if(!re_num.test(passwordValue)){
        setErrorFor(password, 'password must contain 1 number');

    }
    else if(!re_specialchar.test(passwordValue)){
        setErrorFor(password, 'include 1 of the following characters (/*-+!@#$^&)');

    }
    else {
		setSuccessFor(password);
    }
    
	
	if(password2Value === '') {
		setErrorFor(password2, 'Confirmation password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Confirmation password does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



