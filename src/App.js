import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';


function App() {
  const history = useHistory();
  console.log(history);
  const handleClick = (name) =>{
    history.push(`/about/${name}`);
  }
  const title = "Nikolas";
  const theRichest = "The Riches Man In Babylon";

  return (
    <div className="App">
      <h2>Привет</h2>
      <h3>Пока</h3>
      <button onClick={() => handleClick(title)}>{title}</button>
      <button onClick={() => handleClick(theRichest)}>{theRichest}</button>
    </div>
  );
}

export default App;
