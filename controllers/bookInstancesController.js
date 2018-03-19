var bookInstancesModel = require('../models/bookInstancesModel.js');

/**
 * bookInstancesController.js
 *
 * @description :: Server-side logic for managing bookInstancess.
 */
module.exports = {

    /**
     * bookInstancesController.list()
     */
    list: function (req, res) {
        bookInstancesModel.find(function (err, bookInstancess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bookInstances.',
                    error: err
                });
            }
            return res.json(bookInstancess);
        });
    },

    /**
     * bookInstancesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        bookInstancesModel.findOne({_id: id}, function (err, bookInstances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bookInstances.',
                    error: err
                });
            }
            if (!bookInstances) {
                return res.status(404).json({
                    message: 'No such bookInstances'
                });
            }
            return res.json(bookInstances);
        });
    },

    /**
     * bookInstancesController.create()
     */
    create: function (req, res) {
        var bookInstances = new bookInstancesModel({
			book : req.body.book,
			imprint : req.body.imprint,
			status : req.body.status,
			due_back : req.body.due_back

        });

        bookInstances.save(function (err, bookInstances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bookInstances',
                    error: err
                });
            }
            return res.status(201).json(bookInstances);
        });
    },

    /**
     * bookInstancesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        bookInstancesModel.findOne({_id: id}, function (err, bookInstances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bookInstances',
                    error: err
                });
            }
            if (!bookInstances) {
                return res.status(404).json({
                    message: 'No such bookInstances'
                });
            }

            bookInstances.book = req.body.book ? req.body.book : bookInstances.book;
			bookInstances.imprint = req.body.imprint ? req.body.imprint : bookInstances.imprint;
			bookInstances.status = req.body.status ? req.body.status : bookInstances.status;
			bookInstances.due_back = req.body.due_back ? req.body.due_back : bookInstances.due_back;
			
            bookInstances.save(function (err, bookInstances) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bookInstances.',
                        error: err
                    });
                }

                return res.json(bookInstances);
            });
        });
    },

    /**
     * bookInstancesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        bookInstancesModel.findByIdAndRemove(id, function (err, bookInstances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bookInstances.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
