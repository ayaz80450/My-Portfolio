import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Md. Ayaz,</span> Frontend Developer based in India.</h1>
      <p>I'm a Frontend Developer , India with 2 years of experience in  companies like Maxsys Technology.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        </div>
        <div className="hero-resume" offset={50} href='#my resume'>
          <a href="https://drive.google.com/file/d/1hWGcCMwHKJigCfLUODNthMSGTa2x_Eoy/view?usp=sharing" className='resume-link'>
            My resume
          </a>
      </div>
    </div>
  )
}

export default Hero
