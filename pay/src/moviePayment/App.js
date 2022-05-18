import React from 'react'
import { useState, useEffect } from "react";
import BookingDetails from "./components/BookingDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import UserDetails from "./components/UserDetails";

const App = () => {
  
 

   
    const [showInvoice, setShowInvoice] = useState(false);

    const handlePrint = () => {
        window.print()
    }
    return (
        <>
            <main>
                {showInvoice ? (
                    <div>
                        {/*header */}
                        <Header />

                        {/*booking details */}
                        <BookingDetails />

                        {/*user details */}
                        <UserDetails />


                        {/*notes */}
                        <Notes />

                        {/*date */}
                        <Dates />

                        {/*footer */}
                        <Footer handlePrint={handlePrint} />
                    </div>
                ) : (
                    <div>
                        <p>To Download</p>,
                        <button onClick={() => setShowInvoice(true)}>Download</button>

                    </div>
                )}
            </main>
        </>
    )
}

export default App