const router = require("express").Router();
const dataRoutes = require("./data.routes");

router.post('/light', dataRoutes.light);

module.exports = router;