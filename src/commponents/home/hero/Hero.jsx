import React from 'react'
import "./hero.css"
import Title from '../../commen/title/Title'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <Title subtitle=" Welcom to Acdamia" title="Best online Education"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, laudantium ea. Minima porro maiores delectus debitis velit ut corrupti ex.</p>
            <div className="button">
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>

              <button >
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin">

      </div>
    </>
  )
}

export default Hero