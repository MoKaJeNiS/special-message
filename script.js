// Get the elements
const yesBtn = document.getElementById("yes-btn");
const questionDiv = document.getElementById("question");
const surpriseDiv = document.getElementById("surprise");

// On clicking "Yes", show the message
yesBtn.addEventListener("click", () => {
    questionDiv.classList.add("hidden");
    surpriseDiv.classList.remove("hidden");
});
