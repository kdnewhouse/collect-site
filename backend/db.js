const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'demo',
  password: 'kaelin10',
  port: 5432,
});

//Database query functions
const getItems = () => {
    return new Promise(function(resolve, reject) {
        pool.query('select * from item', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    }) 
}

const getItemsSortMedia = () => {
    return new Promise(function(resolve, reject) {
        pool.query('select * from item order by itemmedia, itemseriesnumber', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    }) 
}

const getItemsSortRetailer = () => {
    return new Promise(function(resolve, reject) {
        pool.query('select * from item order by itemretailer, itemmedia, itemseriesnumber', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    }) 
}

const getItemsSortRelease = () => {
    return new Promise(function(resolve, reject) {
        pool.query('select * from item order by itemrelease, itemmedia, itemseriesnumber', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    }) 
}

const getItemsSortSeries = () => {
    return new Promise(function(resolve, reject) {
        pool.query('select * from item order by itemseries, itemwave, itemmedia, itemseriesnumber', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    }) 
}

module.exports = { getItems, getItemsSortMedia, getItemsSortRetailer, getItemsSortRelease, getItemsSortSeries };