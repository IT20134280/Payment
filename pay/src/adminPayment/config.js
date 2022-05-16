const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "PaymentDetailDB",
});

app.post("/create", (req, res) => {
    const Name = req.body.Name;
    const PhoneNumber = req.body.PhoneNumber;
    const Email = req.body.Email;
    db.query(
        "INSERT INTO  PaymentDetails(Name, PhoneNumber, Email) VALUES(?,?,?)",
        [Name, PhoneNumber, Email],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Values Inserted");
            }
        }
    );
});


app.listen(8000, () =>{
    console.log("working");
});