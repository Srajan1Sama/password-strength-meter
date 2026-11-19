
// Get HTML elements
let password = document.getElementById("password");

let showPassword = document.getElementById("showPassword");

let strengthFill = document.getElementById("strengthFill");

let strengthText = document.getElementById("strengthText");


// Function to check password strength
function checkPassword() {

    let value = password.value;

    // Check five rules
    let length = value.length >= 8;

    let uppercase = /[A-Z]/.test(value);

    let lowercase = /[a-z]/.test(value);

    let number = /[0-9]/.test(value);

    let special = /[^A-Za-z0-9]/.test(value);


    // Store rules in array of objects
    let rules = [
        { id: "length", valid: length },
        { id: "uppercase", valid: uppercase },
        { id: "lowercase", valid: lowercase },
        { id: "number", valid: number },
        { id: "special", valid: special }
    ];


    // Count satisfied rules
    let count = 0;

    for (let i = 0; i < rules.length; i++) {

        let item = document.getElementById(rules[i].id);

        if (rules[i].valid) {

            count++;

            item.classList.add("valid");

        }
        else {

            item.classList.remove("valid");

        }
    }


    // Calculate strength bar percentage
    let percentage = (count / 5) * 100;

    strengthFill.style.width = percentage + "%";


    // Check strength
    if (value.length === 0) {

        strengthText.innerHTML = "";

        strengthFill.style.width = "0%";

        strengthFill.style.backgroundColor = "#ddd";

    }

    else if (count >= 1 && count <= 2) {

        strengthText.innerHTML = "Weak";

        strengthText.style.color = "red";

        strengthFill.style.backgroundColor = "red";

    }

    else if (count >= 3 && count <= 4) {

        strengthText.innerHTML = "Medium";

        strengthText.style.color = "orange";

        strengthFill.style.backgroundColor = "orange";

    }

    else if (count === 5) {

        strengthText.innerHTML = "Strong";

        strengthText.style.color = "green";

        strengthFill.style.backgroundColor = "green";

    }

}


// Check password on every keystroke
password.addEventListener("input", checkPassword);


// Show or hide password
showPassword.addEventListener("change", function() {

    if (showPassword.checked) {

        password.type = "text";

    }
    else {

        password.type = "password";

    }

});
