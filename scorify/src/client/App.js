import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import PersonalInfo from './components/personal info/Personalinfo';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import {useState} from "react";

function App() {
  
  const [currPage, setPage] = useState(0);
  const [isLeader, setLeader] = useState(1);

  return (
    <div className="App">
      <Sidebar currPage={currPage} isLeader={isLeader}/>
      {/* ROUTER and SWITCH HERE */}
      {/* Page IDs start from 0. So currPage=0 if user is on dashboard, currPage=1 if user is on Leaderboard and so on */}
      {/* Page IDs are Dashboard=0, Leaderboard=1, Personal Info=2 */}
      <Dashboard isLeader={isLeader}/>
      {/* <PersonalInfo/> */}
      {/* <About/> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;
