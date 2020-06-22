const express = require('express');
const router = express.Router();

const csv_trasformer = require('../controllers/csv-transformer');

router.get('/transform', csv_trasformer.transform);

module.exports = router;