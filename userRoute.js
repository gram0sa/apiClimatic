var express = require('express');
var router = express.Router();
 
router.use(express.static('public'));
router.get('/HomePage', (req,res) => {
    res.sendFile(__dirname+'/pages/homePage.html');
})

module.exports = router;
