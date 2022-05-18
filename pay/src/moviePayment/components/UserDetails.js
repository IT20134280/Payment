import React from 'react'

export default function UserDetails({name, phonenumber, emails}) {
  return (
    <>
    <section>
            <ul>
              <li><span>Customer Name-</span></li>
              <li><span>Customer Mobile-</span></li>
              <li><span>Customer Email-</span></li>
            </ul>
          </section>
    </>
  )
}
