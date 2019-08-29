import React from 'react';
import './App.css';

const giphyAPI = "df4Kip5xanlPR49BrFPbDYar6kFWW1LT"
const giphyURL = fetch(`http://api.giphy.com/v1/gifs/search?q=dogs&api_key=${giphyAPI}&limit=5`)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogiphy 🐶</h1>
	<h2>the best dog gifs you have ever seen!</h2>
      </header>
    </div>
  );
}

export default App;
