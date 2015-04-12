## Changes will/can be made to these files, without notice.

# DatabaseStuff
We setup a module fot everyone to use which manages the database, from connection to all the schemas.

All collections are lowercase and in the plural form. e.g "threads" and not"Thread".
All variables (to gain access to a collection via the module) use the singular form form. e.g "thread" and not"Threads".
```javascript
var modelName = ds.models.modelName;
//e.g.
var space = ds.models.space;
var appraisal = ds.models.appraisal;
var module = ds.models.module;
var notification = ds.models.notification;
var post = ds.models.post;
var role = ds.models.role;
var serviceRestriction = ds.models.serviceRestriction;
var space = ds.models.space;
var subscription = ds.models.subscription;
var thread = ds.models.thread;
var user = ds.models.user;
var userSubscriptionSettings = ds.models.userSubscriptionSettings;
//these variables are then the schemas 
```

# How to use
1. Add module dependancy to package.json file (you need mongoose as well)
  ```javascript
    "dependencies": {
      ...
      "mongoose": "^4.0.1",
      "DatabaseStuff": "git://github.com/BuzzSpaceB/DatabaseStuff#master"
    }
      
  ```
2. Let npm download the modules. In the console run:
    ```
        npm install
    ```
3. Initiate the models in your applications main file /when your buzz module starts up
  ```javascript
       var mongoose = require('mongoose')
       , ds = require('DatabaseStuff');
       
       ds.init(mongoose);//this line is very important
  ```
4. Where you want to use a schema/the database use the following template
  ```javascript
      var ds = require('DatabaseStuff');
      var modelName = ds.models.modelName;
  
      //then you can use it as you normally would have used a schema.
  
      modelName.findById(req.params.id, function(err, objFromDB) {
          if (err)
              console.log(err.message);
          else{
              var model= {modelData: objFromDB};
              //do what you want
          }
      });
  ```
# Example
See the /test folder
```javascript
var mongoose = require('mongoose')
    , ds = require('DatabaseStuff');

ds.init(mongoose);

var space = ds.models.space;

/* Create */
    var newSpace = space();
        newSpace.module_id = "TEST" + Math.floor((Math.random() * 999) + 1);;
        newSpace.registered_users = [{ user_id: "u12345678" }, { user_id: "u87654321" }];
        newSpace.academic_year = "2015";
        newSpace.is_open = false;
        newSpace.root_thread_id	 = "5527c698faa3e73c0f15b7fc";
        newSpace. administrators = [{ user_id: "u11111111" }, { user_id: "u99999999" }];

    //Saves the new thread to the database
    newSpace.save(function (err) {
        if (err) console.log("ERR: " + err);
        console.log("Saving:\n " + newSpace );
    });

/* Read */
    //finds all the spaces in the db
    space.find(function (err, aSpace) {
        if (err)
            console.log("ERR: " + err);
        else
            console.log("Found " + aSpace.length + " spaces in the database.");
    });

    //finds ONE spesific space in the db
    space.findOne({ 'module_id' :  "COS301" }, function (err, aSpace) {
        if (err)
            console.log("ERR: " + err);
        else
            console.log("Found the space you were looking for:\n " + aSpace);
    });
```

# How to view what is going on in the database
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
