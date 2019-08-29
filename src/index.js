import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import GifList from './GifList';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: [
	{
	  id: 1,
	  url: 'http://fakeimg.pl/300/'
	},
	{
	  id: 2,
	  url: 'http://fakeimg.pl/300/'
	},
	{
	  id: 3,
	  url: 'http://fakeimg.pl/300/'
	}
      ]
    }
  }

  render() {
    return(
      <>
      <div className="App">
	<header className="App-header">
        <h1>Dogiphy 🐶</h1>
        <h2>the best dog gifs you have ever seen!</h2>
      </header>
     </div>
      <GifList gifs={this.state.gifs}/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
