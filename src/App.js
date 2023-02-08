import React, { useRef } from "react";
import './App.css';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function App() {

  const homeRef = useRef(null);
  const introRef = useRef(null);
  const recentRef = useRef(null);
  const cvRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  

  return (
    <>
      <Navbar projectsRef={projectsRef} homeRef={homeRef} introRef={introRef} recentRef={recentRef} cvRef={cvRef} contactRef={contactRef} />
      <Introduction homeRef={homeRef} introRef={introRef} />
      <SlideShow recentRef={recentRef} />
      <Projects projectsRef={projectsRef} cvRef={cvRef} />
      <Contacts contactRef={contactRef} />
    </>
  );
}
