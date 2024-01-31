/*
*
* Title: Environments
* Description: Handle all environtment related things
* Author: Md. Ashiqur Rahman
* Date: 31-jan-2024
*
*/  

// dependencies 

//module scaffolding
const environtments = {};

environtments.staging = {
    PORT : 3000,
    envName : 'staging',
};

environtments.production = {
    PORT : 2000,
    envName : 'production',
};

// determine which environment is passed
const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport = typeof(environtments[currentEnv]) === 'object' ? environtments[currentEnv] : environtments.staging;

module.exports = environmentToExport;