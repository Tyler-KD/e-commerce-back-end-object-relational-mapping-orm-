// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// BelongsTo Association is capable of creating both One-To-One and One-To-Many relationships
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
// The HasMany association is used to create a One-To-Many relationship between two models
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
// The BelongsToMany association is used to create a Many-To-Many relationship between two models
// Because foreign keys can only point to a single row, Many-To-Many relationships are implemented using a junction table (called through table in Sequelize)
Product.belongsToMany(Tag, { 
  through: ProductTag,
  foreignKey: 'product_id',
 });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: ProductTag,
  foreignKey: 'tag_id',
 });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
