const express = require("express");
const app = express();
const port = 5000;

//connect to database and get table
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "andre",
  password: "@V1ct0rg",
  database: "CRM",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  //get all data from database
  connection.query(
    "SELECT * FROM tb_jogadores order by pontos DESC",
    function (err, result) {
      if (err) throw err;
      res.send(result);
      console.log(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Ouvindo porta ${port}`);
});
