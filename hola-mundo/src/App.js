import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import { Clock } from './components/container/ejercicio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Melanie"></Greeting> */}
        {/* <GreetingF name="Melanie"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <GreetingStyled name ='Melanie'></GreetingStyled> */}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
