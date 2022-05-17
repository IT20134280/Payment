 
import React, { useState, useEffect } from "react";
import Axios from "axios";

function PaymentDetails(){
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const [paymentList, setPaymentList] = useState([]);

    const addPayment = () => {
        Axios.post("http://localhost:8000/api/insert", {
          name:name,
          phonenumbe:phonenumber,
          email:email,
        }).then(() => {
          alert("successful insert");
        });
    };   
     

    return (
        <div className="App">
          <div className="information">
            <label>Full Name:</label>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label>Mobile:</label>
            <input
              type="text"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
            <label>Email:</label>
            <input
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
             
             
            <button onClick={addPayment}>Next</button>
          
              
            
          </div>
        </div>
      );
    }
    
    export default PaymentDetails;

