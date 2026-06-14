// ==================================================================
//  STATE
// ==================================================================
const state = {
  score: 0,
};

// ==================================================================
//  DOM (UI)
// ==================================================================
const UI = {
  questionSection: document.getElementById("question-section"),
  thanksSection: document.getElementById("thanks-section"),
  submitButton: document.getElementById("submit-btn"),
  selectedRadio: document.querySelector(".choices"),
  scoreSpan: document.getElementById("card-score"),
};

// ==================================================================
//  RENDER FUNCTION
// ==================================================================
const view = {
  showSection(section) {
    UI.questionSection.classList.add("hidden");
    UI.thanksSection.classList.add("hidden");

    if (section === "question") UI.questionSection.classList.remove("hidden");
    if (section === "thanks") UI.thanksSection.classList.remove("hidden");
  },

  initRadio() {
    UI.selectedRadio
      .querySelectorAll("input[type='radio']")
      .forEach((radio) => {
        radio.checked = false;
      });
  },
};

// ==================================================================
//  CLICK BUTTONS
// ==================================================================
UI.submitButton.addEventListener("click", () => {
  UI.scoreSpan.textContent = state.score;
  view.showSection("thanks");
});

UI.selectedRadio.addEventListener("change", (event) => {
  if (event.target.name === "score") {
    state.score = event.target.value;
  }
});

// ==================================================================
//  LOAD APPLICATION
// ==================================================================
document.addEventListener("DOMContentLoaded", async () => {
  view.initRadio();
  view.showSection("question");
});
