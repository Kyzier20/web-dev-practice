const form = document.querySelector('#interestForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const interestInput = document.querySelector('#interest');
const result = document.querySelector('#result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted!");
    const name = nameInput.value;
    const email = emailInput.value;
    const interest = interestInput.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Interest:", interest);

    if (name === "" || email === "" || interest === "") {
        result.textContent = "Please fill out all fields.";
    } else if (interest === "volunteering") {
        result.textContent = `Explore our ${interest} opportunities.`;
    } else if (interest === "donations") {
        result.textContent = `Learn more about ${interest} and how you can contribute.`;
    } else if (interest === "events") {
        result.textContent = `Check out our upcoming ${interest}.`;
    } else {
        result.textContent = `Thank you, ${name}! We have received your interest in ${interest}.`;
    }
});