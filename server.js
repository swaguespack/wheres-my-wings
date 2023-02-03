
// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req,res) =>{
    console.log("welcome")
    res.send("where's my wings??")
})

app.use(express.static(path.join(__dirname, 'public')));
// // Sets up the routes
// app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
