const express = require('express');
const app = express();

const port = 3000;


app.get("/greeting", (req, res)=>{
    console.log(req.params.greeting)
    res.send("Hello, stranger")
    res.send(plants[req.params.indexOfPlantsArray])
});

app.get(/:name, (req, res)=>{
    res.send(req.params.name)
    console.log(`What's up + ${name}`)
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});