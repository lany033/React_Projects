import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Melanie"></Greeting> */}
        <GreetingF name="Melanie"></GreetingF>
      </header>
    </div>
  );
}

export default App;
