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

    const getPayments = () => {
        Axios.get("http://localhost:8000/PaymentDetails").then((response) => {
            setPaymentList(response.data);
        });
    };
    


}