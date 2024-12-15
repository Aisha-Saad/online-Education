

import React from 'react'
import { blog } from '../../dummydata'
import "./blog.css"

const BlogCard = () => {
  return (
    <>

    {blog.map((val)=>{
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
    
    </>
  )
}

export default BlogCard