const { render } = require("ejs")
const db = require("../databases")

class TemplateController{
  static async getTemplateById(req, res){
    // ambil parameter
    const templateId = req.params.templateId
    try{
      // cek apakah database dan file ada
      const checkDbExist = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = '${templateId}'`
      db.query(checkDbExist, (err, result, fields)=>{
        if(err) throw err
        if(result[0] == null){
          res.redirect("/")
          return
        }else{
          // jika ada, query data dari database
          const sql = `SELECT * FROM ${templateId}`
          db.query(sql, (err, results, fields)=>{
            if(err){
              throw err
            }else{
              // render tampilan yang akan digunakan dan kirim datanya
              res.render("templates/"+templateId, {data:results, id:templateId}, function(err, html){
                if(err){
                  // jika tidak ada kembalikan ke home
                  console.log(err)
                  res.redirect("/")
                }else{
                  // jika ada periksa database
                  res.send(html)
                }
              })
            }
          })
        }
      })
    }catch(err){
      console.log(err)
    }
  }

  static async uploadTemplateChat(req, res){
    // ambil parameter
    const templateId = req.params.templateId
    try{
      // ambil data yang dikirim melalui script
      const formData = await req.body
      const name = formData.name,
            message = formData.message,
            date = new Date().toISOString().split('T')[0]
      // lakukan query data
      const sql = `INSERT INTO ${templateId} (id, name, message, date) VALUES (NULL, '${name}', '${message}', '${date}')`
      db.query(sql, (err, results, fields)=>{
        if(err) throw err;
        // console.log(results.affectedRows)
      })
      res.sendStatus(200)
    }catch(err){

    }
  }


}

module.exports = TemplateController