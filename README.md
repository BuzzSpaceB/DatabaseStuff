# Changes will/can be made to these files, without notice.
# If you see any errors or mistakes please report them. 
# Please report database requirements changes to middle level integration team leaders.

# DatabaseStuff
We setup a modeule fot everyone to use which manages the database, from connection to all teh schemas.

All collections are lowercase and in the plural form. e.g "threads" and not"Thread".
To gain access to a collection via the module use the singular form form. e.g "thread" and not"Threads".

# How to use
1. Add module to package.json dependencies

    ```
        "DatabaseStuff": "git://github.com/BuzzSpaceB/DatabaseStuff#master"
    ```
2. Init the models when your module starts up
    ```
         var mongoose = require('mongoose')
         , ds = require('DatabaseStuff');

         ds.init(mongoose);
    ```
3. Where you want to use a schema/the database use the following template
   ```
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
