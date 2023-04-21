import { HomeController } from "../controller/HomeController";

const express = require('express');
const router = express.Router();

// home route
router.get('/', HomeController.index);

module.exports = router;
