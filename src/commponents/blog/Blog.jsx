import React from 'react'
import BlogCard from './BlogCard'
import Back from '../commen/back/Back'

const Blog = () => {
  return (
    <>
    <Back title="Bloge Posts" />
     <section className='blog padding'>
       <div className="container grid2">
       <BlogCard/>
       </div>

     </section>
     
    </>
  )
}

export default Blog