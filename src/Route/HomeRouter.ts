import { HomeController } from "../Controller/HomeController";

const express = require('express');
const router = express.Router();

// home route
router.get('/', HomeController.index);

module.exports = router;
