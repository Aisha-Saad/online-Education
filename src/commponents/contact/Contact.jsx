import React from 'react'
import Back from '../commen/back/Back'

const Contact = () => {
  const map ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475320.88064776146!2d39.53874130891381!3d21.45107355941216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3ce876e36662d%3A0x8d489ae6ea02c1e5!2z2YHZhtiv2YIg2KfZhNmG2KjYp9ix2YrYsyDYp9mE2YXYp9iz2Yo!5e0!3m2!1sar!2ssa!4v1734299237213!5m2!1sar!2ssa"
  return (
    <>
    <Back  title="contact us"/>
    <section className='contact padding'>
      <div className="container shadow flesSB">
        <div className="left row">
          <iframe src={map} ></iframe>
        
        </div>
        <div className="right row">
          <h1>Contact us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex culpa minima nam, quidem aspernatur explicabo necessitatibus expedita libero animi beatae deleniti accusantium quisquam iste alias fugiat iure magnam nobis provident saepe maiores.</p>
          <div className="items grid2">
            <div className="box">
              <h4>Address :</h4>
              <p>saudi arabia jeddeh</p>
            </div>
            <div className="box">
              <h4>Email:</h4>
              <p>info@gmail.com</p>
            </div>
            <div className="box">
              <h4>Phone:</h4>
              <p>0096555550000</p>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Contact