import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/mainStyle.css';
import Main from './main';
import Navbar from './components/Navbar';
import Instructors from "./components/Instructors";
import Contact from "./components/Contact";
import Values from "./components/Values";
import FAQpage from "./components/FAQpage";
import OpenHouseSignup from "./components/SignOpenHouse";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/values" element={<Values />} />
                <Route path="/FAQpage" element={<FAQpage />} />
                <Route path="/open-house-signup" element={<OpenHouseSignup />} />
                <Route path="/contact" element={<Contact />} />

                {/* Fallback route för att fånga 404 */}
                <Route path="*" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;