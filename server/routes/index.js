const router = require("express").Router();
const dataRoutes = require("./data.routes");
const autthRoutes = require("./auth.routes");

// router.post('/register', AuthController.register);
router.post('/login', autthRoutes.login);
// router.post('/updateHouseInfo', dataRoutes.updateHouseInfo);
router.get('/getHouseInfo', dataRoutes.getHouseInfo);

module.exports = router;
