import App from "./App";
import { useState } from 'react';

const Colorizer = () => {
  const [color, setColor] = useState("#6d0e0e");
  
  const getRandomColor = () => {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random;
  }

  const changeColor = () => {
    const randomColor = getRandomColor();
    console.log('Color Change with', randomColor);
    setColor(randomColor);
  }
  return(
    <div className="colorizer">
      <h1>O MUDA-COR 😱</h1>
      <p><strong>Mude a cor ao clicar no botão</strong></p>
      <div className="box" style={{backgroundColor: color}}><p>{color}</p></div>
        
        <button onClick={ changeColor }>Mudar Cor</button>

    </div>
  );
}

export default Colorizer;