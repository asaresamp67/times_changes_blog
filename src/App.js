import React from 'react'
//import logo from './logo.svg';
import './App.css'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import { Switch, Route } from 'react-router-dom'
import ContactUs from './container/contactUs/ContactUs'
import Home from './container/home/Home'
import Post from './container/post/Post'
import AboutUs from './container/aboutUs/AboutUs'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route exact path='/post/:postId' component={Post} />
        <Route exact path='/about-us' component={AboutUs} />
      </Switch>
    </div>
  )
}

export default App
