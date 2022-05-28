import React from 'react'
import "./Header.css";

export default function Head() {
  return (
     <header className="Header">
         <nav className="nav">
             <a href="/" >Home</a>
             <a href="">Movies</a>
             <a href="/">About</a>
             <button>Logout</button>
         </nav>
     </header>
  )
}
