import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <h1>Привет, Telegram Mini-App!</h1>
      <p>Это простой шаблон.</p>
      <button onClick={() => alert('Кнопка работает!')}>Нажми меня</button>
    </div>
  );
}
