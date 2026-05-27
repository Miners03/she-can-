const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Store form submissions (in-memory for demo)
const submissions = [];

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/api/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Store submission
  const submission = {
    id: submissions.length + 1,
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  submissions.push(submission);

  console.log('Form submitted:', submission);

  res.json({
    success: true,
    message: 'Form submitted successfully!',
    data: submission
  });
});

// Get all submissions (optional - for admin view)
app.get('/api/submissions', (req, res) => {
  res.json(submissions);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('She Can Foundation Form Project is active!');
});
