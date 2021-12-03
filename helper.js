import { client } from './index.js';
import { ObjectId } from 'mongodb';
import bcrypt from "bcrypt";
import { usersRouter } from './routes/users.js';




export async function createUser(data) {
  return await client
    .db("b28wd")
    .collection("users")
    .insertOne(data);
}
export async function deleteMovies(id) {
  return await client
    .db("b28wd")
    .collection("movies")
    .deleteOne({ id: id });
}
export async function getMoviesbyid(id) {
  return await client
    .db("b28wd")
    .collection("movies")
    .findOne({ id: id });
}
export async function getUserByName(username) {
  return await client
    .db("b28wd")
    .collection("users")
    .findOne({ username:username });
}
export async function editMovies(id, data) {
  return await client
    .db("b28wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}

export async function genPassword(password){
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  console.log(salt);
  const hashedPassword = await bcrypt.hash(password,salt);
  console.log(hashedPassword)
  return hashedPassword;
}
