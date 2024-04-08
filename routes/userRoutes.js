const router = require('express').Router();
const {getNamaMakanan}= require('../controllers/getNamaMakananControllers');
const {getRecipe}= require('../controllers/getReciperController');
const {getImage}= require('../controllers/getImageControllers');
const {isAuthorized}= require('../middleware/auth');
const { getFavorite } = require('../controllers/favoriteController');

router.get('/Recipe',getRecipe);   
router.get('/favorite',getFavorite);
router.get('/namaMakanan', getNamaMakanan)
router.get('/getImage', getImage);


module.exports = router;