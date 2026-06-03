const express = require('express');

const app = express();

const {adminAuth, userAuth} = require('./middlewares/auth.js');

// Generally Middlewares are written using "app.use" since we want the middlewares to work for all Http Methods , (PUT , PATCH , GET, POST , DELETE) , All the admin routes for "/admin" , will go to "app.use("/admin")"
// if we write app.use and put it on the top.
// There is one difference between app.use and app.all
// Since here app.all matches the exact route i.e if there is route request for "/admin" then it will only go to "/admin" and not "/admin123" which is exactly what app.use does.


app.use("/admin",adminAuth);


// If there is a single route then check the Authentication and send the data back then we can write auth middleware checks in the pattern as provided below.

// Here for accessing the user login we do not require auth and hence the AuthUser Middleware is not called here. 
app.use("/user/login", (req , res , next) => { 
    res.send('User Login Page');
});

// Here for fetching user data we do require auth 
app.use("/user/data", userAuth , (req , res , next) => { 
    res.send('Get User Data');
});

app.get("/admin/getAllData" , (req , res , next) => {
    // Check if the request is authorized
    // If the request is not authorized then send and error
        res.send('Send All Data');
});

app.get("/admin/deleteData" , (req , res , next) => {
    // Check if the request is authorized
    // If the request is not authorized then send and error
    res.send('Deleted a User');
})


app.listen(3000 , () => {
    console.log('Server is listening on PORT:3000');
})








// ----- Basics of middleware route request handlers

// ! info --> next() is used to move to the next middleware function in the stack. If you don't call next(), the request will be left hanging and the server will not respond to the client.
// ! info --> Here , "(req , res , next) => {
// !   console.log('1st Route');
// !   next();
// !}" -- is known as the request handler function or middleware function. It takes three parameters: req (the request object), res (the response object), and next (a function that you call to pass control to the next middleware function).


// ----- Below is one way of representing middleware route request handlers
// ----- Here below , we can all show Request Handlers in a Group of arrays that is group all Route Handlers in an array , or grouping two or three route handlers in an array.


// app.use('/user' ,[
//  (req , res , next) => {
//    console.log('1st Route');
//    //res.send('Sending a Response in the starting');
//    next();
// }, (req , res , next) => {
//    console.log('2nd Route');
//    res.send('Sending a Response in the 2nd Iteration..');
//    next();
// }, (req , res , next) => {
//     console.log('3rd Route');
// }, (req , res next) => {
//    console.log('4th Route');    
// }, (req , res next) => {
//    console.log('5th Route');
// }]
//);

// app.listen(3000,() => {
//     console.log('Server is listening on PORT:3000');
// })


// ------ MIDDLEWARE -------------------//

// GET /users => If we are having any matching route to '/users' , then it will go through all the
// routes of the request handlers or middleware to reach to the required route and send the exact response.
// So here if we provide "/" then it will handle all the routes being it "/"

// Here By Default only the first route will be called.
// Lets check the response of what will be the output if we donot do "res.send" and instead send it to the next route.
// GET /users => It checks all the app.xxx("matching route") functions and will provide the required response.
// So , all of the routes through which a particular request goes through is known as the middleware.

// GET /users => middleware chain => request handler
// So here our function goes through the middleware chain to finally reach the exact request handler which sends the response.


// app.use('/',(req , res , next) => {
//     //res.send("Handling / route");
//     next(); // ! ==> Middleware
// });

// app.use('/user' , (req , res , next) => {
//     console.log('1st Response');
//     next(); // ! ==> Middleware
// });

// app.get('/user' , (req , res , next) => {
//     console.log('2nd Response');
//     res.send('Response is being send from 2nd Route!'); // ! ==> Request Handlers
//     //next();
//});