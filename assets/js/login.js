// Login script
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form")
  const loginButton = document.getElementById("login-button")

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault()

      // Check for honeypot field
      const honeypot = document.getElementById("bot-field")
      if (honeypot && honeypot.value) {
        showError("Bot detected. Access denied.")
        return
      }

      // Get form values
      const username = document.getElementById("username").value
      const password = document.getElementById("password").value

      // Simple validation
      if (!username || !password) {
        showError("Please enter both username and password.")
        return
      }

      // Show loading state
      loginButton.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Signing in...'
      loginButton.disabled = true

      // Check credentials - FIXED: Exact match for credentials
      setTimeout(() => {
        // For demo purposes, hardcoded credentials
        if (username === "admin" && password === "AmericanHR!1") {
          // Successful login
          localStorage.setItem("hr-onboarding-authenticated", "true")
          window.location.href = "/hr-onboarding/dashboard/"
        } else {
          // Failed login
          loginButton.innerHTML = "Sign in"
          loginButton.disabled = false
          showError("Invalid username or password. Please try again.")
        }
      }, 1000)
    })
  }

  // Check if user is already logged in
  const isAuthenticated = localStorage.getItem("hr-onboarding-authenticated") === "true"
  const currentPath = window.location.pathname

  // Check if we're on the login page (with various possible URL formats)
  if (
    isAuthenticated &&
    (currentPath === "/hr-onboarding/" ||
      currentPath === "/hr-onboarding" ||
      currentPath === "/hr-onboarding/index.html")
  ) {
    window.location.href = "/hr-onboarding/dashboard/"
  }

  // Logout functionality
  const logoutLink = document.getElementById("logout-link")
  if (logoutLink) {
    logoutLink.addEventListener("click", (event) => {
      event.preventDefault()
      localStorage.removeItem("hr-onboarding-authenticated")
      window.location.href = "/hr-onboarding/"
    })
  }

  function showError(message) {
    // Remove any existing error messages
    const existingErrors = document.querySelectorAll(".alert-danger")
    existingErrors.forEach((error) => error.remove())

    // Create new error message
    const errorDiv = document.createElement("div")
    errorDiv.className = "alert alert-danger mt-3"
    errorDiv.textContent = message

    const form = document.getElementById("login-form")
    form.parentNode.insertBefore(errorDiv, form.nextSibling)

    // Remove after 5 seconds
    setTimeout(() => {
      errorDiv.remove()
    }, 5000)
  }
})

