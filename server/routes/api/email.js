// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const express = require('express');

const router = express.Router();

require("dotenv").config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', async (req, res) => {    
    const msg = {
        to: process.env.PROXY_EMAIL,
        from: req.body.senderEmail,
        subject: req.body.subject,
        text: req.body.text,
    };

    sgMail.send(msg);

    res.status(201).send();
});

module.exports = router;