const studyInput = document.querySelector('#studyTime');
const checkButton = document.querySelector('#checkButton');
const result = document.querySelector('#result');
checkButton.addEventListener('click', function() {
  
    const rawStudyTime = studyInput.value;
    const studyTime = Number(rawStudyTime);

    console.log("Button clicked!");
    console.log(studyTime);

    if (studyTime < 25) {
        result.textContent = "Keep going!";
    } else if (studyTime >= 25 && studyTime <= 49) {
        result.textContent = "Take a 5-minute break.";
    } else if (studyTime >= 50 && studyTime <= 89) {
        result.textContent = "Take a 10-minute break.";
    } else if (studyTime >= 90) {
        result.textContent = "Take a longer break and recharge.";
    } else {
        result.textContent = "Please enter a valid number of minutes.";
    }
});