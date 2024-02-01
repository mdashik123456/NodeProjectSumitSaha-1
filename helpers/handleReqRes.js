/*
*
* Title: Handle Request Response
* Description: Handle Request Response
* Author: Md. Ashiqur Rahman
* Date: 30-Jan-2024
*
*/

//dependencies
const url = require("url");
const { StringDecoder } = require('node:string_decoder'); 
const routes =  require("../routes");
const {notFoundHandler} =  require("../handlers/routeHandlers/noteFoundHandler");
const utilities = require('../helpers/utilities');

//module scaffolding  
const handler = {};

handler.handleReqRes = (req, res) => {
    // parse the request URL
    const parsedURL = url.parse(req.url, true); // this  will return an object with various properties like pathname and query
    const path = parsedURL.pathname;
    const trimedPath =  path.replace(/^\/+|\/+$/g, ""); // this will remove '/' from start and end from url pathname
    const method =  req.method.toLowerCase();
    const queryStringParams = parsedURL.query;
    const headersObj = req.headers;

    const requestProperties = { // This  object will hold all the properties of a HTTP request for further use in other modules
        parsedURL,
        path,
        trimedPath,
        method,
        queryStringParams,
        headersObj
    }


    const decoder = new StringDecoder('utf-8'); //  for handling encoding
    let realData = "";

    const chosenHandler = routes[trimedPath] ? routes[trimedPath] : notFoundHandler;

    req.on('data', (chank)=>{
        realData += decoder.write(chank); // string decoding from buffer
    });

    req.on('end', ()=>{
        realData += decoder.end(); // after finishing decoding we must have to end the decoder after real data
        
        // for sending realData to handlers/routeHandlers/handler.js
        requestProperties.body = utilities.parseJSON(realData);

        chosenHandler(requestProperties, (statusCode, payload)=>{
            statusCode = typeof(statusCode) === "number" ? statusCode : 500;
            payload = typeof(payload) === "object" ? payload : {};
    
            payloadString = JSON.stringify(payload);
    
            // Return FInal Response
            res.setHeader('Content-Type', 'Application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
    
        });

        // res.end("Hello world!");
    });
    
}


module.exports = handler;