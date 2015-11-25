var Photo = require('./photo');

var photoSvc = {};

photoSvc.getMostPopularBG = function(cb){
	Photo.find().select({_id:1, title: 1, description:1, imgPath:1,starCount:1}).exec(function(err, photos){
		if (err) throw err;
		//console.log("photos:"+toString(photos));
		cb(photos);
	});
}

// photoSvc.getMostPopularBG = function(cb){
//   Photo.findOne({_id:'56532c94c19f220c5742d999'}, function(err, data){
//     if (err) throw err;
//     console.log("photos:"+toString(data));
//     cb(data);
//   });
// }


  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = photoSvc;
    }
    exports.photoSvc = photoSvc;
  }