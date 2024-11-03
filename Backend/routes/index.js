const express = require('express');
const router = express.Router();
const path = require('path');

// Home route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/HTML/index.html'));
});

module.exports = router;
