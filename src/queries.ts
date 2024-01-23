// Retrieve all product list of a company as per the product's available units
var getAllProductsForCompany:any = "SELECT cp.company_id, p.product_name, cp.discount, cp.available_units FROM Company_Products cp JOIN Products p ON cp.product_id = p.product_uuid WHERE cp.company_id = $1";

// Retrieve product name, original price, price after discount from the stored data for a given company
var getProductDetailsForCompany:any = "SELECT p.product_name, p.price, p.price - (p.price * cp.discount) AS discounted_price FROM Products p JOIN Company_Products cp ON p.product_uuid = cp.product_id WHERE cp.company_id = $1";

// Retrieve name of the products on which discount given by the company is more than average discount of all products for that company
var getProductsAboveAvgDiscount:any = "SELECT p.product_name FROM Products p JOIN Company_Products cp ON p.product_uuid = cp.product_id WHERE cp.company_id = $1 AND cp.discount > (SELECT AVG(cp2.discount) FROM Company_Products cp2 WHERE cp2.company_id = $1)";

// Retrieve all company details who are providing the most discounts on all of their products in a sorting manner (ascending order)
var getCompaniesWithMostDiscounts:any = "SELECT c.company_id, c.company_name, SUM(cp.discount) AS total_discount FROM Company_Products cp JOIN Company c ON cp.company_id = c.company_id GROUP BY c.company_id, c.company_name ORDER BY total_discount ASC";


module.exports={
    getAllProductsForCompany,
    getProductDetailsForCompany,
    getProductsAboveAvgDiscount,
    getCompaniesWithMostDiscounts,
};