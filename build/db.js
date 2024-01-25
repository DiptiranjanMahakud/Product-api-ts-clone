"use strict";
const Pool = require("pg").Pool;
var pool = new Pool({
    user: "dipti",
    host: "ls-4a43ddcbc4895ee92d5727f5d6e1635f9ed266c7.cpmugeymehfj.ap-south-1.rds.amazonaws.com",
    database: "dbdipti",
    port: 5432,
    password: "dipti2002",
});
module.exports = pool;
