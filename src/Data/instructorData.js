// src/data/instructorsData.js
import mikaelImage from '../img/Instructors/instruktörMikael.png';
import mikaelImage1 from '../img/Instructors/instruktörMikael1.jpg';
import mikaelImage2 from '../img/Instructors/instruktörMikael2.jpg';
import karinImage from '../img/Instructors/instruktörKarin.png';
import tomasImage from '../img/Instructors/instruktörTomas.png'; // Lägg till Tomas bild här
import ramintaImage from '../img/Instructors/instruktörRaminta.png'; // Lägg till Raminta bild här
import jenniferImage from '../img/Instructors/instruktörJennifer.png'; // Lägg till Jennifer bild här
import siscoImage from '../img/Instructors/instruktörSisco.jpg'; // Lägg till Sisco bild här
import noraImage from '../img/Instructors/instruktörNora.jpg'; // Lägg till Nora bild här
import irinaImage from '../img/Instructors/instruktörIrina.jpg'; // Lägg till Irina bild här

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
        name: "Irina Korochkina",
        role: "Instruktör",
        title: "Staff Manager",
        image: irinaImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        description: "Irina började dansa ballroom och latinodans i fem års åldern samtidigt som hon utövade gymnastik blandat med balett. " +
            "Sedan dess har dans varit en stor del av hennes liv.\n" +
            "Bachata blev en stor förälskelse efter att Irina tog en prova-på lektion och sedan 2017 har hon undervisat. 2020 blev Irina och Mikael ett danspar och undervisar nu på Fuego Dance School.\n" +
            "Under 1,5 år har Irina tillsammans med Mikael ingått i ett mentorsprogram för Korke och Judith, som är grundare till bachata sensual.\n" +
            "Irinas undervisningsstil kännetecknas av struktur, teknik och pedagogik, som hon också fått från sitt dagliga arbete som lärare."
            ,

        certificates: ["Workshops med Korke & Judith, Pedagogisk utbildning"],
        levels: ["Mammaledig"],
        favoriteTeaching: ["Utbildad lärare,speciallärare, utbildad i dansteknik"],
        extraImages: []
    },

    {
        name: "Karin Andersson",
        role: "Instruktör",
        title: "Safe Dance Scene", 
        image: karinImage,
        socials: {
            instagram: "https://www.instagram.com/sensualstyling/",
        },
        description: "Mer information om Karin kommer snart. ",

        certificates: [],
        levels: ["Nivå 4, Nivå 4 Teknik"],
        favoriteTeaching: [],
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
        description: "Tomas Steifo är född och uppvuxen i Sverige. Han upptäckte bachata på ett ganska oväntat sätt, efter att ha skadat armbågen under en kampsportstävling. Under sin rehabilitering råkade han en dag se människor som dansade bachata utomhus." +
            " Det fångade genast hans intresse, och han tänkte: \"Varför inte testa?\" " +
            "Sedan september 2021 har han inte slutat dansa.\n" +
            "\n" +
            "Genom åren har Tomas deltagit i många tävlingar, rest, undervisat på " +
            "festivaler och till och med agerat domare i danstävlingar. Mycket av" +
            " hans inspiration kommer från hans bakgrund inom MMA, särskilt sättet man " +
            "där bryter ner och lär ut tekniker.\n" +
            "\n" +
            "Det tankesättet har starkt påverkat hur han själv undervisar i dans idag. För " +
            "Tomas är den bästa delen att se sina elever utvecklas och överraska sig själva – " +
            "det där ögonblicket när något plötsligt klickar för dem är det som betyder mest för honom. ",

        certificates: [],
        levels: ["Nivå 2, Nivå 3"],
        favoriteTeaching: [],
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
        description: "Mer information om Raminta kommer snart. ",

        certificates: [],
        levels: ["Styling Class för Följare"],
        favoriteTeaching: [],
        extraImages: []
    },
    {
        name: "Jennifer Tornstierna",
        role: "Instruktör",
        title: "Event Cordinator",
        image: jenniferImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        description: "Mer information om Jennifer kommer snart. ",

        certificates: [],
        levels: ["Nivå 2, Nivå 3, Nivå 3 Teknik, Nivå 5"],
        favoriteTeaching: [],
        extraImages: []
    },

    {
        name: "Fransisco (Sisco) Morales",
        role: "Instruktör",
        title: "Social Media Marketing",
        image: siscoImage,
        socials: {
            instagram: "https://www.instagram.com/noraysisco.bachata/",
        },
        description: "Sisco snubblade in i bachatan med två vänsterfötter och föll pladask. Åtta år senare är han en certifierad instruktör och tekniknörd med skarpt öga för detaljer i dansen.\n" +
            "Med över 20 års erfarenhet från gym- och träningsvärlden har Sisco stenkoll på hur kroppen funkar och hur man aktiverar sin danskropp. Den kunskapen delar han generöst med sina elever\n." +
            "Hans största engagemang är elevernas utveckling och han är petig på bästa sätt. Han älskar att coacha fram trygga och säkra dansare från grunden, gärna genom humor och egenpåhittade metaforer.\n" +
            "Sisco både för, följer och rollroterar i bachata, vilket enligt honom är det smartaste sättet att fatta hur hela dansen hänger ihop.",

        certificates: ["Rolerotationsinstruktör  & Bachata sensual level 1-instruktör"],
        levels: ["Rolerotation"],
        favoriteTeaching: [],
        extraImages: []
    },
    {
        name: "Nora Andersdotter",
        role: "Instruktör",
        title: "Safe Dance Scene",
        image: noraImage,
        socials: {
            instagram: "https://www.instagram.com/sofia.bachata",
            facebook: "https://www.facebook.com/sofia.andersson"
        },
        description: "Nora är en varm och närvarande instruktör som blandar noggrannhet med lekfullhet.\n" +
            "Hon hittade bachata när hon bodde i Barcelona och åker ofta tillbaka för att fylla på med inspiration. I hennes klasser får både takt, teknik och humor plats i en inkluderande miljö. " +
            "Genom kreativitet och en deltagarcentrerad stil vill hon guida sina elever mot aha-upplevelser.\n" +
            "Med sin bakgrund som sexolog och lång erfarenhet av socialt arbete har Nora ett starkt fokus på trygghet, " +
            "samspel och respekt i dansen. Eftersom hon dansar både som följare och förare och roterar mellan rollerna " +
            "är hennes fokus att eleverna förstår lyhördhet, samarbete och valfrihet.",

        certificates: ["Rolerotationsinstruktör , Bachata sensual level 1-instruktör "],
        levels: ["Rolerotation"],
        favoriteTeaching: [""],
        extraImages: []
    }


    // ev fler instruktörer här
];

export default instructors;
