const router = require('express').Router();
const {registerUser,getUser}= require('../controllers/registerController');
const {loginUser,profile, editUser, getRecipe}= require('../controllers/getReciperController');
const {isAuthorized}= require('../middleware/auth');
const { getFavorite } = require('../controllers/favoriteController');

router.get('/getRecipe',getRecipe);   
router.post('/favorite',getFavorite);

module.exports = router;