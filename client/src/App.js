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

function renderSidebar(currPage, role){
  return(
    <div>
      <Sidebar currPage={currPage} role={role}/>
    </div>
  );
}

function App() {
<<<<<<< HEAD

  const [Role, setRole] = useState(0);
  const [currPage, setPage] = useState(0);
  const [isLeader, setLeader] = useState(0);
=======
  const [role, setRole] = useState(0);
>>>>>>> b9ca753f4ce445240357832c34509d2fd5a898c2

  return (
    <Router>
    <div className="App">
      {/* ROUTER and SWITCH HERE */}
      {/* Page IDs start from 0. So currPage=0 if user is on dashboard, currPage=1 if user is on Leaderboard and so on */}
      {/* Page IDs are Dashboard=0, Leaderboard=1, Personal Info=2, Record Page is number 5 tho */}
      <Switch>  
<<<<<<< HEAD
        <Route exact path= "/login" render={()=>{ setPage(-1); return(<div>(<Login setRole={setRole}/></div>);}}/>   
        <Route exact path= "/" render={()=>{ setPage(0); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><Dashboard/></div>);} }/>   
        <Route exact path= "/leaderboard" render={()=>{ setPage(1); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><Leaderboard/></div>);} }/>   
        <Route exact path= "/record" render={()=>{ setPage(5); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><Record/></div>);} }/>   
        <Route exact path= "/modify" render={()=>{ setPage(6); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><PersonalInfo/></div>);} }/>   
        <Route exact path= "/personalinfo" render={()=>{ setPage(2); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><PersonalInfo/></div>);} }/>   
        <Route exact path= "/about" render={()=>{ setPage(3); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><About/></div>);} }/>   
        <Route exact path= "/contact" render={()=>{ setPage(4); return(<div style={{display:'flex'}}><div>{renderSidebar(currPage, isLeader)}</div><Contact/></div>);} }/>   
=======
        <Route exact path= "/login" render={()=>{return(<Login setRole = {setRole}/>);} }/>   
        <Route exact path= "/" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(0, role)}</div><Dashboard role = {role}/></div>);} }/>   
        <Route exact path= "/leaderboard" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(1, role)}</div><Leaderboard/></div>);} }/>   
        <Route exact path= "/record" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(5, role)}</div><Record role={role}/></div>);} }/>   
        <Route exact path= "/modify" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(6, role)}</div><Modify/></div>);} }/>   
        <Route exact path= "/personalinfo" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(2, role)}</div><PersonalInfo/></div>);} }/>   
        <Route exact path= "/about" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(3, role)}</div><About/></div>);} }/>   
        <Route exact path= "/contact" render={()=>{return(<div style={{display:'flex'}}><div>{renderSidebar(4, role)}</div><Contact/></div>);} }/>   
>>>>>>> b9ca753f4ce445240357832c34509d2fd5a898c2
      </Switch>
    </div>
    </Router>
  );
}

export default App;