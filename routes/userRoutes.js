const router = require('express').Router();
const {registerUser,getUser}= require('../controllers/registerController');
const {loginUser,profile, editUser}= require('../controllers/loginController');
const {isAuthorized}= require('../middleware/auth');

router.post('/register',registerUser);
router.get('/user',getUser);
router.post('/login',loginUser);   
router.get('/profile',isAuthorized,profile);
router.put('/edit',editUser);


module.exports = router;