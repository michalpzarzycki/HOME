import React from 'react';
import { 
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect 
} from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import Article1 from './articles/Article1'
import './App.css';

function App() {
  return (
   <Router>
     <Switch>
       <Route strict exact path="/" component={LandingPage}/>
       <Route exact path="/article1" component={Article1} />
       <Redirect to="/" />
     </Switch>
   </Router>
    
    
  );
}

export default App;
