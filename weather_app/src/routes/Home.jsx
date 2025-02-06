import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>🌤️ Bem-vindo ao WeatherApp!</h1>
      <div className="paragraph-container">
      <p>Descubra o clima de qualquer lugar do mundo de forma rápida e fácil.</p>
      <p>Digite o nome da cidade que deseja pesquisar e obtenha informações detalhadas sobre temperatura, umidade e muito mais!</p>
      <p>Pronto para começar? <strong>Acesse a aba "Weather" e faça sua primeira busca agora! 🔍</strong></p>
      </div>
    </div>
  );
}

export default Home;
