// src/data/instructorsData.js

// 1. Importera alla bilder
import mikaelImage from '../img/Instructors/instruktörMikael.jpg';
import mikaelImage1 from '../img/Instructors/instruktörMikael1.jpg';
import mikaelImage2 from '../img/Instructors/instruktörMikael2.jpg';
import karinImage from '../img/Instructors/instruktörKarin.jpg';
import tomasImage from '../img/Instructors/instruktörTomas.jpg';
import ramintaImage from '../img/Instructors/instruktörRaminta.jpg';
import jenniferImage from '../img/Instructors/instruktörJennifer.jpg';
import siscoImage from '../img/Instructors/instruktörSisco.jpg';
import noraImage from '../img/Instructors/instruktörNora.jpg';
import irinaImage from '../img/Instructors/instruktörIrina.jpg';
import emmaImage from '../img/Instructors/instruktörEmma.jpg';
import andrisImage from '../img/Instructors/instruktörAndris.jpeg';

// 2. Definiera listan med ID, bilder och sociala länkar
const instructorsData = [
    {
        id: "mikael",
        image: mikaelImage,
        socials: {
            instagram: "https://www.instagram.com/mikael.bachata/",
        },
        extraImages: [mikaelImage1, mikaelImage2]
    },
    {
        id: "irina",
        image: irinaImage,
        socials: {
            instagram: "https://www.instagram.com/sensualstyling/"
        },
        extraImages: []
    },
    {
        id: "karin",
        image: karinImage,
        socials: {
            instagram: "https://www.instagram.com/karin.moves/"
        },
        extraImages: []
    },
    {
        id: "tomas",
        image: tomasImage,
        socials: {
            instagram: "https://www.instagram.com/tomas.steifo/",
        },
        extraImages: []
    },
    {
        id: "raminta",
        image: ramintaImage,
        socials: {
            instagram: "https://www.instagram.com/raminta_staskute/",
        },
        extraImages: []
    },
    {
        id: "jennifer",
        image: jenniferImage,
        socials: {
            instagram: "https://www.instagram.com/tornstierna/",
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
            instagram: "https://www.instagram.com/noraysisco.bachata/",
        },
        extraImages: []
    },
    {
        id: "emma",
        image: emmaImage,
        socials: {
            instagram: "https://www.instagram.com/harjuthomasson/",
        },
        extraImages: []
    },
    {
        id: "andris",
        image: andrisImage,
        socials: {
            instagram: "https://www.instagram.com/andris.freeman/",
        },
        extraImages: []
    }
];

// 3. Exportera listan
export default instructorsData;