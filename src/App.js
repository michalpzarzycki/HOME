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
import Article2 from './articles/Article2';
import Project from './components/Project';

function App() {
  return (
   <Router>
     <Switch>
       <Route strict exact path="/" component={LandingPage}/>
       <Route exact path="/article1" component={Article1} />
       <Route exact path="/article1" component={Article2} />
       <Route exact path="/project" component={Project} />
       <Redirect to="/" />
     </Switch>
   </Router>
    
    
  );
}

export default App;
