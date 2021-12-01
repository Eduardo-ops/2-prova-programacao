module.exports = (sequelize, DataTypes) => {
    const Material = sequelize.define('Material', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        quantidade: DataTypes.STRING,
        valor: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true
    })
    return Material
}