import React from 'react'
import Title from '../commen/title/Title'
import { blog } from '../../dummydata'

const Hblog = () => {
  return (
    <>
     <section className='blog'>
      <div className="container">
        <Title subtitle="our blog" title= "recent from blog "/>
        <div className="grid2">
            {blog.slice(0,3).map((val)=>{
                return(
                  <div className="tiems shadow">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <div className="admin flesxSB">
                        <span>
                          <i className='fa fa-user'></i>
                          <label> {val.type}</label>
                        </span>
                        <span>
                          <i className='fa fa-calender-alt'></i>
                          <label> {val.data}</label>
                        </span>
                        <span>
                          <i className='fa fa-comments'></i>
                          <label> {val.com}</label>
                        </span>
                      </div>
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>

     </section>
    
    </>
  )
}

export default Hblog