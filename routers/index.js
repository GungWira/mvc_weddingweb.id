const { Router } = require("express")
const templateRouter = require("./template.router")
const coupleRouter = require("./couple.router")


const router = Router()
router.use(templateRouter)
router.use(coupleRouter)

module.exports = router
