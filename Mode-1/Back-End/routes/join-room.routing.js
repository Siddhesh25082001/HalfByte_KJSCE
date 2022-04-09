const express = require('express');
const router = express.Router();
const joinRoomController = require('../controllers/joinRoom.controller');

router.get('/',joinRoomController.join_room);
router.post('/',joinRoomController.join_room);

module.exports = router;