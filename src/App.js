import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
//import styles from "./general.module.css";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import Shop from "./components/pages/Shop/Shop";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import DisplayPrint from "./components/pages/DisplayPrint/DisplayPrint";

function App() {
  return (
    <>
    {/* <h1>Anna Gustavsson Photography</h1> */}
    <Router>
      <Switch>
        <Route path="/" exact render={() => <LandingPage/>}/>
        <Route path="/shop" exact render={() => <Shop/>}/>
        <Route path="/viewprint" exact render={() => <DisplayPrint/>}/>
        <Route path="/portfolio" exact render={() => <Portfolio/>}/>
      </Switch>
    </Router>
    </>
    
  );  
}

export default App;
