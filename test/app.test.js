const chai    = require('chai');
const should  = chai.should();
const assert  = chai.assert;
const Restlio = require('../index');

let restlio;
before(function (done) {
    this.timeout(0);
    
    restlio = new Restlio({
        basedir: __dirname,
        test: true
    }).run(() => {
        done();
    });
});

after(function (done) {
    this.timeout(0);
    done();
});

describe('app',function() {
    this.timeout(0);

    it('should have properties',done => {
        assert.deepProperty(appio, '_app.config');
        assert.deepProperty(appio, '_app.system');
        assert.deepProperty(appio, '_app.lib');
        assert.deepProperty(appio, '_app.boot');
        assert.deepProperty(appio, '_app.core');
        assert.deepProperty(appio, '_app.libpost');
        assert.deepProperty(appio, '_app.middle');
        assert.deepProperty(appio, '_app.model');
        done();
    });    

});

/**
 * @TODO
 * tests, tests, tests, more tests...
 */