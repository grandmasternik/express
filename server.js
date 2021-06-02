//variables
const express = require("express");
const app = express();
const port = 3000;


// routes 
// ##name and greeting
app.get(`/greeting/:name`, (req, res) => {
    res.send(`Whats up "" + ${req.params.name}!`)
});

// ##tip route
app.get(`/tip`, (req, res)=>{
    res.send(req.params.tipPercentage)
});


// listener
app.listen(port, () => {
    console.log('Express is listening on port', port)
});
