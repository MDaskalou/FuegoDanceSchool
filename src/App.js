import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./main";
import FAQpage from "./components/FAQpage";
import Instructors from './components/Instructors';
import Values from './components/Values';
import HelpInstructors from "./components/HelpInstructors";


function App() {
    const location = useLocation();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Navbar />
                        <Main key={location.key} />
                    </>
                }
            />
            <Route
                path="/FAQpage"
                element={
                    <>
                        <Navbar />
                        <FAQpage />
                    </>
                }
            />
            <Route
                path="/instructors"
                element={
                    <>
                        <Navbar />
                        <Instructors />
                        <HelpInstructors />
                    </>
                }
            />

            <Route
                path="/values"
                element={
                    <>
                        <Navbar />
                        <Values />
                    </>
                }
            />
        </Routes>
    );
}

export default App;
