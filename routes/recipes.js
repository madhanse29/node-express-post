router.post("/addrecipe",async (request,response)=> {
    const data = request.body;
    // console.log(data);
    const result = await client.db("b28wd").collection("recipes").insertMany(data)
    response.send(result);
  })
  