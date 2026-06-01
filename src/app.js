// info --> here "require" means importing express from the node_modules
const express = require('express');

// info --> creating an instance of the express application

const app = express();

// info --> This will only handle get calls to '/users'
app.get('/user',(req,res) => {
    res.send({firstname : 'Ajanta' , lastname : "Ghosh"});
});

app.post('/user',(req , res) => {
    res.send("Data successfully saved in the database");
});

app.delete('/user' , (req , res)=>{
  res.send('User Successfully Deleted !');
});


app.listen(3000, () => {
    console.log("Hello from the server !");
});




















// ---- Initial Route Setup -----//

// info --> Here the below function is known as request handler function.
// info --> Although the below function is a request handler function but it will take a route , "/test" in this case

// info --> Because of "/" in below route as long as any route will have "/" it will be redirected to first route where "/" path is mentioned. 

// info --> This will handle all http calls to '/users'

// app.use('/hello/2', (req , res) => {
//    res.send('Testing the route hello-2');
// });

// app.use('/hello' , (req , res) => {
//     res.send('Testing the route hello');
// })

// ** Here the order of the routes is important

// ** Because as soon as the browser comes to the below route , it starts matching the exact route from TOP - BOTTOM order , Here whenever it finds the wildcard '/' in path i.e ('% / %') and it find the match, its loads the default route
// app.use('/',(req , res) => {    
//     res.send("Hello from the servers Anjani!");
// });

// app.use('/test' , (req, res) => {
//     res.send("Sending Hello from Test");
// });

// app.use('/123', (req, res) => {
//     res.send('Sending Hello from 123');
// })

// ---- Initial Route Setup -----//

// ** Here in app.listen we provide the PORT no. along with the callback function to indicate that the server is UP and Running....


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

