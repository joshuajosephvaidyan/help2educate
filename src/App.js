import LandingPage from './LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonateResourcePage from './DonateResourcePage';
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'
import FindResourcesPage from './FindResourcePage'
import ErrorPage from './ErrorPage';
import AttributionsPage from './AttributionsPage';

import {HashRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route exact path="/">
           <LandingPage/>
        </Route>
        
        <Route exact path="/DRP">
          <DonateResourcePage/>
        </Route>

        <Route exact path="/FRP">  
          <FindResourcesPage />
        </Route>
  
        <Route exact path="/SigninPage">
          <SignInPage/>
        </Route>

        <Route exact path="/SignupPage">
          <SignUpPage />
        </Route> 

        <Route exact path="/AttributionPage">
          <AttributionsPage />
        </Route>  
      
        <Route path="/errorPage">
          <ErrorPage />
        </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
