(function () {

    const form = document.getElementById('form'),
        userName = document.getElementById('username'),
        userEmail = document.getElementById('useremail'),
        userPassword = document.getElementById('userpassword'),
        confirmUserPassword = document.getElementById('confirmpassword'),
        submit = document.getElementById('submit');

    function showError(input, msg) {
        input.parentElement.className = 'form-control error';
        input.nextElementSibling.textContent = msg;
    }

    function showSuccess(input) {
        input.parentElement.className = 'form-control success';
    }

    function emailIsValid(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    form.addEventListener('submit', function (e) {
        if (!userName.value) {
            showError(userName, 'User name is required');
        } else {
            showSuccess(userName);
            const inputs = document.querySelectorAll('input');

            Array.from(inputs).forEach(input => {
                input.value = '';
            })
        }
        if (!userEmail.value) {
            showError(userEmail, 'User email is required');
        } else if (!emailIsValid(userEmail.value)) {
            showError(userEmail, 'User email is not valid');
        }
        else {
            showSuccess(userEmail);
            const inputs = document.querySelectorAll('input');

            Array.from(inputs).forEach(input => {
                input.value = '';
            })
        }

        e.preventDefault();
    })

}());
