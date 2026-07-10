import React from 'react';
import ReactDOM from 'react-dom/client';
import photo from "./photo.png";
import "./style.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaEnvelope,FaLinkedin,} from "react-icons/fa";

function Header() {
  return (
    <div className='header'>
      <img className="image" src={photo} alt=""/>
      <h2>Laura Smith</h2>
      <h3>Frontend develpoer</h3>
      <p>laurasmith.website</p>
    </div>
  )
}

function Button(){
  return (
    <div className='button'>
      <button className="email" type='button'>
         <FaEnvelope />
        <span>Email</span>
      </button>
      <button className='linked' type='button'>
        <FaLinkedin />
        <span>LinkedIn</span>
      </button>
    </div>
  )
}

function About(){
  return(
    <div className='about'>
      <h3>About</h3>
      <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    </div>
  )
} 

function Interests(){
  return(
    <div className='interests'>
      <h3>Interests</h3>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
} 

function Icons() {
  return(
    <div className="icons">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>

      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  )
}

function Container() {
  return (
    <div className='container'>
      <Header/>
      <Button/>
      <About/>
      <Interests/>
      <Icons/>
   </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container/>
)
