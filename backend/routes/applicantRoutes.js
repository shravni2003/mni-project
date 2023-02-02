const express = require('express');
const router = express.Router();
const {createTranscript} = require('../controllers/applicantController');
router.route('/createtranscript').post(createTranscript);

module.exports = router;