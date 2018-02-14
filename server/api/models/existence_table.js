const database = require('../../config/database').database;

database.define('valid_ids', {
    valid_ids: DataTypes.ARRAY( DataTypes.UUID )
});

