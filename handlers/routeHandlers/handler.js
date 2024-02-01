/*
*
* Title: Sample Handler
* Description: Sample Handler
* Author: Md. Ashiqur Rahman
* Date: 31-Jan-2023
*
*/

//Dependencies
const data = require('../../lib/data');

// Module Scaffolding  
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    // console.log(requestProperties);
    callback(200, {
        msg: "This is message from Sample Handler"
    });
};

handler.userHandler = (requestProperties, callback) => {
    // console.log(requestProperties);
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) + 1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(404);
    }
};

// create another scaffolding to manage methods work
handler._users = {};

handler._users.get = (requestProperties, callback) => {
    const firstName = typeof (requestProperties.body.firstName) === "string" && requestProperties.body.firstName.trim().length > 0 ? requestProperties.body.firstName.trim() : null;
    const lastName = typeof (requestProperties.body.lastName) === "string" && requestProperties.body.lastName.trim().length > 0 ? requestProperties.body.lastName.trim() : null;
    const password = typeof (requestProperties.body.password) === "string" && requestProperties.body.password.trim().length > 0 ? requestProperties.body.password.trim() : null;
    const phone = typeof (requestProperties.body.phone) === "string" && requestProperties.body.phone.trim().length > 11 ? requestProperties.body.phone.trim() : null;
    const tosAgreement = typeof (requestProperties.body.tosAgreement) === "boolean" && requestProperties.body.tosAgreement.trim().length > 0 ? requestProperties.body.tosAgreement.trim() : null;

    if(firstName && lastName && phone && tosAgreement){
        // check if user is already exist or not
        data.readFile('users', phone,  (err, result) =>{
            if(err){

            }else{
                callback(500, {error: 'Server Error'});
            }
        });
        
    }else{
        callback(400, {"Error": "Sorry ! All fields are required."});
    }
}
handler._users.post = (requestProperties, callback) => {

}
handler._users.put = (requestProperties, callback) => {

}
handler._users.delete = (requestProperties, callback) => {

}

module.exports = handler;