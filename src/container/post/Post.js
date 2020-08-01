import React from 'react'
import './post.css'
import BlogPost from '../../components/blogPost/BlogPost'
import SideBar from '../../components/sidebar/SideBar'
export default function Post(props) {
  console.log(props)
  return (
    <section className='container'>
      <BlogPost />
      <SideBar />
    </section>
  )
}
