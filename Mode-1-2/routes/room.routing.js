const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller');

//router.get('/:roomId',roomController.room);
router.get('/mode-1/:roomId',roomController.room_mode_1);
router.get('/mode-2/:roomId',roomController.room_mode_2);
router.get('/mode-3/:roomId',roomController.room_mode_3);
router.get('/mode-4/:roomId',roomController.room_mode_4);

module.exports = router;

