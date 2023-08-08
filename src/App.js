import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
