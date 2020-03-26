(function () {

    const form = document.getElementById('form'),
        userName = document.getElementById('username'),
        userEmail = document.getElementById('useremail'),
        userPassword = document.getElementById('userpassowrd'),
        confirmUserPassword = document.getElementById('confirmpassword'),
        submit = document.getElementById('submit');

    function showError(input, msg) {
        input.parentElement.className = 'form-control error';
        input.nextElementSibling.textContent = msg;
    }

    function showSuccess(input) {
        input.parentElement.className = 'form-control success';
    }

    function checkRequired(inputArr) {
        inputArr.forEach(input => {

            if (!input.value.trim()) {
                showError(input, `${getFieldName(input)} is required`)
            } else {
                showSuccess(input);
            }

        })
    }

    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(input.value)) {
            showError(input, `${getFieldName(input)} is not valid`);
        } else {
            showSuccess(input);
        }
    }

    function checkLength(input, min, max) {
        let inputLength = input.value.length;
        if (inputLength < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} character`);
        } else if (inputLength > max) {
            showError(input, `${getFieldName(input)} must be less than ${max} character`);
        } else {
            showSuccess(input);
        }
    }

    function checkPasswordMatch(pass1, pass2) {
        if (pass1.value !== pass2.value) {
            showError(pass2, `${getFieldName(pass1)}s do not match`);
        }
    }

    function getFieldName(input) {
        return input.name;
    }



    form.addEventListener('submit', function (e) {
        checkRequired([userName, userEmail, userPassword, confirmUserPassword]);
        checkLength(userName, 5, 15);
        checkLength(userPassword, 8, 25);
        checkEmail(userEmail);
        checkPasswordMatch(userPassword, confirmUserPassword);
        e.preventDefault();
    })

}());
