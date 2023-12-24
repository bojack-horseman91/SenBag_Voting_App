const mangoos = require("mongoose")
const Voting_location_schema=mangoos.Schema({
    location:{type:String},
    imageURL:{type:String},
    presiding_officer:{type:String},
    police_officer:{type:String},
})

module.exports=mangoos.model("Voting_Location_Schema",Voting_location_schema)