var express = require('express');
var router = express.Router();
var bookInstancesController = require('../controllers/bookInstancesController.js');

/*
 * GET
 */
router.get('/', bookInstancesController.list);

/*
 * GET
 */
router.get('/:id', bookInstancesController.show);

/*
 * POST
 */
router.post('/', bookInstancesController.create);

/*
 * PUT
 */
router.put('/:id', bookInstancesController.update);

/*
 * DELETE
 */
router.delete('/:id', bookInstancesController.remove);

module.exports = router;
