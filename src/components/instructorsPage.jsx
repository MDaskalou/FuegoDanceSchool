// src/components/InstructorsPage.jsx (NY FIL)
import React, { useState } from 'react';
import Instructors from './Instructors'; // Importera huvudinstruktörssektionen
import HelpInstructors from './HelpInstructors'; // Importera hjälpinstruktörssektionen
import InstructorModal from './InstructorModal'; // Importera modalen
import '../css/instructors.css'; // Antar att din CSS för instruktörer också ska gälla här


export default function InstructorsPage() {
    const [selectedInstructor, setSelectedInstructor] = useState(null);

    // Denna openModal-funktion skickas ner till båda sektionerna
    const openModal = (instructor) => setSelectedInstructor(instructor);
    const closeModal = () => setSelectedInstructor(null);



    return (
        <main className="instructors-page-content"> {/* Du kan lägga till en container för styling */}
            {/* Huvudinstruktörssektionen */}
            <Instructors openModal={openModal} />

            {/* Hjälpinstruktörssektionen */}
            <HelpInstructors openModal={openModal} />

            {/* Modalen hanteras här, på samma nivå som sektionerna */}
            <InstructorModal
                isOpen={!!selectedInstructor}
                onClose={closeModal}
                instructor={selectedInstructor}
            />
        </main>
    );
}