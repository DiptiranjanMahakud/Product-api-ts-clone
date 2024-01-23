"use strict";
const { Router } = require("express");
const controller = require('./controller');
const router = Router();
// Your existing routes
// New routes for the specified queries
router.get('/productlist/:cmpId', controller.getAllProductsForCompany);
router.get('/productInfo/:cmpId', controller.getProductDetailsForCompany);
router.get('/prodAboveAvgDis/:cmpId', controller.getProductsAboveAvgDiscount);
router.get('/cmpnyMostDis/', controller.getCompaniesWithMostDiscounts);
module.exports = router;
