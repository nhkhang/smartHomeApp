const router = require("express").Router();
const dataRoutes = require("./data.routes");

const AuthController = require('../controller/AuthController')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/relay', dataRoutes.relay);
// router.post('/light', dataRoutes.light);
// router.post('/gas', dataRoutes.gas);
// router.post('/temp-humid', dataRoutes.temp_humid);
// router.post('/magnetic', dataRoutes.magnetic);

module.exports = router;
