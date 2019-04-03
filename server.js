const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000
// Use static web 
app.use(express.static( __dirname + '/public'))

// Partials
hbs.registerPartials(__dirname + '/views/partials');
// Express HBS Engine
app.set('view engine', 'hbs');
// HBS Helpers
// hbs.registerHelper('getYear', () => {
//   return new Date().getFullYear() 
// })

// hbs.registerHelper('capitalize', (text) => {
//   let words = text.split(' ');
//   words.forEach((word, idx) => {
//     words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   });
//   return words.join(' ');
// })

// Render views and send variables to template
app.get('/', (req, res) => {
  res.render('home', {
    name: 'Mikee'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Routes
// app.get('/', (req, res) => {
//   const salida = {
//     nombre: 'Mikee Rmz',
//     apellido: 'Ramirez',
//     edad: 29
//   }
//   res.status(200).send(salida)
// });

// Start server in port 
app.listen(port, () => {
  console.log(`Listen in ${port}`);
});
