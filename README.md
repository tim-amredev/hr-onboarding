# American Remodeling Enterprises HR Onboarding Dashboard

A secure HR onboarding platform built with Jekyll and hosted on GitHub Pages for American Remodeling Enterprises and Epoxy Floor Experts. This platform serves as a centralized location for employee onboarding, including interactive forms for training completion, policy acknowledgments, and other onboarding tasks.

## Features

- **Secure Forms**: All forms use FormSubmit for serverless form handling
- **Human Verification**: reCAPTCHA v3 and honeypot fields to prevent bot submissions
- **Progress Tracking**: Track completion of onboarding tasks
- **Responsive Design**: Works on desktop and mobile devices
- **Data Privacy**: No sensitive data stored on GitHub
- **Patriotic Design**: Themed with red, white, and blue color scheme

## Getting Started

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Installation

1. Clone this repository
   \`\`\`
   git clone https://github.com/american-remodeling/hr-onboarding.git
   cd hr-onboarding
   \`\`\`

2. Install Jekyll and dependencies
   \`\`\`
   bundle install
   \`\`\`

3. Run the development server
   \`\`\`
   bundle exec jekyll serve
   \`\`\`

4. Open your browser and navigate to `http://localhost:4000/hr-onboarding`

## Configuration

### FormSubmit Integration

1. Update the email address in `_config.yml`:
   \`\`\`yaml
   email: hr@americanremodelingenterprises.com
   \`\`\`

2. Configure reCAPTCHA v3:
   - Sign up for reCAPTCHA v3 at https://www.google.com/recaptcha/admin
   - Add your site key to `_config.yml`:
     \`\`\`yaml
     recaptcha_site_key: your-site-key
     \`\`\`

## Deployment

This site is designed to be deployed to GitHub Pages:

1. Push your changes to GitHub:
   \`\`\`
   git add .
   git commit -m "Update site"
   git push origin main
   \`\`\`

2. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set Source to "main" branch
   - Set folder to "/ (root)"
   - Click Save

## Adding New Forms

1. Create a new form file in the `_forms` directory
2. Use the form layout and include the necessary FormSubmit configuration
3. Add validation and progress tracking as needed

## Security Considerations

- No sensitive data is stored in the repository
- All form submissions are sent directly to HR's email
- Client-side form validation prevents common attacks
- reCAPTCHA v3 and honeypot fields prevent bot submissions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Jekyll](https://jekyllrb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [FormSubmit](https://formsubmit.co/)
- [reCAPTCHA](https://www.google.com/recaptcha/about/)

