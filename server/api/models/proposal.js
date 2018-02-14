const database = require('../../config/database').database; 

const Proposal = database.define('proposal', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    }
    message: DataTypes.TEXT,
    num_joined: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
    num_required: DataTypes.INTEGER.UNSIGNED,
    is_public: DataTypes.BOOLEAN,
    archive_safe: DataTypes.BOOLEAN,
    end_date: DataTypes.DATE,
    signup_emails: DataTypes.ARRAY( DataTypes.TEXT ),
    trigger_type: DataTypes.ENUM( 'capacity_reached', 'date_with_capacity')
});

module.exports.Proposal = Proposal;
