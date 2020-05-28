module.exports = (sequelize, DataTypes) => {
    const Jar = sequelize.define('jar', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        eventID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventImageURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventDateTime: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        // eventDay: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }, 
        // eventTime: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }, 
        venueName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        venueAddress: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        venueCity: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        venueState: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        venueZip: {
            type: DataTypes.STRING,
            allowNull: false
        } 

    })
    return Jar;
}
