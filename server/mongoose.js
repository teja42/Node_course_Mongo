console.log("Importing Mongoose lib.");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/Todo",{
	useMongoClient: true//,
	//promiseLibrary: require('bluebird')
});
module.exports = {mongoose}