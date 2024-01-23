"use strict";
const Pool = require("pg").Pool;
var pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    port: 5432,
    password: "dipti",
});
module.exports = pool;
