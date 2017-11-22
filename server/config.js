const apiDomain = 'http://localhost:3003';

module.exports = {
    secret: 'h21kh3b2hkb2k23nk2nk2h2kh2',
    singinCallback: 'http://localhost:3000/signin',

    facebookAuth: {
        clientID: '179261666004653', // your App ID
        clientSecret: 'bd401e22069ac429948f8d80e065626a', // your App Secret
        callbackURL: `${apiDomain}/auth/facebook/callback`,
        profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        profileFields: ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    twitterAuth: {
        consumerKey: 'your-consumer-key-here',
        consumerSecret: 'your-client-secret-here',
        callbackURL: 'http://localhost:8080/auth/twitter/callback'
    },

    googleAuth: {
        clientID: '219000088595-5ia9d9aqd1bvb1hahps79mhj51taestp.apps.googleusercontent.com',
        clientSecret: 'msQ9NXf2uF5ndTA_5tSKxE5a',
        callbackURL: `${apiDomain}/auth/google/callback`
    }

};