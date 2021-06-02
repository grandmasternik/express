//variables
const express = require("express");
const app = express();
const port = 3000;


// routes
app.get(`/greeting/:name`, (req, res) => {
    res.send(`Whats up "" + ${req.params.name}!`)
});

// listener
app.listen(port, () => {
    console.log('Express is listening on port', port)
});
