const express = require('express');

const app = express();

// Since these routes are written one-after-another , therefore they will handed in the similar manner.
// Therefore whenever handling wildcard error handler , always keeps it towards the end.
// Try-catch is also the proper method to handle wild - card error handlers

app.use("/" , (err , req , res , next) => {
    if(err){
        res.status(500).send('Something Went Wrong')        
    }
})


app.get("/getUserData" , (req , res) => {

    throw new Error("Random Error");
    res.send("User Data Sent");
    
    
});

app.use("/" , (err , req , res , next) => {
    if(err){
        res.status(500).send('Something Went Wrong')
        
    }
})

app.listen(3000 , () => {
    console.log('SERVER IS LISTENNING ON PORT 3000');
})