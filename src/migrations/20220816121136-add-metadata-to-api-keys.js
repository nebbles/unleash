'use strict';

exports.up = function (db, cb) {
    db.runSql(`ALTER TABLE api_tokens ADD COLUMN metadata JSONB;`, cb);
};

exports.down = function (db, cb) {
    db.runSql('ALTER TABLE api_tokens DROP COLUMN metadata;', cb);
};
