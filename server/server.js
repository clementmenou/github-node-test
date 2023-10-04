const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    // res.write('<p>Hello, biloute</p>');
    // res.write('<p>Salut, biloute</p>');
    
    // Set up the url
    let path = './';
    switch(req.url){
        case '/': 
            path += 'index.html'; 
            res.statusCode = 200; 
            break;
        case '/about': 
            path += 'about.html'; 
            res.statusCode = 200; 
            break;
        case '/about-me':  
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default: 
            path += '404.html'; 
            res.statusCode = 400; 
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            // res.write(data); // Not necessary, just put "data" in .end()
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('Listerning for requests on port 3000 !');
});