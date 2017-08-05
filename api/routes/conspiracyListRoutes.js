'use strict';
module.exports = function(app) {
    var conspiracyList = require('../controllers/conspiracyListController');

    // conspiracyList Routes
    app.route('/conspiracies')
        .get(conspiracyList.list_all_conspiracies)
        .post(conspiracyList.create_a_conspiracy);

    app.route('/conspiracy/:conspiracyId')
        .get(conspiracyList.read_a_conspiracy)
        .put(conspiracyList.update_a_conspiracy)
        .delete(conspiracyList.delete_a_conspiracy);
}