const socketioJwt = require('socketio-jwt');

module.exports = app => {

    const _env  = app.get('env');
    const _conf = app.config[_env].api; // api config

    app.io.use(socketioJwt.authorize({
        secret: _conf.token.secret,
        handshake: true
    }));

    return true;

};




