import React from 'react';
import '../../css/sectionTitle.css';

function SectionTitle({ children, color = "white" }) {
    return (
        <h2 className={`section-title ${color === "black" ? "text-black" : "text-white"}`}>
            {children}
        </h2>
    );
}

export default SectionTitle;
