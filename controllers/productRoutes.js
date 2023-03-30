const router = require('express').Router();
const { Product } = require('../models');

// route to get all products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll()
    // .then(console.log(productData))
      const products = productData.map((product) => product.get({ plain: true }));
      res.render('all', { products });
      console.log(products);
  } catch (error) {
    res.status(500).json(err);
  }

      });
  
  // route to get one product
  router.get('/:id', async (req, res) => {
    try{ 
        const productData = await Product.findByPk(req.params.id);
        if(!productData) {
            res.status(404).json({message: 'No products with this id!'});
            console.log("Problem 1");
            return;
        }
        const product = productData.get({ plain: true });
        res.render('product', {...product});
      } catch (err) {
        res.status(500).json(err);
      };     
  });

module.exports = router;