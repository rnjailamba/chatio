'use strict';

var init = function () {

	if(process.env.NODE_ENV === 'production') {
		var redisURI 		= require('url').parse(process.env.REDIS_URL);
		var redisPassword 	= redisURI.auth.split(':')[1];
		return {
				"db": {
					"username": "heroku_r52pl7qk",
					"password": "tql0268s9spvoii7f79s26mfq4",
					"host": "ds133192.mlab.com",
					"port": "33192",
					"name": "heroku_r52pl7qk"
				},
				"sessionSecret": "zzz",
				"facebook": {
					"clientID": "102996070424154",
					"clientSecret": "61cda3252a8dbc4eb3f67d61da546cf3",
					"callbackURL": "https://glacial-brushlands-43595.herokuapp.com/auth/facebook/callback",
					"profileFields": ["id", "displayName", "photos"]
				},
				"twitter": {
					"consumerKey": "8GTFBocmC4bSVLPDdUY0SmLyv",
					"consumerSecret": "jX6T4Kp5SWTy1XPgLmvAjiDTzHX25wp3rn9Uyy1twInJ4kHvm7",
					"callbackURL": "https://glacial-brushlands-43595.herokuapp.com/auth/twitter/callback",
					"profileFields": ["id", "displayName", "photos"]
				},
				"redis": {
					"host": "ec2-52-202-15-207.compute-1.amazonaws.com",
					"port": "42869",
					"password": "p7e642bd42fb3a42064d893b241b1ad08ead72b7c11f9725a82120bae55409a5b"
				}
			}
	}
	else {
		return require('./config.json');
	}
}

module.exports = init();
