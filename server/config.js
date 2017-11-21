module.exports = {
    secret: 'h21kh3b2hkb2k23nk2nk2h2kh2',
    clientDomain: 'http://localhost:3000',

    facebookAuth: {
        clientID: '179261666004653', // your App ID
        clientSecret: 'bd401e22069ac429948f8d80e065626a', // your App Secret
        callbackURL: `${clientDomain}/signin`,
        profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        profileFields: ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    twitterAuth: {
        consumerKey: 'your-consumer-key-here',
        consumerSecret: 'your-client-secret-here',
        callbackURL: 'http://localhost:8080/auth/twitter/callback'
    },

    googleAuth: {
        clientID: 'your-secret-clientID-here',
        clientSecret: 'your-client-secret-here',
        callbackURL: 'http://localhost:8080/auth/google/callback'
    }

};