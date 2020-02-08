var app=require('express');
var mongo=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var dbo=db.db("diary");
    dbo.createCollection("coll", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        
      });
      db.close();
  });