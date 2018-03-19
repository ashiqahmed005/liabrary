var genreModel = require('../models/genreModel.js');

/**
 * genreController.js
 *
 * @description :: Server-side logic for managing genres.
 */
module.exports = {

    /**
     * genreController.list()
     */
    list: function (req, res) {
        genreModel.find(function (err, genres) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting genre.',
                    error: err
                });
            }
            return res.json(genres);
        });
    },

    /**
     * genreController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        genreModel.findOne({_id: id}, function (err, genre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting genre.',
                    error: err
                });
            }
            if (!genre) {
                return res.status(404).json({
                    message: 'No such genre'
                });
            }
            return res.json(genre);
        });
    },

    /**
     * genreController.create()
     */
    create: function (req, res) {
        var genre = new genreModel({
			name : req.body.name,
			url : req.body.url

        });

        genre.save(function (err, genre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating genre',
                    error: err
                });
            }
            return res.status(201).json(genre);
        });
    },

    /**
     * genreController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        genreModel.findOne({_id: id}, function (err, genre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting genre',
                    error: err
                });
            }
            if (!genre) {
                return res.status(404).json({
                    message: 'No such genre'
                });
            }

            genre.name = req.body.name ? req.body.name : genre.name;
			genre.url = req.body.url ? req.body.url : genre.url;
			
            genre.save(function (err, genre) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating genre.',
                        error: err
                    });
                }

                return res.json(genre);
            });
        });
    },

    /**
     * genreController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        genreModel.findByIdAndRemove(id, function (err, genre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the genre.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
