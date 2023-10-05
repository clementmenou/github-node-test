const express = require('express');

// express app
const app = express();

// listen for requests
// The code is read up to down, if a get correspond, it sendfile
// "use" correspond to every url left
app.listen(3000);
app.get('/', (req, res) => {
    res.sendFile('./server/index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./server/about.html', { root: __dirname});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res.sendFile('./server/404.html', { root: __dirname });
});