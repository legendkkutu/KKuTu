const config = require('../../sub/auth.json');

module.exports.config = {
    strategy: require('passport-이름').Strategy,
    color: '#000000',
    fontColor: '#FFFFFF',
    vendor: '이름',
    displayName: 'with이름'
}

module.exports.strategyConfig = {
    clientID: config.이름.clientID, // 보안을 위해서입니다.
    clientSecret: config.이름.clientSecret, // 이 방법을 사용하는 것을
    callbackURL: config.이름.callbackURL, // 적극 권장합니다.
    passReqToCallback: true /*,
}

module.exports.strategy = (process, MainDB, Ajae) => {
    return (req, accessToken, refreshToken, profile, done) => {
        const $p = {};

        $p.authType = "이름";
        $p.id = profile.id;
        $p.name = profile.displayName;
        $p.title = profile.displayName;
        $p.image = profile._json.profile_image;

        process(req, accessToken, MainDB, $p, done);
    }
}
