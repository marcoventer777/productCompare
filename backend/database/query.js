const sql = require("./connect");

function GetProducts() {
    let connect = sql.con();
    // const [results,] =  sql.connect.query("SELECT * FROM Product_Store_Table");
    // // connection.end();
   // return results;
}

module.exports = {GetProducts};