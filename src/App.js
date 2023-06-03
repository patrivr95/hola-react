import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx */}
        {/* <Greeting name="Patricia"></Greeting> */}
        {/* <GreetingF name="Patricia"></GreetingF> */}


        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
