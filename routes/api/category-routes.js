const router = require('express').Router();
const { Category, Product } = require('../../models');
// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // FIND ALL categories
  // be sure to INCLUDE its associated Products
  try {
    const categoryData = await Category.findAll({
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'stock', 'price']
      }
    })
    res.status(200).json(categoryData);
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // FIND ONE category by its `id` value
  // be sure to INCLUDE its associated Products
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'stock', 'price']
      }
    })
    res.status(200).json(categoryData);
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // CREATE a new category
  try {
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData);
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // UPDATE a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // DELETE a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

