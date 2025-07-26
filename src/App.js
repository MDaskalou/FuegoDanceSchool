import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./main";
import Values from './components/Values';
import ThemedFAQ from "./components/ThemedFAQ";
import { useEffect } from "react";
import SignOpenHouse from "./components/SignOpenHouse";
import InstructorsPage from "./components/Page/InstructorsPage";



function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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
                        <ThemedFAQ/>
                    </>
                }
            />
            <Route
                path="/instructors"
                element={
                    <>
                        <Navbar />
                        <InstructorsPage />
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
            <Route
                path="/open-house-signup"
                element={
                    <>
                        <Navbar />
                        <SignOpenHouse />
                    </>
                }
            />
        </Routes>
    );
}

export default App;
