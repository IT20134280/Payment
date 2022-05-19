import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";

const UserDetails = () => {
   

  const [paymentList, setPaymentList] = useState([]);

     useEffect(() => {
      
       Axios.get("http://localhost:8000/paymentdetails").then((response) => {
        
           setPaymentList(response.data);
         
          console.log(paymentList)
       })
      
   }, []);
 

 
    
    {paymentList.map((val) => {
      
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
export default UserDetails;
