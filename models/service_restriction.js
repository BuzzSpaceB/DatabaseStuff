var mongoose = require('mongoose');

var ServiceRestrictionSchema = mongoose.Schema({
    restriction_id              : String, /*buzz_id + service_id */
    buzz_space_id               : String,
    service_id                  : String,
    minimum_role_id               : String,
    minimum_status_points       : Number,
    deleted                     : Boolean
});

module.exports = mongoose.model('servicerestrictions', ServiceRestrictionSchema);