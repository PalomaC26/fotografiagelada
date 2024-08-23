const express = require('express');
const router = express.Router();
const usuáriosController = require('../controllers/usuáriosController');

router.get('/', usuáriosController.getAllUsuários);