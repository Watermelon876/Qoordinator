const database = require('../../config/database').database; 

const Archive = database.define('archive', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    }
    num_joined: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
    num_required: DataTypes.INTEGER.UNSIGNED,
    created_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    signup_emails: DataTypes.ARRAY( DataTypes.TEXT ),
    trigger_type: DataTypes.ENUM( 'capacity_reached', 'date_with_capacity')
});

module.exports.Archive = Archive;
