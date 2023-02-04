
// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;


// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('home');
});


// app.get("/", (req,res) =>{
//     console.log("welcome")
//     res.send("where's my wings??")
// })


// middle ware 
app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
// app.use(require(''));


// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});


