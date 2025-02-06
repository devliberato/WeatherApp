import React from 'react';
import "./Info.css"

const Info = () => {
  return (
    <div>
      <h1>🌍 Sobre o WeatherApp</h1>
     
      <p>
        O <strong>WeatherApp</strong> permite que você consulte o clima de qualquer lugar do mundo de forma rápida e fácil.
      </p>
      <div class="info-text">
      <h2>🔍 Como funciona?</h2>
      <p>
        Para ver a previsão do tempo, basta clicar na aba <strong>"Procure um local"</strong> e digitar o nome da cidade desejada.
      </p>
      </div>
      <div class="info-text">
      <h2>💡 Simples e prático!</h2>
      <p>
        Em segundos, você terá informações atualizadas sobre a temperatura, clima e muito mais!
      </p>
      </div>
      <div class="info-text">
      <h2>🔗 Tecnologia utilizada</h2>
      <p>
        Os dados são fornecidos por uma API confiável. Se quiser saber mais, confira o serviço que utilizamos:
      </p>
      </div>
      <a href="https://wttr.in/" target="_blank" rel="noopener noreferrer">
        <button>Ver API</button>
      </a>
    
    </div>
  );
};

export default Info;
