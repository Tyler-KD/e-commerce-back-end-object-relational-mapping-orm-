// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // Defines columns id, product_name, price, stock, and category_id
  id: { 
    // Sets data type as Integer
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,    
  },
  product_name: {
    // Sets data type as String
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    // Sets data type as Decimal
    type: DataTypes.DECIMAL,
    allowNull: false,
    // Validates that the value is a decimal
    validate: {
      // Checks for any numbers
      isDecimal: true, 
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // Set a default value of 10
    defaultValue: [10],
    // Validates that the value is numeric
    validate: {
      // Will only allow numbers
      isNumeric: true,
    },
  },
  // Foreign Key
  category_id: {
    type: DataTypes.INTEGER,
    // References the category model's id
    references: {
      model: 'category',
      key: 'id',
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
