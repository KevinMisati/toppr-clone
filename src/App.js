
import './App.css';
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
