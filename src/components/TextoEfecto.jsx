import React, { useState, useEffect } from 'react';

const TextoEfecto = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [uniqueId] = useState(`typewriter-element-${Math.random().toString(36).substring(7)}`);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(uniqueId);
      if (element && !isVisible) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isInView = rect.top <= windowHeight && rect.bottom >= 0;
        if (isInView) {
          setIsVisible(true);

          let i = 0;
          const speed = 15; // Velocidad de escritura (en milisegundos)
          let result = '';

          function typeWriter() {
            if (i < text.length) {
              result += text.charAt(i);
              element.innerHTML = result;
              i++;
              setTimeout(typeWriter, speed);
            }
          }

          typeWriter();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, text, uniqueId]);

  return (
    <p id={uniqueId}>
      {/* Contenido */}
    </p>
  );
};

export default TextoEfecto;
