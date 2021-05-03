require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/view'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const contacts = require('./routes/contacts');
app.use('/contacts', contacts);

app.use((req, res)=>{
    res.status(404).render('404.ejs');
});

app.listen(port, () => {
    console.log('================================');
    console.log(`Server running on port ${port}...`);
    console.log('================================');
});