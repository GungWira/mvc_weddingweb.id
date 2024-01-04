const {Router} = require('express') 
const TemplateRouter = require("../controllers/template.controller")

const router = Router()

router.get("/template/:templateId", TemplateRouter.getTemplateById)
router.post("/template/:templateId", TemplateRouter.uploadTemplateChat)

module.exports = router