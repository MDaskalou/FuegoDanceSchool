    import React, { useState } from 'react';

    // Importera alla delar som behövs för denna sida
    // Se till att sökvägarna stämmer med din mappstruktur!
    import Instructors from '../Instructors';
    import HelpInstructors from '../HelpInstructors';
    import InstructorModal from '../InstructorModal';

    export default function InstructorsPage() {
        // State för att hålla reda på vald instruktör (och om modalen är öppen)
        const [selectedInstructor, setSelectedInstructor] = useState(null);

        // Funktion för att öppna modalen
        const openModal = (instructor) => {
            setSelectedInstructor(instructor);
        };

        // Funktion för att stänga modalen
        const closeModal = () => {
            setSelectedInstructor(null);
        };

        return (
            <div>
                {/* Skicka ner "openModal"-funktionen till komponenterna som visar korten */}
                <Instructors openModal={openModal} />
                <HelpInstructors openModal={openModal} />

                {/* Renderar modalen och styr den med state och funktioner */}
                <InstructorModal
                    isOpen={!!selectedInstructor}
                    onClose={closeModal}
                    instructor={selectedInstructor}
                />
            </div>
        );
    }