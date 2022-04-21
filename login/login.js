const form = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const alert = document.querySelector(".alert-login");
const text_alert = document.querySelector(".text_alert_success");



const user = JSON.parse(localStorage.getItem("user"));

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
	small.innerText = ''
}

// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    let stateLogin = false;
    user.forEach((item)=>{
        if(item.Email === email.value && item.Password === password.value){
            stateLogin = true;
        }
    })
    if(stateLogin){
        if (re.test(input.value.trim())) {
            showSuccess(input);
            window.location.replace("http://127.0.0.1:5500/home/home.html");
        } 
    } else {
		// showError(input, 'Thông tin tài khoản không chính xác');
        text_alert.innerText = "Thông tin tài khoản không chính xác";
        alert.classList.toggle("alert-login-success");
        setTimeout(() => {
          alert.classList.toggle("alert-login-success");
        }, 1500);
        return;
	}
}

// Check required fields
function checkRequired(inputArr) {
	let isRequired = false
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`)
			isRequired = true
		} else {
			showSuccess(input)
		}
	})

	return isRequired
}

// Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		)
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		)
	} else {
		showSuccess(input)
	}
}


// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([email, password])) {
		checkLength(password, 6, 25)
		checkEmail(email)
	}
})
