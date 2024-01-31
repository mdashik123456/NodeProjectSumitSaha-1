/*
*
* Title: library data
* Description: data related works
* Author: Md. Ashiqur Rahman
* Date: 31-Jan-2024
*
*/

// Dependencies
const  fs = require('fs');
const path = require('path');

//module scaffolding
const lib = {};

// Base direcory of the data folder 
lib.baseDir = path.join(__dirname, '../.data/');

//write data to file
lib.createDataFile = (dir, fileName, data, callback) => {
    //open file for writting 
    fs.open(lib.baseDir + dir + '/' + fileName + '.json', 'wx', (err, fileDescriptor)=>{
        if(fileDescriptor && !err){
            //convert data to string  and write it into the file
            const stringData  = JSON.stringify(data);

            // write data to file and close it
            fs.writeFile(fileDescriptor, stringData, (err, fileDescriptor)=>{
                if(!err){
                    fs.close(fileDescriptor, (err)=>{
                        if(!err){
                            callback("Success");
                        }else{
                            callback(err);
                        }
                    });
                } else {
                    callback(err);
                }
            });
        } else{
            callback(err);
        }

    });
};


module.exports = lib;