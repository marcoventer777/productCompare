require('dotenv').config();

const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DATABASE,
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
                 WHERE Product_Name LIKE '%${key}%'`
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
             WHERE Product_Code = '${productCode}'`
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
            `SELECT Product_Store_Table.Price, Store_Table.Store_Name
            FROM Product_Store_Table INNER JOIN Store_Table 
            ON Product_Store_Table.Store_Code = Store_Table.Store_Code 
            WHERE Product_Store_Table.Product_Code = ${productCode}`
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
            `INSERT INTO Product_Table (Product_Name)
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
            `INSERT INTO Product_Store_Table (Product_Code, Store_Code, Price)
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