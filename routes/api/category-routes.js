const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// This route uses async/await with try/catch for errors
// along with HTTP status codes
router.get('/', async (req, res) => {
  // Get all categories from the category table
  try{
  const categoryData = await Category.findAll({
    include: [{ model: Product }],
  });
  // 200 status code means the request is successful
  res.status(200).json(categoryData);
} catch (err) {
  // 500 status code means the server encountered an unexpected condition
  // that prevented it from fulfilling the request
  res.status(500).json(err);
}
});

// find one category by its 'id' value
router.get('/:id', async (req, res) => {
  // get one category by its `id` value from the category table
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
    if (!categoryData) {
      // 400 status code means the server could not understand the request
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  // create a new category by its 'name' name from the category table
  try {
    const locationData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its 'id' value
router.put('/:id', async (req, res) => {
  // update a category by its `id` value from the category table
  try {
    const categoryData = await Category.update(req.body, {
      // Updates the category based on the 'id' given in the request parameters
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its 'id' value
router.delete('/:id', async (req, res) => {
  // Looks for the categories based on the 'id' given in the request parameters and deletes the instance from the database
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
