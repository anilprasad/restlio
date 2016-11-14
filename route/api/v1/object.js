const async = require('async');

module.exports = app => {

    const _mdl    = app.middle;
    const _schema = app.lib.schema;

    /**
     * ----------------------------------------------------------------
     * REST Routes
     * ----------------------------------------------------------------
     */

    app.get('/api/o/:object/structure',
        _mdl.api,
        _mdl.client,
    (req, res, next) => {
        const schema = new _schema(req.params.object).init(req, res, next);

        if(schema)
            schema.structure();
    });
    
    app.get('/api/o/:object',
        _mdl.api,
        _mdl.system,
        _mdl.auth,
        _mdl.acl,
    (req, res, next) => {
        const schema = new _schema(req.params.object).init(req, res, next);

        if(schema)
            schema.get(req.query);
    });

    app.get('/api/o/:object/:id',
        _mdl.api,
        _mdl.system,
        _mdl.auth,
        _mdl.acl,
    (req, res, next) => {
        const schema = new _schema(req.params.object).init(req, res, next);

        if(schema)
            schema.getById(req.params.id);
    });

    app.post('/api/o/:object',
        _mdl.api,
        _mdl.system,
        _mdl.auth,
        _mdl.acl,
    (req, res, next) => {
        const schema = new _schema(req.params.object).init(req, res, next);

        if(schema)
            schema.post(req.body);
    });

    app.put('/api/o/:object/:id',
        _mdl.api,
        _mdl.system,
        _mdl.auth,
        _mdl.acl,
    (req, res, next) => {
        const schema = new _schema(req.params.object).init(req, res, next);

        if(schema)
            schema.put(req.params.id, req.body);
    });

    app.delete('/api/o/:object/:id',
        _mdl.api,
        _mdl.system,
        _mdl.auth,
        _mdl.acl,
    (req, res, next) => {
        const schema = new _schema(req.params.object).init(req, res, next);

        if(schema)
            schema.remove(req.params.id);
    });

};