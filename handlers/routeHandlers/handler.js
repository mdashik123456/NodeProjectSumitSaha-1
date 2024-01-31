/*
*
* Title: Sample Handler
* Description: Sample Handler
* Author: Md. Ashiqur Rahman
* Date: 31-Jan-2023
*
*/  

// Module Scaffolding  
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        msg : "This is message from Sample Handler"
    });
};

module.exports = handler;