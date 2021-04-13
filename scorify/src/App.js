import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import PersonalInfo from './components/personal info/Personalinfo';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* ROUTER and SWITCH HERE */}
      {/* <Dashboard/> */}
      {/* <PersonalInfo/> */}
      <About/>
    </div>
  );
}

export default App;
