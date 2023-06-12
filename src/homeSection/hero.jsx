import React, { useEffect, useState } from 'react'
import Section1 from './sections/section1'
import Section2 from './sections/section2'
import Section3 from './sections/section3'
import Section4 from './sections/section4'

const Hero = () => {
  const [currentSection, setCurrentSection] = useState(0);
const sections = [
  <Section1 />,
  <Section2 />,
  <Section3 />,
  <Section4 />,
 
];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSection((prevSection) => {
      const randomIndex = Math.floor(Math.random() * sections.length);
      return randomIndex !== prevSection ? randomIndex : prevSection;
    });
  }, 2000);

  return () => {
    clearInterval(interval);
  };
}, [sections.length]);

  return (
    <div>
          {sections[currentSection]}
    </div>
  )
}

export default Hero