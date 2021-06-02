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

// ##magic 8 ball
let responses =["It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes definitely",
"You may rely on it", 
"As I see it yes", 
"Most likely", 
"Outlook good","Yes", 
"Signs point to yes", 
"Reply hazy try again", 
"Ask again later",
"Better not tell you now", 
"Cannot predict now", 
"Concentrate and ask again",
"Don't count on it", 
"My reply is no", 
"My sources say no",
"Outlook not so good", 
"Very doubtful"];

let random=Math.floor(Math.random() * response.length);
app.get(`/magic/:question`, (req, res)=>{
    res.send(<h1>${responses[random]}</h1>)
});

// listener
app.listen(port, () => {
    console.log('Express is listening on port', port)
});
