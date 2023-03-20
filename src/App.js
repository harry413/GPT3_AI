import React from 'react'

import {  Navbar,  Brand, CTA } from './components';
import { Blog, Features, Footer, Header,WhatGPT3, Possibility } from './container';
import './app.css';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App;