import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch("http://posts.com/posts").then(res => res.json()).then(console.log).catch(console.error)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome
        </a>
      </header>
    </div>
  );
}

export default App;
