var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
	res.status(200).json([{
	id: 1,
	username: "Dr. Strangelove"
    }, {
	id: 2,
	username: "Dr. Zhivago"		 
    }]);
});

module.exports = router;
