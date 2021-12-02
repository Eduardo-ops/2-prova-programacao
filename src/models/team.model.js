module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        estado: DataTypes.STRING,
        sites: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true
    })
    return Team
}