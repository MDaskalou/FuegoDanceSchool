import React, { useEffect } from 'react';
import Section from './UI/Section/Section';
import '../css/coursesection.css'; // CSS för stil

function CoursesSection() {
    useEffect(() => {
        // Dynamiskt ladda in scriptet för kurser
        const script = document.createElement('script');
        script.src = 'https://fuegodance.se/iframe.js';
        script.async = true;
        script.onload = () => {
            // Initiera iframe när skriptet har laddats
            if (window.initIframe) {
                window.initIframe();
            }
        };
        document.body.appendChild(script);

        // Rensa upp skriptet när komponenten avmonteras
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <Section id="courses" className="courses-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Våra Kurser</h2>
                    <p className="text-lg text-orange-200 max-w-2xl mx-auto">
                        Upptäck vårt utbud av danslektioner och hitta den perfekta kursen för dig
                    </p>
                </div>

                <div className="iframe-wrapper">
                    <div
                        id="container-iframe"
                        data-client-id="FuegoDance"
                        data-filter=""
                        data-view-mode="grid"
                        data-city-name=""
                        data-dance=""
                        data-group="type"
                        data-group-sorting="startdate"
                        data-activity-type="Course"
                        data-hide-filter="true"
                        data-period=""
                        allowfullscreen=""
                    />
                </div>
            </div>
        </Section>
    );
}

export default CoursesSection;
