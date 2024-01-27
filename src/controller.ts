var pool=require('./db');
const queries=require('./queries');
var logger=require('./logger');

// Function to retrieve all product list of a company as per the product's available units
var getAllProductsForCompany:any = (req:any, res:any) => {
    const companyId = parseInt(req.params.cmpId);
    pool.query(queries.getAllProductsForCompany, [companyId], (error:any, results:any) => {
        if (error) {
            //console.error(error);
            logger.error(error,'Error querying database');
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Function to retrieve product name, original price, price after discount for a given company
var getProductDetailsForCompany:any = (req:any, res:any) => {
    const companyId = parseInt(req.params.cmpId);
    pool.query(queries.getProductDetailsForCompany, [companyId], (error:any, results:any) => {
        if (error) {
            //console.error(error);
            logger.error(error,'Error querying database');
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Function to retrieve name of the products with discount more than average discount for a given company
var getProductsAboveAvgDiscount:any = (req:any, res:any) => {
    const companyId = parseInt(req.params.cmpId);
    pool.query(queries.getProductsAboveAvgDiscount, [companyId], (error:any, results:any) => {
        if (error) {
            //console.error(error);
            logger.error(error,'Error querying database');
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Function to retrieve all company details who are providing the most discounts on all products in ascending order
var getCompaniesWithMostDiscounts:any = (req:any, res:any) => {
    pool.query(queries.getCompaniesWithMostDiscounts, (error:any, results:any) => {
        if (error) {
            //console.error(error);
            logger.error(error,'Error querying database');
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Exporting all the functions
module.exports = {
    getAllProductsForCompany,
    getProductDetailsForCompany,
    getProductsAboveAvgDiscount,
    getCompaniesWithMostDiscounts,
};
