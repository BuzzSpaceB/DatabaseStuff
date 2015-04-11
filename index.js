/**
 * Created by Thinus on 2015-04-11.
 */

function Common() {
    //empty array to hold mongoose Schemas
    this.models = {};
}

Common.prototype.init = function(mongoose) {

    mongoose.connection.on('open', function (ref) {
        console.log('Connected to mongo server.');
    });

    mongoose.connection.on('error', function (err) {
        console.log('Could not connect to mongo server!');
        console.log(err);
    });

    mongoose.connect("mongodb://d3user:DdJXhhsd2@proximus.modulusmongo.net:27017/purYv9ib");
    require('./models/appraisal');
    require('./models/module');
    require('./models/notification');
    require('./models/post');
    require('./models/role');
    require('./models/service');
    require('./models/service_restriction');
    require('./models/space');
    require('./models/subscription');
    require('./models/thread');
    require('./models/user');
    require('./models/user_subscription_settings_schema');

    //This is just to make referencing the models easier within your apps, so you don't have to use strings. The model name you use here must match the name you used in the schema file
    this.models = {
        appraisal: mongoose.model('appraisals'),
        module: mongoose.model('modules'),
        notification: mongoose.model('notifications'),
        post: mongoose.model('posts'),
        role: mongoose.model('roles'),
        serviceRestriction: mongoose.model('servicerestrictions'),
        space: mongoose.model('spaces'),
        subscription: mongoose.model('subscriptions'),
        thread: mongoose.model('threads'),
        user: mongoose.model('users'),
        userSubscriptionSettings: mongoose.model('usersubscriptionsettings')
    }
};

var ds = new Common();

module.exports = ds;

/* # How to use
    1. Add module to package.json dependencies 
        ```
            "DatabaseStuff": "git://github.com/BuzzSpaceB/DatabaseStuff#master",
        ```
    2. Init the models when your module starts up
        ```
             var mongoose = require('mongoose')
             , ds = require('ds');

             ds.init(mongoose);
        ```
    3. Where you want to use a schema/the database use the following template
       ```
            var ds = require('ds');
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
 */