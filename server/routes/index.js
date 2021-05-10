const router = require("express").Router();
const dataRoutes = require("./data.routes");


router.get('/test', dataRoutes.test);

module.exports = router;
