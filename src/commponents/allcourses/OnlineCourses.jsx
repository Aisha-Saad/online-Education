import React from 'react'
import Title from '../commen/title/Title'
import { online } from '../../dummydata'

const OnlineCourses = () => {
  return (
    <>
    <section className='online'>
      <div className="container">
        <Title subtitle="COURES" title="Browse our online corses" />

        <div className="content grid3">
          {online.map((val)=>(
            <div className="box">
              <div className="img">
                {/* <img src= {val.cover} alt="" /> */}
                <img src= {val.hoverCover } className='show' alt='' />
              </div>
              <h1>{val.courseName}</h1>
              <span>{val.course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default OnlineCourses