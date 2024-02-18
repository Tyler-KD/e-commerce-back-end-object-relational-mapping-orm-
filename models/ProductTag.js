const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    // Defines columns id, product_id, and tag_id
    id: {
      // Sets data type as Integer
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      },
      product_id: {
        // Sets data type as Integer
        type: DataTypes.INTEGER,
        // References the product model's id
        references : {
          model: 'product',
          key: 'id',
        },
      },
      tag_id: {
        // Sets data type as Integer
        type: DataTypes.INTEGER,
        // References the tag model's id
        references: {
          model: 'tag',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
