// Form validation script
document.addEventListener("DOMContentLoaded", () => {
  // Fetch all forms that need validation
  const forms = document.querySelectorAll(".needs-validation")

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        // Check for honeypot field
        const honeypot = form.querySelector('[name="_honey"]')
        if (honeypot && honeypot.value) {
          event.preventDefault()
          event.stopPropagation()
          return
        }

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          // If form is valid, add loading state
          const submitButton = form.querySelector('button[type="submit"]')
          if (submitButton) {
            submitButton.innerHTML =
              '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...'
            submitButton.disabled = true
          }

          // Add reCAPTCHA token
          if (typeof grecaptcha !== "undefined") {
            event.preventDefault()
            grecaptcha.ready(() => {
              grecaptcha.execute("YOUR_RECAPTCHA_SITE_KEY", { action: "submit" }).then((token) => {
                const recaptchaInput = form.querySelector("#g-recaptcha-response")
                if (recaptchaInput) {
                  recaptchaInput.value = token
                }
                form.submit()
              })
            })
          }
        }

        form.classList.add("was-validated")
      },
      false,
    )
  })

  // Client-side form encryption (for demonstration - in production use a proper encryption library)
  function encryptFormData(formData) {
    // This is a placeholder for actual encryption
    // In a real implementation, use a proper encryption library
    return btoa(JSON.stringify(formData))
  }
})

