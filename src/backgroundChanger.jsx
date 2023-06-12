import React, { useState, useEffect } from 'react';

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './images/marvel-desktop-xbox-gamers-assemble-tyv1dbmr03wkwl7u.jpg',
    './images/avengers-age-of-ultron-desktop-yhzb515yo9eb4pbr.jpg',
    './images/avengers-and-the-guardians-desktop-wbic1n9du7ik3zci.jpg',
    './images/avengers-characters-m19hfg0oka65qxyb.jpg',
    './images/avengers-photoshopped-poster-desktop-sqtid80q6scme5la.jpg',
    // Add more image URLs here
  ];

  useEffect(() => {
    // Change image every second
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [images.length]);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}
    >
      {/* Your content */}
    </div>
  );
};

export default BackgroundSlider;
