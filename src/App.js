
import './App.css';
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Quiz from "./Pages/Quiz"
import Footer from "./Components/Footer"
import {Route,Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/quiz" component={Quiz} />
        </Switch>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
