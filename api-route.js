// Initialize the express router
let router = require('express').Router();

//set default Route
router.get('/', (req,res)=> {
    res.json({
        status: "API is Working",
        message: "Welcome to Contacts API"
    });
});

// Import contact Controller
var contactController = require("./contactController");

// Contact Routes
router.route('/contacts').get(contactController.index).post(contactController.new);

router.route('/contacts/:contact_id').get(contactController.view).patch(contactController.update).put(contactController.update).delete(contactController.delete);

module.exports = router;
