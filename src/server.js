const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = 5000; // You can change this port if needed

const db = new sqlite3.Database('./data.db'); // Create or use your SQLite database file

app.use(cors());

app.get('/data', (req, res) => {
  db.all('SELECT * FROM persons', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
