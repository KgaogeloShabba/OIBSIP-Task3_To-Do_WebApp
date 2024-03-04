const express = require('express');
const path = require('path');
const app = express();
const port = 2000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define route handler for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'to-do_page.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
