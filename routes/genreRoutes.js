var express = require('express');
var router = express.Router();
var genreController = require('../controllers/genreController.js');

/*
 * GET
 */
router.get('/', genreController.list);

/*
 * GET
 */
router.get('/:id', genreController.show);

/*
 * POST
 */
router.post('/', genreController.create);

/*
 * PUT
 */
router.put('/:id', genreController.update);

/*
 * DELETE
 */
router.delete('/:id', genreController.remove);

module.exports = router;
