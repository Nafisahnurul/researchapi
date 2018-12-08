// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '538655775637-ae0jffp2b2euq8gm6i3jbrfdnmel9gb6.apps.googleusercontent.com',
        'clientSecret'  : 'TduvWT4kY4zjElbW3LegveQe',
        'callbackURL'   : 'http://localhost/google/callback'
    }

};