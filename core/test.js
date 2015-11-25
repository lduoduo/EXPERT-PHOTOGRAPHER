var Photo = require('./photo');

  Photo.findOne({}, function(err, data){
    if (err) throw err;
    console.log(data);
  });