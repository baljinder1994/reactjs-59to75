import React, { useRef } from 'react';
import { animated, useSpring } from '@react-spring/web'
import {useInView} from 'react-intersection-observer'
import './App.css';

function App() {
  const fade=useSpring({opacity:1,from:{opacity:0},delay:1000})
  const slideIn=useSpring({transform:'translateX(0%)',from:{transform:'translateX(-100%)'},delay:700})
  const scale=useSpring({transform:'scale(1)',from:{transform:'scale(0)'},delay:900})
  
  const moreContentRef=useRef(null)

  const scrollToContent=() =>{
   moreContentRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const [ref1,inView1]=useInView({
    triggerOnce:true,
    threshold:0.1
});
const [ref2,inView2]=useInView({
  triggerOnce:true,
  threshold:0.1
});
const scrollIn1 = useSpring({
  transform:inView1 ? 'translateX(0)' : 'translateX(100px)',
    opacity:inView1 ? 1: 0
  
})    
const scrollIn2=useSpring({
  transform:inView2 ? 'translateX(0)' : 'translateX(100px)',
    opacity:inView2 ? 1: 0
  
})

  return (
    <div className="App">
      <animated.header style={fade}>
        <div className="navbar">
          <img src="vite.svg" alt="Logo" className="logo" />
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </animated.header>

      <main>
        <animated.div  style={slideIn}className="explore-section">
          <img src="mm.jpg" alt="Explore" className="explore-image" /> {/* Update the path to your image */}
          <h1>Explore</h1>
        </animated.div>
        <animated.div  style={scale} className="benefits-section">
          <h2>Find easier ways to use your benefits for any path you take.</h2>
        </animated.div>
        <button className="scroll-button" onClick={scrollToContent}>Scroll Down</button>
      </main>

      <div ref={moreContentRef} className="more-content">
        <animated.div style={scrollIn1} ref={ref1}>
          <section>
            <h2>Additional Content Section 1</h2>
            <p>This is some more content that appears when you scroll down.</p>
          </section>
        </animated.div>
        <animated.div style={scrollIn2} ref={ref2}>
          <section >
            <h2>Additional Content Section 2</h2>
            <p>This is another section of additional content with more information.</p>
          </section>
        </animated.div>
      </div>
    </div>
  );
}

export default App;
