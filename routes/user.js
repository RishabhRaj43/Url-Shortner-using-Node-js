const express = require("express");
const router = express.Router();
const {handleUrl,redirectURL} = require('../controllers/user')
const url = require("../models/user");

router.post('/',handleUrl)

router.get('/:shortid',redirectURL);

module.exports = router;
