import React from 'react'
import "./PDF.css";

const Dates = () => {
    const showdate=new Date();
    const displaytodaydate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
  return (
    <>
    <article>
        <ul>
            <li>
                <span>Payment Transaction No -</span>
               
                </li>
                 
            <li><span>Transcation Date -</span>
            <input class="date" type="text" value={displaytodaydate} readonly="true" /> 
            </li>
        </ul>
    </article>
    
</>
  )
}

export default Dates
