import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(timer);
      }
    }, 75); // Ajuste o intervalo para controlar a velocidade da digitação

    return () => clearInterval(timer); // Limpa o intervalo se o componente for desmontado
  }, [text]);

  return <h1>{displayedText}</h1>;
};

export default Typewriter;
