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
app.get(`/tip/:total/:tipPercentage`, (req, res)=>{
    res.send("Your tip is" + `${req.params.tipPercentage/100}*${req.params.total}`);
});

// listener
app.listen(port, () => {
    console.log('Express is listening on port', port)
});
