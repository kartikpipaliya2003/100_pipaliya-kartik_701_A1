const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/gethello', (req, res) => {
    res.send("this is the home page data")});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });