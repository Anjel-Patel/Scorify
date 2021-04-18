import './App.css';
import Login from './components/login/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import PersonalInfo from './components/personal info/Personalinfo';
import Leaderboard from './components/leaderboard/Leaderboard';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Record from "./components/record/Record";
import {useState} from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function renderSidebar(currPage, isLeader){
  return(
    <div>
      <Sidebar currPage={currPage} isLeader={isLeader}/>
    </div>
  );
}

function App() {
  
  const [currPage, setPage] = useState(0);
  const [isLeader, setLeader] = useState(1);

  return (
    <Router>
    <div className="App">
      {/* ROUTER and SWITCH HERE */}
      {/* Page IDs start from 0. So currPage=0 if user is on dashboard, currPage=1 if user is on Leaderboard and so on */}
      {/* Page IDs are Dashboard=0, Leaderboard=1, Personal Info=2, Record Page is number 5 tho */}
      <Switch>  
        <Route exact path= "/login" render={()=>{ setPage(-1); return(<Login/>);} }/>   
        <Route exact path= "/" render={()=>{ setPage(0); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><Dashboard/></div>);} }/>   
        <Route exact path= "/leaderboard" render={()=>{ setPage(1); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><Leaderboard/></div>);} }/>   
        <Route exact path= "/record" render={()=>{ setPage(5); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><Record/></div>);} }/>   
        <Route exact path= "/modify" render={()=>{ setPage(6); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><PersonalInfo/></div>);} }/>   
        <Route exact path= "/personalinfo" render={()=>{ setPage(2); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><PersonalInfo/></div>);} }/>   
        <Route exact path= "/about" render={()=>{ setPage(3); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><About/></div>);} }/>   
        <Route exact path= "/contact" render={()=>{ setPage(4); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><Contact/></div>);} }/>   
      </Switch>
    </div>
    </Router>
  );
}

export default App;