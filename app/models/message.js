'use strict';

var messageModel   = require('../database').models.message;
var Room 		= require('../models/room');
var User 		= require('../models/user');

var create = function (data, callback){
    var newMessage = new messageModel(data);
    newMessage.save(callback);
};

var find = function (data, callback){
    messageModel.find(data, callback);
}

var findOne = function (data, callback){
    messageModel.findOne(data, callback);
}

var findById = function (id, callback){
    messageModel.findById(id, callback);
}

/**
 * Add a message along with metadata of user to the passed room
 *
 */
var createMessage = function(room, socket, message, callback){

    // Get current user's id
    var userId = socket.request.session.passport.user;
    User.findById(userId, function (err, user) {
        create({
            userId: userId,
            username: user.username,
            roomId: room.id,
            message: message.content
        }, callback, function(err, newMessage){
            if(err) throw err;
        });
    });

}



module.exports = {
    create,
    find,
    findOne,
    findById,
    createMessage
};