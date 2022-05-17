const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "PaymentDetailDB",
});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    db.query(
        "INSERT INTO  PaymentDetails(name, phonenumber, email) VALUES(?,?,?)",
        [name, phonenumber, email],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Values Inserted");
            }
        }
    );
});

//get data
app.get("/PaymentDetails", (req,res) => {
    db.query("SELECT * FROM PaymentDetails", 
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.listen(8000, () =>{
    console.log("working");
});