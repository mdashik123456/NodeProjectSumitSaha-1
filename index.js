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
const environments = require('./helpers/environments.js');
const data = require('./lib/data');

//App object - module scaffolding
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    
    server.listen(environments.PORT, () => {
        console.log(`Listening on port ${environments.PORT}`);
        console.log(`Address is: http://localhost:${environments.PORT}`);
    });
}

// Handle Request Response
app.handleReqRes = handleReqRes;

//start server
app.createServer();

