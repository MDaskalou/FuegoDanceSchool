// src/data/instructorsData.js
import mikaelImage from '../img/Instructors/instruktörMikael.png';
import mikaelImage1 from '../img/Instructors/instruktörMikael1.jpg';
import mikaelImage2 from '../img/Instructors/instruktörMikael2.jpg';
import karinImage from '../img/Instructors/instruktörKarin.png';
import tomasImage from '../img/Instructors/instruktörTomas.png'; // Lägg till Tomas bild här
import ramintaImage from '../img/Instructors/instruktörRaminta.png'; // Lägg till Raminta bild här

const instructors = [
    {
        name: "Mikael Daskalou",
        role: "Instruktör",
        title: "Grundare", // Ny rad!
        image: mikaelImage,
        socials: {
            instagram: "https://www.instagram.com/mikael.bachata/",
            facebook: "https://www.facebook.com/mikael.daskalou"
        },
        description: "Mikaels dansresa började oväntat under en resa till Kuba, där han från början reste för att träna boxning. " +
            "Där upptäckte han salsan – en dans full av energi, känsla och gemenskap – och något klickade. " +
            "Det blev startskottet för en passion som skulle forma de kommande åren av hans liv.\n" +
            "\n" +
            "Sedan dess har Mikael dansat i över 12 år med fokus på bachata, men även med erfarenhet av salsa, " +
            "kizomba och souk. Han har undervisat i dans i cirka 7 år och är grundaren av Fuego Dance School.\n" +
            "\n" +
            "Utöver dansen har Mikael även instruerat i thaiboxning i 9 år och har en utbildning som gymnasielärare i grunden." +
            " Denna kombination har format hans undervisningsstil – " +
            "tydlig, metodisk och inspirerande – med fokus på teknik, musikalitet och trygghet i pardans.\n" +
            "\n" +
            "Han har dessutom lärt bachata sensual i över 1,5 år med Korke & Judith och " +
            "tävlat framgångsrikt i Jack & Jill-formatet. Hans drivkraft är att hjälpa varje elev att " +
            "växa och våga uttrycka sig genom dans.",
        
        certificates: ["Bachata Sensual instruktörskurs Level 1 & 2, Utbildad pedagog"], // Ny rad!
        levels: ["Nivå 1, Nivå 2, Nivå 3"],
        favoriteTeaching: ["Teknik och musikalitet i bachata sensual."],
        extraImages: [mikaelImage1, mikaelImage2]
    },
    {
        name: "Karin Andersson",
        role: "Instruktör",
        title: "Safe Dance Scene", 
        image: karinImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        description: "Sofias dansresa började med en förälskelse i rytmerna från Karibien. " +
            "Hon har dansat bachata i över 6 år och är särskilt intresserad av samspelet i pardansen. " +
            "Med en bakgrund inom både dans och pedagogik har hon ett naturligt sätt att vägleda elever steg för steg.\n" +
            "\n" +
            "Sofia undervisar främst i nivå 1 och 2, och brinner för att skapa en välkomnande atmosfär där alla känner sig inkluderade. " +
            "Hennes styrka ligger i att förklara tekniska moment på ett enkelt och pedagogiskt sätt.",

        certificates: ["Workshops med Korke & Judith, Pedagogisk utbildning"],
        levels: ["Nivå 1, Nivå 2"],
        favoriteTeaching: ["Teknik och musikalitet i bachata sensual."],
        extraImages: []
    },

    {
        name: "Tomas Steifo",
        role: "Instruktör",
        title: "Event Cordinator",
        image: tomasImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        description: "Sofias dansresa började med en förälskelse i rytmerna från Karibien. " +
            "Hon har dansat bachata i över 6 år och är särskilt intresserad av samspelet i pardansen. " +
            "Med en bakgrund inom både dans och pedagogik har hon ett naturligt sätt att vägleda elever steg för steg.\n" +
            "\n" +
            "Sofia undervisar främst i nivå 1 och 2, och brinner för att skapa en välkomnande atmosfär där alla känner sig inkluderade. " +
            "Hennes styrka ligger i att förklara tekniska moment på ett enkelt och pedagogiskt sätt.",

        certificates: ["Workshops med Korke & Judith, Pedagogisk utbildning"],
        levels: ["Nivå 1, Nivå 2"],
        favoriteTeaching: ["Teknik och musikalitet i bachata sensual."],
        extraImages: []
    },
    {
        name: "Raminta Staskute",
        role: "Instruktör",
        title: "Social Media Marketing",
        image: ramintaImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        description: "Sofias dansresa började med en förälskelse i rytmerna från Karibien. " +
            "Hon har dansat bachata i över 6 år och är särskilt intresserad av samspelet i pardansen. " +
            "Med en bakgrund inom både dans och pedagogik har hon ett naturligt sätt att vägleda elever steg för steg.\n" +
            "\n" +
            "Sofia undervisar främst i nivå 1 och 2, och brinner för att skapa en välkomnande atmosfär där alla känner sig inkluderade. " +
            "Hennes styrka ligger i att förklara tekniska moment på ett enkelt och pedagogiskt sätt.",

        certificates: ["Workshops med Korke & Judith, Pedagogisk utbildning"],
        levels: ["Nivå 1, Nivå 2"],
        favoriteTeaching: ["Teknik och musikalitet i bachata sensual."],
        extraImages: []
    }


    // ev fler instruktörer här
];

export default instructors;
