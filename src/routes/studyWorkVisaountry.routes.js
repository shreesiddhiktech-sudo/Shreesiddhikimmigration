const express = require('express');
const { studyVisaCountry } = require('../controllers/studyVisaCountry.controller');
const { workVisacounry } = require('../controllers/workVisa.controller');

 const router = express.Router();

router.get('/study-visa-countries', studyVisaCountry);
router.get('/work-visa-countries', workVisacounry);

module.exports = router;