var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json([{
	id: 1,
	firstname: "General",
	lastname: "George",
	email: "ggeorge@usamil.gov"
    }, {
	id: 2,
	firstname: "Monkeyman",
	lastname: "McMonkey",
	email: "somewhere@foo.com"
    }]);
});

module.exports = router;
