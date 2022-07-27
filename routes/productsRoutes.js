const express = require('express');
const router = express.Router()
const { createValidator } = require('express-joi-validation')
const validator = createValidator({});
const { tshirtBySizeQuerySchema, tshirtQuerySchema } = require('../middleware/validators/tshirtValidator');
const controller = require('../controllers/tshirtController');


router.get('/tshirt', validator.query(tshirtQuerySchema), controller.getTshirt);
router.get('/tshirt/by-size', validator.query(tshirtBySizeQuerySchema), controller.getTshirtBySize);



module.exports = router