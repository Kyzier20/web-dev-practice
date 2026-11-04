console.log("Volunteer form JavaScript loaded.");

const volunteerForm = document.querySelector("#volunteerForm");
const nameInput = document.querySelector("#name"); // or #name depending on your HTML id
const emailInput = document.querySelector("#email");
const interestInput = document.querySelector("#interest");
const result = document.querySelector("#result");

volunteerForm.addEventListener("submit", function(event) {
    // Prevent the page from refreshing on submit
    event.preventDefault(); 

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const interest = interestInput.value;

    // Fixed validation logic (checking one by one)
    if (name === "") {
        result.textContent = "Please enter your name.";
    } else if (email === "") {
        result.textContent = "Please enter your email.";
    } else if (interest === "") {
        result.textContent = "Please select an area of interest.";
    } else {
        // Fixed value matching (using lowercase values from HTML options)
        if (interest === "outreach") {
            result.textContent = `Explore our Community Outreach opportunities, ${name}.`;
        } else if (interest === "mentoring") {
            result.textContent = `Learn more about Youth Mentoring and how you can contribute, ${name}.`;
        } else if (interest === "events") {
            result.textContent = `Check out our upcoming Event Support tasks, ${name}.`;
        } else {
            result.textContent = `Thank you, ${name}! We have received your interest and will email you soon.`;
        }
    }
});