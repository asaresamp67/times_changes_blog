import React from 'react'
//import logo from './logo.svg';
import './App.css'
import Home from './container/home/Home'
import Header from './components/header/Header'
import { Hero } from './components/Hero/Hero'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Home />
    </div>
  )
}

export default App
