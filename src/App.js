import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/mainStyle.css';
import Main from './main';
import Navbar from './components/Navbar';
// IMPORTÄNDRING: Nu importerar vi InstructorsPage istället
import InstructorsPage from "./components/instructorsPage"; // <--- Ändrad import!
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
                {/* RUTTÄNDRING: Använd InstructorsPage här */}
                <Route path="/instructors" element={<InstructorsPage />} /> {/* <--- Ändrad rutt! */}
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