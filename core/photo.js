var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

mongoose.connect('mongodb://localhost/photolib'); // connect to our database

var PhotoSchema = new Schema({
	title:String,
	description:String,
	type:String,
	size:Number,
	sizeType:String,
	device:String,	
	dimensions:String,
	exposureTime:String,
	isActive:Boolean,
	imgPath:String,
	startCount:Number,
	createDate:Date,
	createUserId:String,
	lastmodifyDate:Date
},{collection:"photos"});

module.exports = mongoose.model('Photo', PhotoSchema);