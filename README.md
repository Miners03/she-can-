# She Can Foundation - Contact Form Project

A modern, full-stack contact form application for She Can Foundation internship project. This project demonstrates web development fundamentals with an attractive and minimal design.

## Features

✨ **Frontend**
- Clean, minimal, and attractive UI
- Responsive design (works on desktop, tablet, mobile)
- Real-time form validation
- Smooth animations and transitions
- Success/error messaging
- Modern gradient styling with brand colors

💼 **Backend**
- Node.js + Express server
- RESTful API endpoints
- Form validation
- Email format verification
- In-memory data storage (demo)
- CORS enabled

## Project Structure

```
she-can-foundation-form/
├── package.json           # Dependencies and scripts
├── server.js             # Express server setup
├── README.md             # This file
└── public/
    ├── index.html        # Main webpage
    ├── styles.css        # Styling and responsive design
    └── script.js         # Frontend logic and validation
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Steps

1. **Navigate to project directory:**
   ```bash
   cd "C:\Users\sharad\Desktop\she can"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## Usage

1. Fill out the contact form with:
   - Full Name (minimum 2 characters)
   - Email Address (valid email format)
   - Message (minimum 10 characters)

2. Click "Submit" button

3. Upon successful submission:
   - A success message appears
   - Form data is sent to the server
   - An option to send another message is provided

## Form Validation

The form includes comprehensive validation:
- **Name:** Required, minimum 2 characters
- **Email:** Required, valid email format
- **Message:** Required, minimum 10 characters

Validation happens:
- Real-time (on blur events)
- On form submission
- With clear error messages

## API Endpoints

### POST /api/submit-form
Submits the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Form submitted successfully!",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here...",
    "timestamp": "2026-05-27T10:56:44.318+05:30"
  }
}
```

**Error Response (400):**
```json
{
  "error": "All fields are required"
}
```

### GET /api/submissions
Retrieves all form submissions (for admin reference).

## Design Highlights

- **Color Scheme:** Elegant red/pink primary color (#d4405b) with clean whites and grays
- **Typography:** Modern sans-serif font (Segoe UI)
- **Layout:** Centered, card-based design with proper spacing
- **Animations:** Subtle fade, slide, and hover effects
- **Accessibility:** Proper labels, focus states, and error messages
- **Responsive:** Mobile-first approach with breakpoints at 768px and 480px

## Technologies Used

**Frontend:**
- HTML5
- CSS3 (with Flexbox, Gradients, Animations)
- Vanilla JavaScript (ES6+)

**Backend:**
- Node.js
- Express.js
- Body Parser
- CORS

## Future Enhancements

- Email notification system
- Database integration (MongoDB/PostgreSQL)
- Admin dashboard to view submissions
- File upload support
- Multi-language support
- Rate limiting
- reCAPTCHA integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

ISC

## Author

Created for She Can Foundation Internship Project

---

**Developed with ❤️ for She Can Foundation**
