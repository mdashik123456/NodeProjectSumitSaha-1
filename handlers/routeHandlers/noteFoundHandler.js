/*
*
* Title: Not Found Handler
* Description: 404 Notfound Handler
* Author: Md. Ashiqur Rahman
* Date: 31-Jan-2024
*
*/

// Module Scaffolding  
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(404, {
        msg : "404 Not Found!"
    });
};

module.exports = handler;