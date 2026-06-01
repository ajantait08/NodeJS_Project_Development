// info --> here "require" means importing express from the node_modules
const express = require('express');

// info --> creating an instance of the express application

const app = express();

// info --> Here the below function is known as request handler function.
// info --> Although the below function is a request handler function but it will take a route , "/test" in this case
app.use('/',(req , res) => {
    
    res.send("Hello from the servers Anjani!");
});

// ** Here in app.listen we provide the PORT no. along with the callback function to indicate that the server is UP and Running....
app.listen(3000, () => {
    console.log("Hello from the server !");
});








// ? What is Node Modules ? and What is the Use of Package-lock.json file ?

// ! On doing npm install express js , we downloaded all the modules and files of express js and stored them in our node modules folder.
// ! Dependency means any package on which our project is dependent on.
// ! meaning of the "^" caret symbol - autoupgrade not exact version , exact version is mentioned in package-lock.json file.

// ---- package-lock.json file ---- //
// ! Package of the package-lock.json -> package-lock.json contains the exact version of the package that is installed in our projects. 
// ! It also maintains the dependency tree of the different packages which are installed in our project. It helps to ensure that the same version of the package is installed in all the environments 
// ! where the project is deployed. It also helps to prevent version conflict errors.

//---- Nodemon Package-----//
// In order to stop the server from being starting and stopping again and again after making the code changes nodemon is being used.
// We will be required to install nodemon globally //
// Nodemon will automatically refresh the server , whenever any changes will be made to the code.

