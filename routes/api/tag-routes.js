const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
// Get all tags from the tag table
try{
  const tagData = await Tag.findAll({
    include: [{ model: Product }],
  });

  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

// find one tag by its 'id' value
router.get('/:id', async (req, res) => {
// find one tag by its 'id' value from the tag table
try {
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  })
  if (!tagData) {
    res.status(404).json({ message: 'No tag found with that id!' });
    return;
  }
  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

// create a new tag
router.post('/', async (req, res) => {
  // create a new tag by its 'name' name from the tag table
  try {
    const locationData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag by its 'id' value
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value from the tag table
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a tag by its 'id' value
router.delete('/:id', async (req, res) => {
  // Looks for the tags based on the 'id' given in the request parameters and deletes the instance from the database
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
