import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/mainStyle.css';
import Main from './components/main';
import Navbar from './components/Navbar';
import Instructors from "./components/Instructors"; // din nya sida
import Contact from "./components/Contact";



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Instrutors" element={<Instructors />} />
            </Routes>
            
            <Contact />
        </Router>
    );
}

export default App;
