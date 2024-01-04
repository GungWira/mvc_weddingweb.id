class CoupleController{
  static async getCouplePage(req,res){
    const pageName = req.params.couple
    res.render(pageName, {}, function(err, html){
      if(err){
        res.redirect("/")
      }else{
        res.render(pageName)
      }
    })
  }
}

module.exports = CoupleController