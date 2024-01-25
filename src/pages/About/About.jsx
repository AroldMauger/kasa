import React from 'react'
import "./About.scss";
import Collapse from '../../components/Collapse/Collapse.jsx';
import AboutBanner from '../../components/AboutBanner/AboutBanner.jsx'

function About() {
  return (
    <>
    <AboutBanner/>
    <div className='about_container'>
        <Collapse/>
        <Collapse/>
        <Collapse/>
        <Collapse/>
    </div>
        
    </>  )
}

export default About