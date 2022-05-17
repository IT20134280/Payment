 
import { useState } from "react";
import Axios from "axios";

function PaymentDetails(){
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const [paymentList, setPaymentList] = useState([]);

    const addPayment = () => {
        Axios.post("http://localhost:8000/create", {
            name: name,
            phonenumber: phonenumber,
            email: email,
        }).then(() => {
            setPaymentList([
                ...paymentList,{
                    name: name,
                    phonenumber: phonenumber,
                    email: email,
                },
            ]);
        });
    };

    const getPayment = () => {
        Axios.get("http://localhost:8000/PaymentDetails").then((response) => {
            setPaymentList(response.data);
        });
    };

    const displayInfo = () => {
        console.log(name + phonenumber + email);
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
            <button onClick={displayInfo}>Show </button>
    
            {paymentList.map((val, key) => {
              return (
                <div className="employee">
                  <div>
                    <h3>Name: {val.name}</h3>
                    <h3>Mobile: {val.phonenumber}</h3>
                    <h3>Email: {val.email}</h3>
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
    
    export default PaymentDetails;

