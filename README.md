

# Changes will/can be made to these files, without notice. 
# If you see any errors or mistakes please report them. 
# Please report database requirements changes to middle level integration team leaders. 


# DatabaseStuff
We setup a database for everyone to use. So you dont need to use "localhost" anymore, use `mongodb://d3user:DdJXhhsd2@proximus.modulusmongo.net:27017/purYv9ib` as the connection url. That way we are all using the same database. 

All collections are lowercase and in the plural form. e.g "threads" and not"Thread"


#How to use
1. Include the mongoose module `var mongoose = require('mongoose');`
2. Include the schema you desire e.g save the schema file found in this repo to a folder called modules in your app
3. In the 'main' file of your application or where you want to use the database use sometging similar to this:
```javascript
  var mongoose = require('mongoose');
  
  mongoose.connection.on('open', function (ref) {
      console.log('Connected to mongo server.');
  });
  
  mongoose.connection.on('error', function (err) {
      console.log('Could not connect to mongo server!');
      console.log(err);
  });
  
  mongoose.connect("mongodb://d3user:DdJXhhsd2@proximus.modulusmongo.net:27017/purYv9ib");
```
#How to create a mock database object 
In this example I will be using the Tread schema. (assuming step 3 above  has alreaddy been done )
```
   
    var Thread = require('../models/thread');
    
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
            console.log("Saving: " + JSON.stringify(newStudent));
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
```

# How to view what is goin gon in the database
Download [Robomongo](http://robomongo.org/)
## Settings
### 1. Connection
    Address: proximus.modulusmongo.net
    Port: 27017
### 2. Authentication
```
Database: purYv9ib
User Name: d3user
Password: DdJXhhsd2
```
