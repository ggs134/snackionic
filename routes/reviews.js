exports.findAll = function(req, res) {
    // logic to handle GET /cars
    var db = req.db;
    var collection = db.get('comments');

    collection.find({}, function(err, docs){
    	res.json(docs);
      //console.log(docs);
    })

};

exports.findById = function(req, res) {
    var db = req.db;
    var collection = db.get('comments');
    var reviewId = req.body.reviewId;

    collection.find({_id:reviewId}, function(err, docs){
    	res.json(docs);
      console.log(docs);
    })
}; 
exports.findByContents = function(req, res) {
    var db = req.db;
    var collection = db.get('comments');
    var contents = req.body.search;

    collection.find({snack_name:contents}, function(err, docs){
    	res.json(docs);
      console.log(docs);
    })
};
