import React from 'react'
import './sidebar.css'
import Card from '../card/Card'
const SideBar = () => {
  return (
    <div className='sidebar'>
      <Card>
        <div className='sidebar_title'>about us</div>
        <div className='sidebar_image'>
          <img src={require('../../images/image_6.jpg')} alt='sidebar_img' />
        </div>
      </Card>
      <div></div>
      <Card>
        <div className='sidebar_title'>social media</div>
      </Card>
      <div></div>
      <Card>
        <div className='recent_posts'>
          <div className='sidebar_title'>recent post</div>
          <div className='recent_post'>
            <h3>Post Title</h3>
            <span>01.08.2020</span>
          </div>
          <hr />
          <div className='recent_post'>
            <h3>Post Title</h3>
            <span>01.08.2020</span>
          </div>
          <hr />
        </div>
      </Card>
    </div>
  )
}

export default SideBar
