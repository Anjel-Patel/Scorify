import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import PersonalInfo from './components/personal info/Personalinfo';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* ROUTER and SWITCH HERE */}
      <PersonalInfo/>
    </div>
  );
}

export default App;
