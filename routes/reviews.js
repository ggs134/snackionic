exports.findAll = function(req, res) {
  // logic to handle GET /cars
  var db = req.db;
  var collection = db.get('comments');

  collection.find({}, function(err, docs){
    res.json(docs);
    console.log(docs);
  })

};

exports.findById = function(req, res) {
  var db = req.db;
  var collection = db.get('comments');
  var id = req.params.foodId;
  console.log(id);
  var o_id = new require('mongodb').ObjectID(id);
  collection.find({ref_id:o_id}, {}, function(err, docs){
    console.log(docs);
    res.json(docs);
  })
};
exports.findByContents = function(req, res) {
  var db = req.db;
  var collection = db.get('comments');
  var contents = req.body.search;

  collection.find({"text":{$regex:contents}}, function(err, docs){
    res.json(docs);
    console.log(docs);
  })
};
exports.insertComment = function(req, res) {
  var db = req.db;
  var collection = db.get('comments');

  var text = req.body.comments;
  var username = req.body.username;
  var grade = req.body.grade;
  var snack_id = req.body.snack_id;
  var user_id = req.body.userid;
  console.log(req.body);
  var date = new Date();
  console.log(date);
  var o_id = new require('mongodb').ObjectID(snack_id);

  collection.insert({snack_id:o_id,grade:grade,text:text,by:{nickname:username, id:user_id}, created_time:date}, function(err, docs){
    res.json(docs);
  })
};
