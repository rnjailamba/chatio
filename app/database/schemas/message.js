'use strict';

var Mongoose 	= require('mongoose');

var MessageSchema = new Mongoose.Schema({
    message: { type: String, required: true},
    userId: { type: String, required: true},
    username: { type: String, required: true},
    roomId:  { type: String, required: true}
});

// Create a message model
var messageModel = Mongoose.model('message', MessageSchema);

module.exports = messageModel;