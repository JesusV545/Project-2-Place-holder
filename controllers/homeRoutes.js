const router = require('express').Router();
const { User } = require('../models');
// const withAuth = require('../utils/auth');


//copied some code from mini project that could be reused and changed
router.get('/', async (req, res) => {
    try {
      res.render('login')
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/signUp', async (req, res) => {
    try {
      res.render('signUp');
    } 
    catch (err) {
      res.status(500).json(err);
    }
  })
  
  // router.get('/user/:id', async (req, res) => {
  //   try {
  //     const userData = await User.findByPk(req.params.id, {
  //       include: [
  //         {
  //           model: User,
  //           attributes: ['name'],
  //         },
  //       ],
  //     });
  
  //     const user = userData.get({ plain: true });
  
  //     res.render('project', {
  //       ...project,
  //       logged_in: req.session.logged_in
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  // // Use withAuth middleware to prevent access to route
  // //ADD THE AUTH
  // router.get('/profile', async (req, res) => {
  //   try {
  //     // Find the logged in user based on the session ID
  //     const userData = await User.findByPk(req.session.user_id, {
  //       attributes: { exclude: ['password'] },
  //       include: [{ model: Project }],
  //     });
  
  //     const user = userData.get({ plain: true });
  
  //     res.render('profile', {
  //       ...user,
  //       logged_in: true
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  // router.get('/login', (req, res) => {
  //   // If the user is already logged in, redirect the request to another route
  //   if (req.session.logged_in) {
  //     res.redirect('/profile');
  //     return;
  //   }
  
  //   res.render('login');
  // });



module.exports = router;
