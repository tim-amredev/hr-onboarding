// Progress tracker script
document.addEventListener("DOMContentLoaded", () => {
  // Load saved progress from localStorage
  function loadProgress() {
    const progressData = {
      personal: localStorage.getItem("personal-info-progress") || 0,
      policy: localStorage.getItem("policy-progress") || 0,
      training: localStorage.getItem("training-progress") || 0,
      equipment: localStorage.getItem("equipment-progress") || 0,
      benefits: localStorage.getItem("benefits-progress") || 0,
    }

    // Update sidebar progress indicators
    updateProgressIndicator("personal-info-status", progressData.personal)
    updateProgressIndicator("policy-status", progressData.policy)
    updateProgressIndicator("training-status", progressData.training)
    updateProgressIndicator("equipment-status", progressData.equipment)
    updateProgressIndicator("benefits-status", progressData.benefits)

    // Calculate overall progress
    const overallProgress = calculateOverallProgress(progressData)
    updateOverallProgress(overallProgress)

    // Update dashboard progress if on dashboard page
    const dashboardProgress = document.getElementById("dashboard-progress")
    if (dashboardProgress) {
      dashboardProgress.style.width = overallProgress + "%"
      dashboardProgress.textContent = overallProgress + "%"
      dashboardProgress.setAttribute("aria-valuenow", overallProgress)
    }
  }

  function updateProgressIndicator(elementId, progress) {
    const element = document.getElementById(elementId)
    if (!element) return

    if (progress == 100) {
      element.className = "badge bg-success rounded-pill"
      element.textContent = "Completed"
    } else if (progress > 0) {
      element.className = "badge bg-warning rounded-pill"
      element.textContent = "In Progress"
    } else {
      element.className = "badge bg-secondary rounded-pill"
      element.textContent = "Not Started"
    }
  }

  function calculateOverallProgress(progressData) {
    const values = Object.values(progressData).map(Number)
    const sum = values.reduce((a, b) => a + b, 0)
    return Math.round(sum / values.length)
  }

  function updateOverallProgress(progress) {
    const overallProgress = document.getElementById("overall-progress")
    if (overallProgress) {
      overallProgress.style.width = progress + "%"
      overallProgress.textContent = progress + "%"
      overallProgress.setAttribute("aria-valuenow", progress)
    }
  }

  // Load progress on page load
  loadProgress()
})

