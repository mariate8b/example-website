const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/api/messages', (req, res) => {
    const { name, email, message, date } = req.body;
    console.log('New Message:', { name, email, message, date });
    res.status(201).send({ success: true, message: 'Message sent successfully!' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
