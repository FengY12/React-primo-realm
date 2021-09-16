import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../contact/contact';

export default function HomPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    <Projects />
    <Contact />
    </>

  );
}

