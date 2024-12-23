const express = require('express');
const { get_tracks, create_track, get_track } = require('../controllers/track');
const router = express.Router();

router.post('/save_track', create_track);
router.get('/tracks', get_tracks); 
router.get('/track/:id', get_track);


module.exports = router;