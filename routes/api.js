var express = require('express');
var router = express.Router();
const {body, validationResult} = require('express-validator');
const sendEmail = require('../services/email_service');

/* GET home page. */
router.post('/', 
body('username').not().isEmpty().trim().escape().isAlpha().withMessage('Name should contain letters only'),
body('email').isEmail().withMessage('Email is not valid').normalizeEmail(),
body('message').not().isEmpty().withMessage('message is empty').trim().escape(),
function(req, res) {

    // validate and sanitize form data
    const errors = validationResult(req);
    if(!errors.isEmpty()){

        // report any errors
        return res.status(400).json({errors: errors.array()})
    }
    // if form is valid
    // send back thank you message
    else res.send("Thank you! Your message is received.");

    // send an email to my self
    sendEmail(
        req.body.username,
        req.body.email,
        req.body.message,
    )
});

module.exports = router;