module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users", {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    return Users;
  };
  