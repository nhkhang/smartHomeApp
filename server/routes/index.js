const router = require("express").Router();
const dataRoutes = require("./data.routes");
const AuthController = require('../controller/AuthController')

router.post('/light', dataRoutes.light);
router.post('/lightAlarm', dataRoutes.lightAlarm);
router.post('/gas', dataRoutes.gas);

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

module.exports = router;
