import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import PersonalInfo from './components/personal info/Personalinfo';
import Leaderboard from './components/leaderboard/Leaderboard';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import {useState} from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  
  const [currPage, setPage] = useState(0);
  const [isLeader, setLeader] = useState(0);

  return (
    <Router>
    <div className="App">
      <Sidebar currPage={currPage} isLeader={isLeader}/>
      {/* ROUTER and SWITCH HERE */}
      {/* Page IDs start from 0. So currPage=0 if user is on dashboard, currPage=1 if user is on Leaderboard and so on */}
      {/* Page IDs are Dashboard=0, Leaderboard=1, Personal Info=2 */}
      {/* <Dashboard isLeader={isLeader}/> */}
      <Switch>
       <Route exact
       path= "/personalinfo"
       render={()=>{
         setPage(2);
         return(<PersonalInfo/>);}}/>      
      </Switch>
      <Route exact
       path= "/"
       render={()=>{
         setPage(0)
         return(<Dashboard isLeader={isLeader}/>);}}/>
       <Route exact
       path= "/leaderboard"
       render={()=>{
         setPage(1);
         return(<Leaderboard/>);}}/>
      
      {/* <About/> */}
      {/* <Contact/> */}
    </div>
    </Router>
  );
}

export default App;