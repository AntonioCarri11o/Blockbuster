const express= require("express");
const {getMovies, createMovie,getById,getByName,update, getSorter, getBytags} =require('../controllers/movie.controller');
const {verifyToken}= require('../middlewares/authJwt.js');
const { upload } = require("../middlewares/fileUpload");
const router=express.Router();

//Crear Pelicula
router.post('/movie/',createMovie);
router.get('/movie/',getMovies);
//router.get('/images/',getImages)
router.get('/movie/sorter/:field/:order',getSorter);
router.get('/movie/getBytags/:field/:name/:orderField/:order',getBytags)
router.get('/movie/:id',getById);
router.post('/movie/getbyname/',getByName);
router.put('/movie/',update);

module.exports=router;