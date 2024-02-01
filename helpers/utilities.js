/*
*
* Title: Utilities
* Description: important utility function
* Author: Md. Ashiqur Rahman
* Date: 2-Feb-2024
*
*/

//dependencies

//module scaffolding  
const utilities = {};

utilities.parseJSON =  (data) => {
    try{
        let parsedData = JSON.parse(data);
        return parsedData;
    }catch(error){
        console.log(`Error parsing data: ${error}`);
        return {};
    }
};

module.exports = utilities;