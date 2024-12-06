
import React from 'react'
import  "./header.css"


const Header = () => {
  return (
    <>
      <section className='head'>
        <div className="container flexSB">
          <div className="logo">
            <h1>Aisha</h1>
            <span>online eduction</span>
          </div>

          <div className="social">
          <i class="fa-brands fa-facebook icon"></i>
          <i class="fa-brands fa-instagram icon"></i>
          <i class="fa-brands fa-x-twitter icon"></i>
          <i class="fa-brands fa-whatsapp icon"></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header