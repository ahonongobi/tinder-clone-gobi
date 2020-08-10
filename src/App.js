import React from 'react';
import Header from './Header'
import SwapeButtons from './SwapeButtons'
import TinderCards from './TinderCards'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      
        
          <Switch>
          <Route path='/chat/:person'>
          <Header backButton="/chat"/>
            <ChatScreen />
          </Route>

          <Route path='/chat'>
          <Header backButton="/" />
             <Chats />
          </Route>

            <Route path='/'>
            <Header />
             <TinderCards />
             <SwapeButtons />
            </Route>
          </Switch>
        
        </Router>
    </div>
  );
}

export default App;

{/*<h2>Tinder clone build by Gobi abyssinie</h2> */}
          {/* headers 
          <Header /> */}
          {/* tinder card*/}

          {/** Button belows tinder card */}
          {/* chats screen*/}
          {/* individual chatting*/}
