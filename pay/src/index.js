import React from 'react';
import ReactDOM from 'react-dom/client';
//import PaymentDetails from "./moviePayment/PaymentDetails";
//import PaymentDisplay from "./adminPayment/PaymentDisplay";
//import App from './App';
//mport App from "./moviePayment/App";
import CreditCardForm from './moviePayment/components/CreditCardForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreditCardForm />
  </React.StrictMode>
);

 