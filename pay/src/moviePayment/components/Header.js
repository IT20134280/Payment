import React from 'react'
import QRcode from "./img/QRcode.png";
import "./PDF.css";

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <h2>Payment</h2>
                    <ul>
                        <li>
                        <h2>Beast</h2>
            <p>savoy 3D Doolby ATMOS - Wellawatte</p>
            <h3>Tickets 3</h3>
                        </li>
                        <li>
                        <img class="img"  src={QRcode} />
                        </li>
                    </ul>
                    
                </div>
            </header>
        </>
    )
}
