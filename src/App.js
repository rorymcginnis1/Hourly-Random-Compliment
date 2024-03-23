import React from 'react';
import useFetchCompliment from './compliment';
import Default from './default'; 
import './App.css'

function App() {
  const minutes = new Date().getMinutes();

    var comp = useFetchCompliment(); 

    var def = Default();

    if (minutes %60 ==0){
      var compliment=comp;
  
    }
    else{
      var compliment=def;
    }
  
  return (
    <div className="App">
      <h1>Hourly Random Compliment</h1>
      <span className="heart">❤❤❤</span>
      <p>{compliment}</p>
    </div>
  );
}

export default App;
