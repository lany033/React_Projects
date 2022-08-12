import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import { Clock } from './components/container/ejercicio';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExamle from './components/pure/ObservableExamle';
import FetchServices from './services/FetchServices';
import AxiosExample from './components/pure/AxiosExample';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        
        {/* <Greeting name="Melanie"></Greeting> */}
        {/* <GreetingF name="Melanie"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <GreetingStyled name ='Melanie'></GreetingStyled> */}
        {/* <Clock></Clock> */}
        {/* <Father></Father> */}
        {/* Ejemplos de uso de formik */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
        {/* Ejemplos de renderizado condicional */}
        {/* <OptionalRender></OptionalRender> */}
        {/* Ejemplos de asincronia */}
        {/* <AsyncExample></AsyncExample> */}
        {/* <ObservableExamle></ObservableExamle> */}
        {/* <FetchServices></FetchServices> */}
        {/* <AxiosExample></AxiosExample> */}
        <AxiosCRUDExample></AxiosCRUDExample>
      {/* </header> */}
    </div>
  );
}

export default App;
