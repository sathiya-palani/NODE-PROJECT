//1. import express module
const express = require ('express');


// 2. Create a express application
 const app = express();

 //4. Create a route
 app.get ('/', (request, response) =>{
    response.send('Hello sathiya');
 });

 //3. Run the server
 app.listen(3001,() => {
    console.log('server is running on http://localhost:3001');
 });