var mongoose = require('mongoose')
    , ds = require('./index');

//you would simply have after adding as a dependency to package.json
// var mongoose = require('mongoose')
//   , ds = require('ds');

ds.init(mongoose);
var space = ds.models.space;

/* Create */
    var newSpace = space();
        newSpace.module_id = "COS301";
        newSpace.registered_users = [{ user_id: "u12345678" }, { user_id: "u87654321" }];
        newSpace.academic_year = 2015;
        newSpace.is_open = true;
        newSpace.root_thread_id	 = "5527c698faa3e73c0f15b7fc";
        newSpace. administrators = [{ user_id: "u11111111" }, { user_id: "u99999999" }];

    //Saves the new thread to the database
    newSpace.save(function (err) {
        if (err) console.log("ERR: " + err);
        console.log("Saving: " + JSON.stringify(newSpace));
    });

/* Read */
    //finds all the spaces in the db
    space.find(function (err, aSpace) {
        if (err)
            console.log("ERR: " + err);
        else
            console.log("Found: " + JSON.stringify(aSpace));
    });

    //finds ONE spesific space in the db
    space.findOne({ 'module_id' :  "COS301" }, function (err, aSpace) {
        if (err)
            console.log("ERR: " + err);
        else
            console.log("Found: " + JSON.stringify(aSpace));
    });