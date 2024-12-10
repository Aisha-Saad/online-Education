import React from 'react'
import Title from '../commen/title/Title'

import{ homeAbout} from '../../../src/dummydata'
import AWrapper from './AWrapper'
import "./about.css"

const AboutCard = () => {
  return (
    <>
    <section className='aboutHome'>
      <div className="container flexSB">
        <div className="left row">
          <img src="./images/hero.jpg" alt="" />
        </div>
        <div className="right row">
          <Title subtitle="Learn anything" title="Benefits about online learning "/>
          <div className="item">
            {homeAbout.map((val)=>
            <div className="item flexSB">
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
              </div>
            </div>

            )}
          </div>
        </div>
      </div>
    </section>
    <AWrapper/>
    </>
  )
}

export default AboutCard