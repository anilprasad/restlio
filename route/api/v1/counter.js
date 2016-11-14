const async = require('async');
const dot   = require('dotty');
const _     = require('underscore');

module.exports = app => {

    const _mdl      = app.middle;
    const _schema   = app.lib.schema;
    const _helper   = app.lib.utils.helper;
    const _resp     = app.system.response.app;
    const _mongoose = app.core.mongo.mongoose;
    const _emitter  = app.lib.schemaEmitter;
    const _log      = app.lib.logger;
    const _group    = 'ROUTE:API:V1:COUNTER';
    
    /**
     * ----------------------------------------------------------------
     * Counter
     * ----------------------------------------------------------------
     */

    app.put('/counter/:object/:id/:field/:type(incr|decr)?',
        _mdl.api,
        _mdl.client,
        _mdl.appdata,
        _mdl.auth,
        _mdl.acl,
        _mdl.counter.check,
    (req, res, next) => {
        const schema = new _schema(req.params.object).init(req, res, next);

        if(schema) {
            const counter = req.__counterAcl;
            const Item    = schema._model;
            const cond    = {_id: counter.id};
            const update  = {$inc: {}};

            if(counter.type == 'incr')
                update.$inc[counter.short] = 1;
            if(counter.type == 'decr')
                update.$inc[counter.short] = -1;

            Item.update(cond, update, {multi: false}, (err, raw) => {
                _resp.OK({
                    field    : counter.field,
                    type     : counter.type,
                    affected : raw.nModified                    
                }, res);
            });
        }
    });

};