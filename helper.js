import { client } from './index.js';

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
export async function editMovies(id, data) {
  return await client
    .db("b28wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
