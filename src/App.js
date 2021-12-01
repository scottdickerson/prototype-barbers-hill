import logo from './logo.svg';
import './App.css';
import eagleVideo from './video/01-WallofHonor-x1073304080-preview.mp4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <video autoPlay muted loop>
        <source src={eagleVideo} type="video/mp4"/>
        </video> 
        <p className="overlayTitle">
          Overlaid title
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
