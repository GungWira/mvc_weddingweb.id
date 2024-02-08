const {Router} = require("express")
const CoupleController = require("../controllers/couple.controller")

const router = Router()

router.get("/wedding/:templateId", CoupleController.getTemplateById)
router.post("/wedding/:templateId", CoupleController.uploadTemplateChat)

module.exports = router