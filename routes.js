/*
*
* Title: Routes
* Description: Application Routes
* Author: Md. Ashiqur Rahman
* Date: 31-Jan-2024
*
*/

// Dependencies
const handler = require('./handlers/routeHandlers/handler');

const routes = {
    'sample' : handler.sampleHandler
};

module.exports = routes;