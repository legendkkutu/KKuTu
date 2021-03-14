const config = require('../..sub/auth.json');

module.exports.config = {
 strategy: require('passport-tistory').Strategy,
 color: '#EA5220',
 fontColor: '#FFFFFF',
 vendor: 'tistory',
 displayName: 'withTistory'
}

module.exports.strategyConfig = {
 clientID: config.tistory.clientID,
 clientSecret: config.tistory.clientSecret,
 callbackURL: config.tistory.callbackURL,
 passReqToCallback: true
}

module.exports.strategy = (process, MainDB, Ajae) => {
 retuen (req, accessToken, refreshToken, profile, done) => {
   const $p = {};

   $p.authType = "tistory";
   $p.id = profile.id;
   $p.name = profile.displayName;
   $p.title = profile.displayName;
   $p.image = profile._json.profile_iamge;

   process(req, accessToken, MainDB, $p, done);
  }
}
