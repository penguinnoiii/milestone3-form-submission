import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const filePath = './db.json';

app.use(bodyParser.json()); // To parse incoming JSON data

// Route to handle form data submission
app.post('http://localhost:3000/users', (req, res) => {
  const userData = req.body;

  // Read the existing data in the JSON file (if any)
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') { // Check if the file doesn't exist
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    let jsonData = {};
    
    // Parse the existing data, or start with an empty object if the file is empty
    if (data) {
      jsonData = JSON.parse(data);
    }
    
    // Add new user data to the JSON
    jsonData.users = jsonData.users || []; // Ensure `users` array exists
    jsonData.users.push(userData);

    // Write the updated data back to the file
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).send('Error writing to file');
      }
      res.json({ message: 'Data successfully saved!' });
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
