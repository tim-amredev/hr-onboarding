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
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value

      // Simple validation
      if (!email || !password) {
        showError("Please enter both email and password.")
        return
      }

      // Show loading state
      loginButton.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Signing in...'
      loginButton.disabled = true

      // Simulate login (in a real app, this would be an API call)
      setTimeout(() => {
        // For demo purposes, any login works
        // In production, implement proper authentication
        localStorage.setItem("hr-onboarding-authenticated", "true")
        window.location.href = "/hr-onboarding/dashboard/"
      }, 1500)
    })
  }

  // Check if user is already logged in
  const isAuthenticated = localStorage.getItem("hr-onboarding-authenticated") === "true"
  if (
    isAuthenticated &&
    (window.location.pathname.endsWith("index.html") ||
      window.location.pathname.endsWith("/hr-onboarding/") ||
      window.location.pathname.endsWith("/hr-onboarding"))
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
    const errorDiv = document.createElement("div")
    errorDiv.className = "alert alert-danger mt-3"
    errorDiv.textContent = message

    const form = document.getElementById("login-form")
    form.parentNode.insertBefore(errorDiv, form.nextSibling)

    // Remove after 3 seconds
    setTimeout(() => {
      errorDiv.remove()
    }, 3000)
  }
})

