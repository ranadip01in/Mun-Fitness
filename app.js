const express = require("express");
const path = require('path');
const fs = require("fs");
const app = express();
const port = 80;

// Express specific staff
app.use('/static',express.static('static')); // for serving static file
app.use(express.urlencoded());

//PUG related staff
app.set('view engine','pug');//set the template engine as pug
app.set('views', path.join(__dirname,'views'));//set the views directiory

//our pug demo end-point
// app.get("/demo",(req, res)=>{
//     res.status(200).render('demo', { title: 'Hey Ranadip', message: 'Hello there!' });
// });
app.get("/",(req, res)=>{
    const params = {title:'Pug is the best',content:'This is best content'};
    res.status(200).render('index.pug',params);
});

// app.get("/",(req,res)=>{
//     res.send("This is home page of my first express app");

// });

// app.get("/about",(req,res)=>{
//     res.send("This is about page of my first express app");

// });

// app.get("/Contact",(req,res)=>{
//     res.send("This is contact page of my first express app");

// });

// app.get("/Service",(req,res)=>{
//     res.send("This is service page of my first express app");

// });
app.post("/",(req,res)=>{
    // console.log(req.body);
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name},${age} Years old,${gender},Lives in ${address},and ${more}`;
    fs.writeFileSync('output.txt',outputToWrite);
    const params = {MESSAGE:'Your form has been submit successfully',content:''};
    res.status(200).render('index.pug',params);
});

//Start the Server
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);

})