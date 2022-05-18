import React from 'react';
import Axios from "axios";
import { useState,useEffect } from "react";
//import {paymentList, setPaymentList} from "./PaymentDetails";

const PaymentDisplay = () => {
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const [paymentList, setPaymentList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/paymentdetails").then((response) => {
          //console.log(response.data);   
            setPaymentList(response.data);
            //console.log(response.data);
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

    }, []);
     
       
            
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
  
}

export default PaymentDisplay;
