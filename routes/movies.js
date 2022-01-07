import express from "express";
import { getMoviesbyid, deleteMovies, editMovies } from "../helper.js";
import { client } from '../index.js';
import { auth } from "../middleware/auth.js";
const router = express.Router();




router
.route("/").get(async (request,response)=>{

    const filter = request.query;
    if(filter.rating){
      filter.rating =parseInt(filter.rating)
    }
  
    // console.log(language,rating)

    // let filterMovies= movies; 

    // if (language) {
    //     filterMovies = filterMovies.filter((mv)=> mv.language === language)
    // }
    //    if (rating){
    //    filterMovies = filterMovies.filter((mv)=> mv.rating === +rating)
    //    }
    const filterMovies = await client.db("b28wd").collection("movies").find(filter).toArray();
    
    response.send(filterMovies);
    
 
});
router.post("/",async (request,response)=> {
  const data = request.body;
  // console.log(data);
  const result = await client.db("b28wd").collection("movies").insertMany(data)
  response.send(result);
})


router.get('/:id', async (request,response)=>{
    const {id} = request.params;

const movie = await getMoviesbyid(id)
    // const movie = movies.find((mv)=> mv.id === id);
    movie
   ? response.send(movie)
   : response.status(404).send({message:"no matching"})
});


router.delete('/:id', async (request,response)=>{
    const {id} = request.params;

const result = await deleteMovies(id)
    // const movie = movies.find((mv)=> mv.id === id);
   result.deletedCount > 0
   ? response.send(movie)
   : response.status(404).send({message:"no matching"})
});
router.put('/:id', async (request,response)=>{
    const {id} = request.params;
const data = request.body;
const result = await editMovies(id, data);
const movie = await getMoviesbyid(id)
    // const movie = movies.find((mv)=> mv.id === id);
 response.send(movie);
  //  ? response.send(movie)
  //  : response.status(404).send({message:"no matching"})
});

export const moviesRouter = router;