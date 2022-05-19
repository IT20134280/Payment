import React from 'react'
import QRcode from "./img/QRcode.png";
import "./PDF.css";

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <img class="img" src={QRcode} />
                 </div>
            </header>
        </>
    )
}
