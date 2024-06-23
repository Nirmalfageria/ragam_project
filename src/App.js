
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from './components/contactus/Contact'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"></link>
function App() {
  return (
    
   <>  
    <Navbar/>
  <Router>
<Switch>
    <Route  exact path="/"> 
    <Home/>
    </Route>
    <Route  exact path="/contactus">
    <Contact/> 
    </Route>
    </Switch>
  </Router>
    <Footer/>
   </>
  );
}

export default App;
