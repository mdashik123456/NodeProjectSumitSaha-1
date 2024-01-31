/*
*
* Title: Update monitoring Application
* Description: A RESTful api to monitor up or down times of user define link
* Author: Md. Ashiqur Rahman
* Date: 4-Nov-2023
*
*/

//Dependencies

const { StringDecoder } = require('node:string_decoder');

const decoder = new StringDecoder('utf-8'); //  for handling encoding
let realData = "";

req.on('data', (chank) => {
    realData += decoder.write(chank); // string decoding from buffer
});

req.on('end', () => {
    realData += decoder.end(); // after finishing decoding we must have to end the decoder after real data
    console.log(realData);
    res.end("Hello world!");
});




