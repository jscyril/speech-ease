document.addEventListener("DOMContentLoaded", function () {
  const loadingCircle = document.getElementById("loading");
  const redirectMessage = document.getElementById("redirect-message");
  const goalForm = document.getElementById("goal-form");
  const setGoalButton = document.getElementById("set-goal-btn");

  // Function to show loading circle
  function showLoadingCircle() {
    loadingCircle.style.display = "block";
  }

  // Function to hide loading circle
  function hideLoadingCircle() {
    loadingCircle.style.display = "none";
  }

  // Simulate a delay (6 seconds)
  setTimeout(function () {
    hideLoadingCircle();
    redirectMessage.textContent = "Plan created, redirecting to Topics";
  }, 6000);

  // Set Goal Button Click Event
  setGoalButton.addEventListener("click", function (event) {
    event.preventDefault();
    showLoadingCircle();
    redirectMessage.textContent = ""; // Clear redirect message
    // Simulate another delay (5 seconds) before redirecting
    setTimeout(function () {
      window.location.href = "./topics/topics.html"; // Replace with the actual destination URL
    }, 5000);
  });
});
