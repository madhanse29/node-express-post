// const express = require('express');

import  express, { request, response }  from 'express';
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import { moviesRouter} from './routes/movies.js';
import cors from "cors";

import { usersRouter } from './routes/users.js';


dotenv.config();
const app = express();

// const movies = [
//     {
//       "id": "100",
//       "name": "Iron man 2",
//       "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       "rating": 7,
//       "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//       "trailer": "https://www.youtube.com/embed/wKtcmiifycU",
//       "language":"english"
//     },
//     {
//       "id": "101",
//       "name": "No Country for Old Men",
//       "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       "rating": 8.1,
//       "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//       "trailer": "https://www.youtube.com/embed/38A__WT3-o0",
//       "language":"english"
//     },
//     {
//       "id": "102",
//       "name": "Jai Bhim",
//       "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       "rating": 8.8,
//       "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA",
//       "language":"tamil"
//     },
//     {
//       "id": "103",
//       "name": "The Avengers",
//       "rating": 8,
//       "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//       "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8",
//       "language":"english"
//     },
//     {
//       "id": "104",
//       "name": "Interstellar",
//       "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       "rating": 8.6,
//       "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//       "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E",
//       "language":"english"
//     },
//     {
//       "id": "105",
//       "name": "Baahubali",
//       "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       "rating": 8,
//       "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//       "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI",
//       "language":"telugu"
//     },
//     {
//       "id": "106",
//       "name": "Ratatouille",
//       "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       "rating": 8,
//       "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//       "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w",
//       "language":"english"
//     }
//   ]

const PORT = process.env.PORT;
app.use(cors())//3rd party middleware
app.use(express.json());//middleware

//const MONGO_URL ="mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

//mongodb+srv://madhan:<password>@cluster0.ycj3s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

async function createconnection(){
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("moongo connnected")
  return client;
}

export const client = await createconnection();


app.get('/', (request,response)=>{
    response.send("hello,d????");
});
// app.get('/movies', (request,response)=>{
//     response.send(movies);
// });



app.use ("/movies",moviesRouter);
app.use ("/users",usersRouter);


// const recipes=[
//   {name:"Briyani",
// pic:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/baxmtz4go4slb7bm70op"}
// ,{name:"Mandi",
// pic:"https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2020-09/chicken%20mandi%20mob.jpg"},
// {name:"Shawarma",
// pic:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ftqzzih4f52e1anjyjxr"},
// {name:"Beef fry",
// pic:"https://1.bp.blogspot.com/-4TwWAI1qHkI/Wu7nL8HJzMI/AAAAAAAAW_Q/Q9-9Nh_xLKEJfF85EollzXZgDWiS3z3uQCLcBGAs/s1600/beef%2Bfry%2B1i.JPG"}
// ]


app.get("/recipes",async (request,response)=>{
const recipes = await client
  . db("b28wd")
  .collection("recipes")
  .find({})
  .toArray();

  response.send(recipes)
  ;
});

app.post("/recipes",async (request,response)=> {
  const data = request.body;
  // console.log(data);
  const result = await client
  .db("b28wd")
  .collection("recipes")
  .insertMany(data)
  response.send(result);
})


app.listen(PORT,()=>console.log("app is started",PORT));


