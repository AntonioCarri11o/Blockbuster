const express= require('express');
const {createGame, getGames, deleteGame, update, getSorter, getByTags}= require('../controllers/game.controller');
const {verifyToken}= require('../middlewares/authJwt.js');
const {upload}= require('../middlewares/fileUpload');
const router=express.Router();

router.post('/game/',createGame);
router.get('/game/',getGames);
router.get('/game/:field/:order/',getSorter)
router.get('/game/:field/:value/:orderField/:order',getByTags)
router.put('/game/',update)
router.delete('/game/:id',deleteGame);

module.exports=router;