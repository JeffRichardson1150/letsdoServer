const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Jar = require('../db').import('../models/jar'); // if can access db, then import the model

console.log("****************** In jarcontroller *******************")
/*
Endpoint        Verb	Description
/api/jar/	    POST	Allows users to store an event in their jar with descriptions, definitions, results, and owner properties.
/api/jar/	    GET	    Gets all jar events for an individual user.
/api/jar/:id	GET	    Gets individual jar events by id for an individual user.
/api/jar/:id	PUT	    Allows individual jar events to be updated by a user.
/api/jar/:id	DELETE	Allows individual jar events to be deleted by a user.
*/

/************************
 * jarcontroller gets called by app.js for endpoint /api/jar
 */

/**********************
 * Post an event to the user's jar
 */
router.post('/jar', (req, res) => {
    console.log("************************You're in jarcontroller  router.post  /jar route **********")

    const logFromRequest = {
        userName: req.body.userName,
        category: req.body.category,
        deleteBox: req.body.deleteBox,
        eventURL: req.body.eventURL,
        eventImage: req.body.eventImage,
        title: req.body.title,
        date: req.body.date,
        day: req.body.day,
        time: req.body.time,
        venueName: req.body.venueName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    }

    console.log(`********************* This is req from jarcontroller ${req}  ***********************`);

    Jar.create(logFromRequest)
        .then(log => res.status(200).json(log))
        .catch(err => res.json({
            error: err
        }))
})

/*******************************
 * Get all events from the jar  
 * ****!!!!  Need to put in logic to get only for the current user !!!*****
 */
router.get('/jar', (req, res) =>{
    console.log("************************You're in jarcontroller  router.get  /jar route **********")
    Jar.findAll()
        .then(log => {
            res.status(200).json(log)
            console.log(`**********  from jarcontroller --- status 200 ${log}`)
        })
        .catch(err => res.status(500).json({
            error: err
        }))
});

/*****************
 * Get a single requested event from the jar
 */
router.get('/jar/:id', (req, res) => { // can put the search string at the end of the URL
    console.log("************************You're in jarcontroller  router.get  /jar/:id route **********")
    Jar.findOne({ // find first instance of ...
            where: {
                id: req.params.id
            }
        })
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({
            error: err
        }))
})

/**********************************************
changing
If specify the id of a log, update that log using the contents of body
********************************************* */
router.put('/jar/:id', (req, res) => { 
    console.log("At the router.put, req.params =", req.params)
    console.log("You're ready to Jar.update for id", req.params.id)
    console.log("req.body = ",req.body)
    Jar.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(log => console.log(`SUCCESS *** ${res.status(200).json(log)}`))
        .catch(err => console.log(`FAILURE...BOO ${res.status(500).json({
            error: err
        })}`))

        // .catch(err => console.log(`FAILURE...BOOOO ${res.json(req.errors)}`))
})

/********************************************** 
Delete
specify the id of the record to delete at the end of the URL
********************************************* */
router.delete('/jar/:id', (req, res) => {
    Jar.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json(log))
    .catch(err => res.json({
        error: err
    }))
})


module.exports = router;