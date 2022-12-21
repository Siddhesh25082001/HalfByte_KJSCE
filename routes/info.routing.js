const express = require('express');
const router = express.Router();
const infoController = require('../controllers/info.controller');

router.get('/:roomId',infoController.render_info);
router.post('/:roomId',infoController.handle_form_data);

module.exports = router;