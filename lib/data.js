/*
*
* Title: library data
* Description: data related works
* Author: Md. Ashiqur Rahman
* Date: 31-Jan-2024
*
*/

// Dependencies
const fs = require('fs');
const path = require('path');

//module scaffolding
const lib = {};

// Base direcory of the data folder 
lib.baseDir = path.join(__dirname, '../data/');

//write data to file
lib.createDataFile = (dir, fileName, data, callback) => {
    //open file for writting 
    fs.open(`${lib.baseDir}/${dir}/${fileName}.json`, 'wx', (err1, fileDescriptor) => {
        if (fileDescriptor && !err1) {
            //convert data to string  and write it into the file
            const stringData = JSON.stringify(data);

            // write data to file and close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback("Success");
                        } else {
                            callback(err3);
                        }
                    });
                } else {
                    callback(err2);
                }
            });
        } else {
            callback(err1);
        }

    });
};


// read data from file
lib.readFile = (dir, fileName, callback) => {
    fs.readFile(`${lib.baseDir}/${dir}/${fileName}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};



//Update existing file
lib.updateFile = (dir, fileName, data, callback) => {
    // open existing file and write new data in it
    fs.open(`${lib.baseDir}/${dir}/${fileName}.json`, 'r+', (err1, fileDescriptor) => {
        if (!err1 && fileDescriptor) {
            // Convert data to string
            const stringData = JSON.stringify(data);
            fs.ftruncate(fileDescriptor, (err2) => {
                if (!err2) {
                    // Write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err3) => {
                        if (!err3) {
                            fs.close(fileDescriptor, (err4) => {
                                if (!err4) {
                                    callback(false);
                                } else {
                                    callback(err4);
                                }
                            });
                        } else {
                            callback(err3);
                        }
                    });
                } else {
                    callback(err2);
                }
            });
        } else {
            callback(err1);
        }
    });
};


//Delete Existing FIle
lib.deleteFile = (dir, fileName, callback) => {
    fs.unlink(`${lib.baseDir}/${dir}/${fileName}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            callback(err);
        }
    });
};

module.exports = lib;