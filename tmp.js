/*
*
* Title: Update monitoring Application
* Description: A RESTful api to monitor up or down times of user define link
* Author: Md. Ashiqur Rahman
* Date: 4-Nov-2023
*
*/

//Dependencies

const fs = require('fs');

fs.truncate('tmp.txt', 9, ()=>{
    console.log("File tmp.txt is cleared");
});



