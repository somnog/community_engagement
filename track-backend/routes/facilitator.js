const express = require('express');
const { get_facilitators, save_facilatitators } = require('../controllers/facilitator');
const router = express.Router();

router.post('/save_facilitators', save_facilatitators);
router.get('/facilitators', get_facilitators); 

module.exports = router;