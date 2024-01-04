const {Router} = require("express")
const CoupleController = require("../controllers/couple.controller")

const router = Router()

router.get("/:couple", CoupleController.getCouplePage)

module.exports = router