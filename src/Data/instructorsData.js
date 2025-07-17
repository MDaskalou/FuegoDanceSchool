// src/data/instructorsData.js

// 1. Importera alla bilder
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

// 2. Definiera listan med ID, bilder och sociala länkar
const instructorsData = [
    {
        id: "mikael",
        image: mikaelImage,
        socials: {
            instagram: "https://www.instagram.com/mikael.bachata/",
            facebook: "https://www.facebook.com/mikael.daskalou"
        },
        extraImages: [mikaelImage1, mikaelImage2]
    },
    {
        id: "irina",
        image: irinaImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        extraImages: []
    },
    {
        id: "karin",
        image: karinImage,
        socials: {
            instagram: "https://www.instagram.com/sensualstyling/"
        },
        extraImages: []
    },
    {
        id: "tomas",
        image: tomasImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        extraImages: []
    },
    {
        id: "raminta",
        image: ramintaImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        extraImages: []
    },
    {
        id: "jennifer",
        image: jenniferImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        extraImages: []
    },
    {
        id: "sisco",
        image: siscoImage,
        socials: {
            instagram: "https://www.instagram.com/noraysisco.bachata/"
        },
        extraImages: []
    },
    {
        id: "nora",
        image: noraImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        extraImages: []
    }
];

// 3. Exportera listan
export default instructorsData;