const express = require("express");
const fs = require("fs");
const app = express();
// app.get('/',(req,res)=>{
//     res.status(200).send('hello from the server side');
// });
// app.post('/',(req,res)=>{
//     res.send('you can post to this url')
// })

const users = JSON.parse(fs.readFileSync("./data.json"));

app.use(express.json()); //middleware

app.get("/api/v1/users", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});

app.get("/api/v1/users/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const user = users.find((el) => el.id === id);

  if (id > users.length ) {
    return res.status(404).json({
      status: "fail",
      message: "invalid id",
    });
  }
  else{
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  })};
});

app.post("/api/v1/users", (req, res) => {
  console.log(req.body);
  const newid = users[users.length - 1].id + 1;
  const newuser = Object.assign({ id: newid }, req.body);

  users.push(newuser);

  fs.writeFile("./data.json", JSON.stringify(users), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        user: newuser,
      },
    });
  });
});

const port = 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
