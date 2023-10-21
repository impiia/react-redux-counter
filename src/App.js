import React from "react";
import "./App.css";

// импортируем  компонент счетчика
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* рендерим  компонент счетчика */}
        <Counter />
      </header>
    </div>
  );
}

export default App;

