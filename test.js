var mongoose = require('mongoose');

var configDB = require('./config');

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});

mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});

mongoose.connect("mongodb://d3user:DdJXhhsd2@proximus.modulusmongo.net:27017/purYv9ib");

var Thread = require('./models/thread');

//create mock thread
var newThread = new Thread();
newThread.thread_id = "1";
newThread.parent_thread_id = "0";
newThread.user_id = "u12345678";
newThread.num_children = 0;
newThread.closed = false;
newThread.hidden = false;
newThread.level = "1";
newThread.post_id = "1";

//This is how you save it
newThread.save(function (err) {
    if (err) console.log("ERR: " + err);
    console.log("Saving: " + JSON.stringify(newThread));
});

//finds all the threads in the db
Thread.find(function (err, aThread) {
    if (err)
        console.log("ERR: " + err);
    else
        console.log("Found: " + JSON.stringify(aThread));
});

//finds ONE spesific threads in the db
Thread.findOne({ 'thread_id' :  "1" }, function (err, aThread) {
    if (err)
        console.log("ERR: " + err);
    else
        console.log("Found: " + JSON.stringify(aThread));
});