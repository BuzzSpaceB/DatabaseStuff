/**
 * Created by Thinus on 2015-04-11.
 */

function DS() {
    //empty array to hold mongoose Schemas
    this.models = {};
}

DS.prototype.init = function(mongoose) {

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

var ds = new DS();

module.exports = ds;