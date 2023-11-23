/*
*
* Title: Update monitoring Application
* Description: A RESTful api to monitor up or down times of user define link
* Author: Md. Ashiqur Rahman
* Date: 4-Nov-2023
*
*/  

//Dependencies
const http =  require("http");
const url = require("url");

//App object - module scaffolding
const app = {};

// configuration
app.config = {
    PORT: 3000
};

// create server
app.createServer = ()=>{
    const server = http.createServer(app.router);
    server.listen(app.config.PORT, () => {
        console.log(`Listening on port ${app.config.PORT}`);
        console.log(`Address is: http://localhost:${app.config.PORT}`);
    });
}

// router
app.router = (req, res)=>{
    //request handling
    // get url and parse it
    const parserURL = url.parse(req.url, true);
    console.log(parserURL);
    // const path = parserURL.pathname;
    // const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // const method = req.method.toLowerCase();
    // const queryStringObj = parserURL.query();
    // console.log(queryStringObj);
    // const headersObj = req.headers;
    // Response handling
    res.end("Hello world!");   
}

//start server
app.createServer();

