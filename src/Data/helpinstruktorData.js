// src/Data/helpinstruktorData.js

import sanelaImage from '../img/Instructors/instruktörSanela.jpg';
import adrianImage from '../img/Instructors/instruktörAdrian.jpg';

// Notera att vi döper den exporterade listan till 'helpInstructorsData' för tydlighetens skull
export const helpInstructorsData = [
    {
        id: "sanela", // <-- ID är nyckeln!
        image: sanelaImage,
        socials: {
            instagram: "https://instagram.com/sara"
        },
        extraImages: [] // Tom array om inga extra bilder finns
    },
    {
        id: "adrian", // <-- ID är nyckeln!
        image: adrianImage,
        socials: {
            instagram: "https://instagram.com/adrianhedstrom"
        },
        extraImages: []
    }
];