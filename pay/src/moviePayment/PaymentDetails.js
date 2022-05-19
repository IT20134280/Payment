 
import React, { useState } from "react";
 
import Axios from "axios";
import "./Payment.css";
import CreditCardForm from "./components/CreditCardForm";
 
 

function PaymentDetails(){
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
 

   const [paymentList, setPaymentList] = useState([]);
    
   const addPayment = () => {
    Axios.post("http://localhost:8000/create", {
      name:name,
      phonenumber:phonenumber,
      email:email,
    }).then(() => {
       setPaymentList([
         ...paymentList,
         {
          name:name,
          phonenumber:phonenumber,
          email:email,
         },
       ]);
    });
};  

const getPayment = () => {
  Axios.get("http://localhost:8000/paymentdetails").then((response) => {
    //console.log(response.data);   
      setPaymentList(response.data);

    });
};


    return (
        <div className="form-style-1">
          <div className="form-style-8">
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
             
             
            <button className="button" onClick={addPayment}>Next</button>
            
            </div>
            <div>
            <button onClick={getPayment}>Show </button>
            
            {paymentList.map((val, key) => {
          return  (
            <div>
              <div>
              <h3>Name: {val.name}</h3>
              <h3>Mobile: {val.phonenumber}</h3>
              <h3>Email: {val.email}</h3>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );

      } 
    export default PaymentDetails;

