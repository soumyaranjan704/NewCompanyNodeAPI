const express = require('express')// Express module just as you require other modules and puts it in a variable. var app = express(); => Calls the express function "express()" and puts new Express application inside the app variable (to start a new Express application)
const app = express();//create instance of express
const port = 8080 // server will run on this port (You can change the port number )
//NB: same port number you can't run different node project at the same time. 


const cors = require('cors');

app.use(express.json()) 

// CORS is enabled for the selected origins
let corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:4201']
};

app.use(cors({
    origin: '*'   //The Asterisk symbol will create the CORS header, and any origin can, therefore, get the response of this localhost server.
}));



// If you just want to allow a particular origin to access your site, then corsOptions will be as follows:

// let corsOptions = {
//     origin: 'http://localhost:5500'
//};


// Using cors as a middleware
app.get('/gfg-articles', cors(corsOptions),
    (req, res) => res.json('gfg-articles'))

//****************GET****************** */

  
  app.post("/signup", cors(corsOptions), function (req, res) {

    console.log(req.body);
  
    res.send("You have signed up successfully. Thank you!");
  });

  app.post("/contact", cors(corsOptions), function (req, res) {

    console.log(req.body);
  
    res.send("Recieved your Token. Thank you!");
  });



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

