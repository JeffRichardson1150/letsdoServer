require('dotenv').config(); // get variables from the .env file
let PORT = process.env.PORT; // Option A define PORT here

// express stuff
const express = require('express'); // importing express
const app = express(); // invoking/creating the express application

// db import & sync
const sequelize = require('./db');
sequelize.sync(); // tip: pass in {force: true} for resetting tables
app.use(express.json());

// controller imports
const jar = require('./controllers/jarcontroller'); 
const user = require('./controllers/usercontroller');
// ** const workout = require('./controllers/workoutcontroller'); // Leave commented out

// middleware
app.use(require('./middleware/headers'));

// routes
// console.log('**************************** user route in app.js **********************************')
app.use('/api', user);   
// app.use for validate-session must come after app.use('/api', user);  Why is that?
// console.log('**************************** jar route in app.js **********************************')
app.use('/api', jar);
app.use(require('./middleware/validate-session'))


// app.listen(3000, () => console.log('Log app is listening on 3000'));
app.listen(process.env.PORT, () => console.log(`********** Jar server app is listening on ${process.env.PORT} ****************************8`)); // use the .env variable

