const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// find all products
router.get('/', async (req, res) => {
// get all products from the product table
try{
  const productData = await Product.findAll({
    include: [{ model: Category }],
    include: [{ model: Tag, through: ProductTag }],
  })
  // 200 status code means the request is successful
  res.status(200).json(productData);
} catch (err) {
  // 500 status code means the server encountered an unexpected condition
  // that prevented it from fulfilling the request
  res.status(500).json(err);
}
});

// find one product
router.get('/:id', async (req, res) => {
  // get a single product by its `id` value from the product table
  try{
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
      include: [{ model: Tag, through: ProductTag }],
    })
    if (!productData) {
      // 404 status code means the server could not understand the request
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', (req, res) => {
  // All the fields that can be updated and the data attached to the request body.
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
//  Create a new product by its 'product_name,' 'price,' 'stock,' and 'tagIds' from the product table
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        // Multiple rows can be created with 'bulkCreate()' and an array
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    // Sends the productTagIds as a json response
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  // updates the products based on the 'id' given in the request parameters
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        
        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });

            // figure out which ones to remove
          const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);
                  // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// delete a product
router.delete('/:id', async (req, res) => {
  // Looks for the products based on the 'id' given in the request parameters and deletes the instance from the database
try {
  const productData = await Product.destroy({
    where: {
      id: req.params.id,
    }
  });
  if (!productData) {
    res.status(404).json({ message: 'No product found with that id!' });
    return;
  }
  res.status(200).json(productData);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
