import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* ROUTER and SWITCH HERE */}
      <Dashboard/>
    </div>
  );
}

export default App;
