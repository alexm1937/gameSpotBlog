
const router = require('express').Router();
const apiRoutes = require('./api');



//any other request catch
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;