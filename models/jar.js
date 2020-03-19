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
        deleteBox: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, 
        eventURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventImage: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        day: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        time: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        venueName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        state: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        } 

    })
    return Jar;
}
