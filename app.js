const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF:

app.use('/static', express.static('static'))  //Serving of static files
app.use(express.urlencoded())  //this is the middleware which helps us to bring the data to express.

//PUG SPECIFIC STUFF:
app.set('view engine', 'pug')   //to set the template engine as PUG:
app.set('views', path.join(__dirname, 'views'))   //Set the 'views' directory:


//END POINTS:
app.get('/', (req, res) => {
    const params= { }
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res) => {
    const params= { }
    res.status(200).render('contact.pug', params);
})

app.get('/about', (req, res) => {
    const params= { }
    res.status(200).render('about.pug', params);
})

app.get('/services', (req, res) => {
    const params= { }
    res.status(200).render('services.pug', params);
})

//START THE SERVER:
app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});