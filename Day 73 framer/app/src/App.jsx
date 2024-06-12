// src/App.js
import React  from "react";
import {motion} from 'framer-motion'
import "./App.css";

const App = () => {
   
  

  return (
    <div className="App">
      <header>
        <motion.img
          src="vite.svg"
          alt="Logo"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1 }}
          
        />
        <nav>
          <motion.ul
            initial={{x:100}}
            animate={{x:0}}
            transition={{type:"spring",stiffness:100}}
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </motion.ul>
        </nav>
      </header>
      <main>
        <motion.section className="hero"
        id="home"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration:2}}

        >
          <h1>Explore</h1>
          <p>Find easier ways to use your benefits for any path you take.</p>
        

          </motion.section>
          <motion.section className="content-section"
          id="about"
          initial={{ opacity: 0,x:-100}}
          whileInView={{ opacity: 1,x:0}}
          transition={{duration:1}}
          >
          <h2>About Us</h2>
          <p>We provide exceptional healthcare services...</p>  
          </motion.section>
        <div>
        </div>
      </main>
    </div>
  );
};

export default App;
