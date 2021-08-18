// Setup empty JS object to act as endpoint for all routes
var lol = {};
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

//const port = 8000;
const port = process.env.PORT || 80

const server = app.listen(port, listening);
function listening(){
    console.log("server running"); 
    console.log('running on localhost: '+port);
}


  //Get Data
app.post('/test', function (request, response) {
    //console.log(request.body);
    if(request.body.pass){
    lol = request.body;
  };
  response.send({"lol":request.body});

  });

    //Get Data
app.get('/', function (request, response) {
    //console.log(lol);
  
    response.send(lol);
  });