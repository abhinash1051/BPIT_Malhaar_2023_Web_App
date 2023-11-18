import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Sponsors from './Sponsors/Sponsors'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from './Team/Team';
import Events from './Events/Events';
import About from './About/About';
function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sponsors" element={<Sponsors />}></Route>
            <Route path='/team' element={<Team/>}></Route>
            <Route path='/event' element={<Events/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            </Routes>
        </Router>
      
    </div>

  );
}

export default App;
