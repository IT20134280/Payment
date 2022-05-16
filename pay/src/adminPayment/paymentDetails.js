import "./App.css";
import { useState } from "react";
import Axios from "axios";

function paymentDetails(){
    const [Name, setName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Email, setEmail] = useState("");

    const [paymentList, setPaymentList] = useState([]);

    const addPayment = () => {
        Axios.post("http://localhost:8000/create", {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
        }).then(() => {
            setPaymentList([
                ...paymentList,{
                    Name: Name,
                    PhoneNumber: PhoneNumber,
                    Email: Email,
                },
            ]);
        });
    };

    const getPayment = () => {
        Axios.get("http://localhost:8000/PaymentDetails").then((response) => {
            setPaymentList(response.data);
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
          <div className="employees">
            <button onClick={getPayment}>Show </button>
    
            {paymentList.map((val, key) => {
              return (
                <div className="employee">
                  <div>
                    <h3>Name: {val.Name}</h3>
                    <h3>Mobile: {val.PhoneNumber}</h3>
                    <h3>Email: {val.Email}</h3>
                  </div>
                  <div>
                    
                    
                     
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
    export default paymentDetails;

