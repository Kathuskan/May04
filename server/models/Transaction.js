module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define("Transaction", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Transaction;
  };
  