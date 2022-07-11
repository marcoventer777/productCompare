const env = require('../config');

const sql = require('mssql');

const config = {
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    server: env.DB_HOST,
    database: env.DATABASE,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true
    }
};

async function GetProducts(key){
    try {
        await sql.connect(config)
        let result;
        if(key){
            result = await sql.query(
                `SELECT * FROM Product_Table
                 WHERE productName LIKE '%${key}%'`
            );
        }else{
            result = await sql.query(`SELECT * FROM Product_Table`);
        }
        return result;
    } catch (err) {
        console.log(err);
    }
};

async function GetProduct(productCode){
    try {
        await sql.connect(config)
        let result = await sql.query(
            `SELECT * FROM Product_Table
             WHERE productCode = '${productCode}'`
        );
        return result;
    } catch (err) {
        console.log(err);
    }
};

async function GetPricesForProduct(productCode){
    try {
        await sql.connect(config)
        let result = await sql.query(
            `SELECT Product_Store_Table.price, Store_Table.Store_Name
            FROM Product_Store_Table INNER JOIN Store_Table 
            ON Product_Store_Table.Store_Code = Store_Table.Store_Code 
            WHERE Product_Store_Table.productCode = ${productCode}`
        );
        return result;
    } catch (err) {
        console.log(err);
    }
};

async function AddProduct(productName){
    try {
        await sql.connect(config)
        let result = await sql.query(
            `INSERT INTO Product_Table (productName)
            VALUES ('${productName}');`
        );
        return result;
    } catch (err) {
        console.log(err);
    }
};

async function AddStore(storeName){
    try {
        await sql.connect(config)
        let result = await sql.query(
            `INSERT INTO Store_Table (Store_Name)
            VALUES ('${storeName}');`
        );
        return result;
    } catch (err) {
        console.log(err);
    }
};

async function AddPrice(productCode, storeCode, price){
    try {
        await sql.connect(config)
        let result = await sql.query(
            `INSERT INTO Product_Store_Table (productCode, Store_Code, price)
            VALUES ('${productCode}', '${storeCode}', ${price});`
        );
        return result;
    } catch (err) {
        console.log(err);
    }
};

 module.exports = { 
    GetProducts,
    GetProduct,
    GetPricesForProduct,
    AddProduct,
    AddStore,
    AddPrice
};