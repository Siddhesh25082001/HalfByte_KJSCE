const express = require('express');
const router = express.Router();
const createRoomController = require('../controllers/createRoom.controller');

router.get('/',createRoomController.create_room);

module.exports = router;