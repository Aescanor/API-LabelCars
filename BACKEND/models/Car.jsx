const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
brand: {
	type: String
},
model: {
	type: String
},
type: {
	type: Number
},
motor : {
    type : String
},
picture : {
    type : String
},
kilometer : {
    type : Number
},
clutch : {
    type : Boolean
},
climatisation : {
    type : Boolean
},
gps : {
    type : Boolean
},
pricePerDay : {
    type : Number
},

}, {
	collection: 'cars'
})

module.exports = mongoose.model('car', carSchema)
