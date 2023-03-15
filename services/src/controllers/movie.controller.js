const express = require("express");
const movieSchema = require("../models/movie");

const createMovie = async (req, res) => {
  const movie = movieSchema(req.body);
  const searchMovie= await movieSchema.aggregate([{$match:{tittle:{$eq:movie.tittle}}}])
  const[body]=searchMovie;
  if(body){
    console.log(searchMovie);
    res.status(400).json({message:"Error película ya registrada"});
  }else{
    const saveMovie = await movie.save();
    res.status(200).json({message:"Pelicula registrada con exito",movie});
  }
};

const getMovies = async (req, res) => {
  const listMovies = await movieSchema.find();
  res.json(listMovies);
};

const getById = async (req, res) => {
  const movie = await movieSchema.findById(req.params.id);
  res.json(movie);
};

const getByName = async (req, res) => {
    const tittle=req.body.tittle;
    const movie = await movieSchema.aggregate([{ $match:{tittle:{$eq:tittle}}}]);
  res.json(movie);
};
const update = async (req, res) => {
  const movie = await movieSchema.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  });
  res.status(200).json({ message: "Pelicula actualizada" });
};

module.exports = {
  getMovies,
  createMovie,
  getById,
  getByName,
  update,
};
