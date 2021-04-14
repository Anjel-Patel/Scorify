import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import PersonalInfo from './components/personal info/Personalinfo';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* ROUTER and SWITCH HERE */}
      {/* <Dashboard/> */}
      {/* <PersonalInfo/> */}
      {/* <About/> */}
      <Contact/>
    </div>
  );
}

export default App;
