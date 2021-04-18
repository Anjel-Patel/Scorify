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
import Modify from './components/modify/Modify';

function renderSidebar(currPage, isLeaderManager){
  return(
    <div>
      <Sidebar currPage={currPage} isLeaderManager={isLeaderManager}/>
    </div>
  );
}

function App() {
  const [isLeaderManager, setLeaderManager] = useState(1);

  return (
    <Router>
    <div className="App">
      {/* ROUTER and SWITCH HERE */}
      {/* Page IDs start from 0. So currPage=0 if user is on dashboard, currPage=1 if user is on Leaderboard and so on */}
      {/* Page IDs are Dashboard=0, Leaderboard=1, Personal Info=2, Record Page is number 5 tho */}
      <Switch>  
        <Route exact path= "/login" render={()=>{return(<Login/>);} }/>   
        <Route exact path= "/" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(0, isLeaderManager)}</div><Dashboard/></div>);} }/>   
        <Route exact path= "/leaderboard" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(1, isLeaderManager)}</div><Leaderboard/></div>);} }/>   
        <Route exact path= "/record" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(5, isLeaderManager)}</div><Record isLeaderManager={isLeaderManager}/></div>);} }/>   
        <Route exact path= "/modify" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(6, isLeaderManager)}</div><Modify/></div>);} }/>   
        <Route exact path= "/personalinfo" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(2, isLeaderManager)}</div><PersonalInfo/></div>);} }/>   
        <Route exact path= "/about" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(3, isLeaderManager)}</div><About/></div>);} }/>   
        <Route exact path= "/contact" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(4, isLeaderManager)}</div><Contact/></div>);} }/>   
      </Switch>
    </div>
    </Router>
  );
}

export default App;