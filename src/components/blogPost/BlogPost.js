import React from 'react'
import './blogPost.css'
import Card from '../card/Card'
const BlogPost = () => {
  return (
    <div className='blogPost'>
      <Card>
        <div className='blogPost_header'>
          <span className='blogPost_category'>Featured</span>
          <h2 className='blogPost_title'>Fatal is not for children of God</h2>
          <span className='blogPost_author'>
            Posted on July 7, 2020 by Emmanuel Opoku
          </span>
        </div>
        <div className='blogPost_img'>
          <img src={require('../../images/image_9.jpg')} alt='blog_img' />
        </div>
        <div className='blogPost_content'>
          <h3>Post Title</h3>
          <p>Mystery of Exemption</p>
        </div>
      </Card>
    </div>
  )
}

export default BlogPost
