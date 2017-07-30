const hash = require("hashids");

var chars = "abdcefghijklmnopqusruvwxyzABCDEFGHIJKLMNOPQRSTVUWXYZ1234567890";
var new_hash = new hash("A salt",5);
var unique_number  = new Date().getTime()/1000;
console.log(unique_number);
var x = new_hash.encode(new Date().getTime());
console.log(x);
