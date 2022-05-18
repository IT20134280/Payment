const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "password",
    database: "payment",
  });
  app.post("/create", (req, res) => {
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    
  
    db.query(
      "INSERT INTO paymentdetails (name, phonenumber, email) VALUES (?,?,?)",
      [name, phonenumber, email],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.get("/paymentdetails", (req, res) => {
      db.query("SELECT * FROM paymentdetails", (err, result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          
      }
    });
  });

app.listen(8000, () => {
    console.log("server is running on port 8000");
  });