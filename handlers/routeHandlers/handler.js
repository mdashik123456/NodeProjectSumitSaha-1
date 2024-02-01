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
    callback(202,{
        method : requestProperties.method,
    });
}
handler._users.post = (requestProperties, callback) => {
    callback(202,{
        method : requestProperties.method,
    });
    
}
handler._users.put = (requestProperties, callback) => {
    callback(202,{
        method : requestProperties.method,
    });
    
}
handler._users.delete = (requestProperties, callback) => {
    callback(202,{
        method : requestProperties.method,
    });

}

module.exports = handler;