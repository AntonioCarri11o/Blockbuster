const express= require('express');
const {createGame, getGames, deleteGame, update}= require('../controllers/game.controller');
const {verifyToken}= require('../middlewares/authJwt.js');
const {upload}= require('../middlewares/fileUpload');
const router=express.Router();

router.post('/game/',createGame);
router.get('/game/',getGames);
router.put('/game/',update)
router.delete('/game/:id',deleteGame);

module.exports=router;