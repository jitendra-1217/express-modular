

var Config = function() {

    return {
        getMongodbConnUrl: function(host, db) {

            if (host === undefined) host = 'localhost';
            if (db === undefined)   db = 'sampledb';

            return 'mongodb://' + host + '/' + db
        }
    }
};

module.exports = Config;
