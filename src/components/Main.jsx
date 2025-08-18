import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <h1 className="title">Привет, Telegram Mini-App 👋</h1>
      <p className="text">Если ты это видишь — значит всё работает 🚀</p>
      <button className="button" onClick={() => alert("Кнопка работает!")}>
        Нажми меня
      </button>
    </div>
  );
}
