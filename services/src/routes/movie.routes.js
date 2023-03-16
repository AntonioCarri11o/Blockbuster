const express= require("express");
const {getMovies, createMovie,getById,getByName,update} =require('../controllers/movie.controller');
const {verifyToken}= require('../middlewares/authJwt.js')
const router=express.Router();

//Crear Pelicula
router.post('/movie/',verifyToken,createMovie);
router.get('/movie/',verifyToken,getMovies);
router.get('/movie/:id/',verifyToken,getById);
router.post('/movie/getbyname/',verifyToken,getByName);
router.put('/movie/',verifyToken,update);

module.exports=router;