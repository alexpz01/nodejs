var express = require("express")
var controller = require("../controllers/project")

var router = express.Router();

router.get('/home', controller.home)
router.get('/test', controller.test)
router.get('/save', controller.saveProject)

module.exports = router;