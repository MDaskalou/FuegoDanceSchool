// src/Data/helpinstruktorData.js

import sanelaImage from '../img/Instructors/instruktörSanela.jpg';
import adrianImage from '../img/Instructors/instruktörAdrian.jpg';
import ferasImage from '../img/Instructors/instruktörFeras.jpeg';
import inesImage from '../img/Instructors/instruktörInes.jpg';
import sofieImage from '../img/Instructors/instruktörSofie.jpg';
import filipImage from '../img/Instructors/instruktörFilip.jpg';

// Notera att vi döper den exporterade listan till 'helpInstructorsData' för tydlighetens skull
export const helpInstructorsData = [
    {
        id: "sanela", // <-- ID är nyckeln!
        image: sanelaImage,
        socials: {
            instagram: "https://www.instagram.com/grahovicsalekarr/"
        },
        extraImages: [] // Tom array om inga extra bilder finns
    },
    {
        id: "adrian", // <-- ID är nyckeln!
        image: adrianImage,
        socials: {
            instagram: "https://www.instagram.com/adrian_hedstrom/"
        },
        extraImages: []
    },
    {
        id: "feras", // <-- ID är nyckeln!
        image: ferasImage,
        socials: {
            instagram: "https://www.instagram.com/feras_kh7/"
        },
        extraImages: []
    },
    {
        id: "ines", // <-- ID är nyckeln!
        image: inesImage,
        socials: {
            instagram: "https://www.instagram.com/shine.with.ines/"
        },
        extraImages: []
    },
    {
        id: "sofie", // <-- ID är nyckeln!
        image: sofieImage,
        socials: {
            instagram: "https://www.instagram.com/sofie_1988/"
        },
        extraImages: []
    },
    {
        id: "filip", // <-- ID är nyckeln!
        image: filipImage,
        socials: {
            instagram: "https://www.instagram.com/filiploo/"
        },
        extraImages: []
    }
];