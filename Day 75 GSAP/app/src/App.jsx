import React, { useEffect, useRef } from 'react';
import './App.css';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const navRef=useRef(null)
  const headRef=useRef(null)
  const textRef=useRef(null)
  const buttonRef=useRef(null)
  const imgRef=useRef(null)
  const aboutRef=useRef(null)
  const serR=useRef(null)
  
  
  useEffect(() =>{
    const t1=gsap.timeline();
    t1.fromTo(navRef.current,{opacity:0,y:-50},{opacity:1,y:0,duration:1})
      .fromTo(headRef.current,{opacity:0,x:-50},{opacity:1,x:0,duration:1})
      .fromTo(textRef.current,{opacity:0,x:-50},{opacity:1,x:0,duration:1})
      .fromTo(buttonRef.current,{opacity:0,y:50},{opacity:1,y:0,duration:1})
      .fromTo(imgRef.current,{opacity:0,scale:0},{opacity:1,scale:1,duration:1})
    
      gsap.fromTo(aboutRef.current,{opacity:0,x:100},{opacity:1,x:0,duration:1,scrollTrigger:{
        trigger:aboutRef.current,
        start:"top 80%",
        end:"bottom 60%",
        toggleActions:"play none none reverse"
      }})
      gsap.fromTo(serR.current,{opacity:0,x:-100},{opacity:1,x:0,duration:1,scrollTrigger:{
        trigger:serR.current,
        start:"top 80%",
        end:"bottom 60%",
        toggleActions:"play none none reverse"
      }})
  
  
  
    })

  return (
    <div className="App">
      <nav  ref={navRef} className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home" className="homepage-section">
        <header  className="homepage-header" ref={headRef}>
          Welcome to Our Website
        </header>
        <main className="homepage-main">
          <div  className="homepage-text" ref={textRef}>
            <h1>Discover Amazing Things</h1>
            <p>Join us in exploring the most wonderful places and experiences.</p>
          </div>
          <div  className="homepage-buttons" ref={buttonRef}>
            <button>Get Started</button>
            <button>Learn More</button>
          </div>
          <div  className="homepage-image" ref={imgRef}>
            <img src="mm.jpg" alt="Amazing Place" />
          </div>
        </main>
      </section>
      <section id="about" className="homepage-section" ref={aboutRef}>
        <h2>About Us</h2>
        <p>We are a company dedicated to bringing you the best experiences.</p>
      </section>
      <section id="services" className="homepage-section" ref={serR}>
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs.</p>
      </section>
      <section id="contact" className="homepage-section" >
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for more information.</p>
      </section>
    </div>
  );
};

export default App;
