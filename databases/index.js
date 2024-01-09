const mysql = require('mysql')

var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'weddingweb'
  // host : "bmdipnsl0siqrqqepeik-mysql.services.clever-cloud.com",
  // user: 'umojal6pkpn78cax',
  // password : 'oUUHZLiPyHf3cFM3uQxc',
  // database: "bmdipnsl0siqrqqepeik"
})

module.exports = db;
