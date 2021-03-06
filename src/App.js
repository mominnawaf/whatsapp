import React ,{useState} from 'react';
import './App.css';
import {useStateValue} from "./StateProvider"
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  
  const [{user},dispatch]= useStateValue();
  return (
   <div className='app'>
     {!user?(
       <Login/>
     ):(
      <div className='appBody'>
      <Router>
            <Sidebar/>
             <Switch>
               <Route path="/room/:roomId">
                 <Chat/>
               </Route>
               <Route path="/">
                 <Chat/>
               </Route>
           </Switch>
         </Router>
      </div>
     )}
   </div>

  );
}

export default App;
