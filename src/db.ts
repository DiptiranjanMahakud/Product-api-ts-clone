const Pool=require("pg").Pool;

var pool=new Pool({
    user:"dipti",
    host:"ls-1edb1b61210d847b3f66478fec067688142b4de6.cpmugeymehfj.ap-south-1.rds.amazonaws.com",
    database:"dbdipti",
    port:5432,
    password:"dipti2002",
});

module.exports=pool;