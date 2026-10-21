const studyInput = document.querySelector('#study');
const checkButton = document.querySelector('#checkButton');
const result = document.querySelector('#result');
checkButton.addEventListener('click', function() {
  
    const rawStudyTime = studyInput.value;
    const studyTime = Number(rawStudyTime);

    console.log("Button clicked!");
    console.log(studyTime);

    if (studyTime >= 2 && studyTime <= 4) {
        result.textContent = "You can RSVP!";
    } else {
        result.textContent = "You can't RSVP.";
    }

    if (rawGuests === "" || guests < 0) {
        result.textContent = "Please enter a valid number of guests.";
    } else if (status === "yes" && guests <= 6) {
        result.textContent = "You can RSVP!";
    }else if (status === "yes") {
        result.textContent = "You may bring up to 6 guests.";
    } else { 
        result.textContent = "This event is for students only.";
    }
});