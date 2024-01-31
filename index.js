/*
*
* Title: Update monitoring Application
* Description: A RESTful api to monitor up or down times of user define link
* Author: Md. Ashiqur Rahman
* Date: 4-Nov-2023
*
*/

//Dependencies
const http = require("http");
const {handleReqRes} = require('./helpers/handleReqRes.js');

//App object - module scaffolding
const app = {};

// configuration
app.config = {
    PORT: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    
    server.listen(app.config.PORT, () => {
        console.log(`Listening on port ${app.config.PORT}`);
        console.log(`Address is: http://localhost:${app.config.PORT}`);
    });
}

// Handle Request Response
app.handleReqRes = handleReqRes;

//start server
app.createServer();

