const utils = require("./utils");
const controller = require("../controller/data.controller");

module.exports.updateHouseInfo = async (req, res) => {
    const data = req.body;
    console.log("API: Update house info");
}

module.exports.getHouseInfo = async (req, res) => {
    console.log("API: Get house info");
    try {
        var HoustInfo = await controller.GetAllInfo();
        res.send(HoustInfo);
    } catch (err) {
        return res.status(500).json({ 
            data: { 
              errorCode: 1000, 
              error: err
            }, 
            success: true, 
            message: "true" 
        });
    }
}