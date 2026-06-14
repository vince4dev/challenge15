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
  errorMessage: document.getElementById("error-message"),
  errorMessageContainer: document.getElementById("error-message-container"),
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

  checkRadio() {
    const selectedRating = UI.selectedRadio.querySelector(
      "input[type='radio']:checked",
    );

    if (!selectedRating) {
      UI.errorMessage.textContent = "Please select a rating";
      UI.errorMessageContainer.style.display = "flex";
      return;
    }

    UI.errorMessageContainer.style.display = "none";
    UI.scoreSpan.textContent = state.score;
    view.showSection("thanks");
  },
};

// ==================================================================
//  CLICK BUTTONS
// ==================================================================
UI.submitButton.addEventListener("click", () => {
  view.checkRadio();
});

UI.selectedRadio.addEventListener("change", (event) => {
  UI.errorMessageContainer.style.display = "none";
  if (event.target.name === "score") {
    state.score = Number(event.target.value);
  }
});

// ==================================================================
//  LOAD APPLICATION
// ==================================================================
document.addEventListener("DOMContentLoaded", async () => {
  view.initRadio();
  view.showSection("question");
});
