import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
   <div className='app'>
     <div className='appBody'>
       <Router path='/'>
       <Sidebar/>
         <Chat/>
       </Router>
     </div>
   </div>

  );
}

export default App;
