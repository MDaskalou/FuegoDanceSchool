// src/components/InstructorsPage.jsx (NY FIL)
import React, { useState } from 'react';
import Instructors from './Instructors'; // Importera huvudinstruktörssektionen
import HelpInstructors from './HelpInstructors'; // Importera hjälpinstruktörssektionen
import InstructorModal from './InstructorModal'; // Importera modalen
import '../css/instructors.css'; // Antar att din CSS för instruktörer också ska gälla här
import mikaelImage from '../img/Instructors/instruktörMikael.png';
import mikaelImage1 from '../img/Instructors/instruktörMikael1.jpg';
import mikaelImage2 from '../img/Instructors/instruktörMikael2.jpg';
import karinImage from '../img/Instructors/instruktörKarin.png';
import tomasImage from '../img/Instructors/instruktörTomas.png';
import ramintaImage from '../img/Instructors/instruktörRaminta.png';
import jenniferImage from '../img/Instructors/instruktörJennifer.png';
import siscoImage from '../img/Instructors/instruktörSisco.jpg';
import noraImage from '../img/Instructors/instruktörNora.jpg';
import irinaImage from '../img/Instructors/instruktörIrina.jpg';

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