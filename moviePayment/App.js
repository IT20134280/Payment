import React from 'react'
import { useState, useRef } from "react";
import BookingDetails from "./components/BookingDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import UserDetails from "./components/UserDetails";
import ReactToPrint from "react-to-print";
import  "./components/PDF.css";
import  done  from "./components/img/done.png";
import Head from "./components/Head";

const App = () => {

    
    const componentRef = useRef();

    const [showInvoice, setShowInvoice] = useState(false);

    const handlePrint = () => {
        window.print()
    }
    return (
        <>
            <main className="invoice__preview bg-white p-5 rounded"  >
                 
                {showInvoice ? (
                    <>
                        <ReactToPrint trigger={() => <button class="button">Print / Download</button>}
                            content={() => componentRef.current} />


                        <div ref={componentRef} class="formstyle">
                             
                            {/*header */}
                            <Header handlePrint={handlePrint} />

                            {/*booking details */}
                            <BookingDetails />

                            {/*user details */}
                            <UserDetails  />

                            {/*notes */}
                            <Notes />

                            {/*date */}
                            <Dates />

                            {/*footer */}
                            <Footer />
                        </div>
                    </>
                    
                ) : (
                    <div>
                        <Head />
                          <img class="img-2"  src={done} />
                        <h1 class="textstyle-1">You successfully created your booking</h1>
                        <h3 class="textstyle-2">To print your booking</h3>
                        <button class="button"  onClick={() => setShowInvoice(true)}>Generate PDF</button>

                    </div>
                )}

            </main>
        </>
    )
}

export default App