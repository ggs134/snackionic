/**
 * Created by sean on 15. 10. 17.
 */

exports.findAll = function (req, res, next) {
    var db  = req.db;
    var collection = db.get('snacks');

    collection.find({},{},function(e, docs){
        res.json(docs);
    });
};

exports.findById = function (req, res, next) {
    var db  = req.db;
    var collection = db.get('snacks');

    var id = req.body.id;
    collection.find({id:id},{},function(e, docs){
        res.json(docs);
    });
};
