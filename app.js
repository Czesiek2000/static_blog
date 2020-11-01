const express = require('express');
const path = require('path');
 
const app = new express();

const port = process.env.port || 3000;
 
app.use(express.static('static'));
 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
 
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static/about.html'));
});

app.use(function(req,res){
    res.status(404).sendFile(path.resolve(__dirname, '404.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});