import { HomeController } from "../controller/home-controller";

const express = require('express');
const router = express.Router();

// home route
router.get('/', HomeController.index);

module.exports = router;
