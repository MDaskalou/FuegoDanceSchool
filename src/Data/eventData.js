// src/Data/eventData.js

/*
--- MALL FÖR FRAMTIDA EVENT ---
När du har ett nytt event, kopiera ett objekt från listan nedan,
klistra in det i den tomma "events"-listan längre ner och fyll i med ny information.
Kom ihåg att ge det ett nytt, unikt id.

const events_template = [
    {
        id: 1,
        title: "RoleRotation Workshop",
        date: "20 juli 2025",
        time: "12:30–15:30",
        location: "Fuego Studio, Göteborg",
        level: "Open – basic bachata steps are all you need",
        bring: "Indoor shoes, a water bottle, and an open mind",
        shortDescription:
            "Discover how much more fun bachata becomes when you learn both leading and following. " +
            "In this high-energy workshop, Nora & Sisco guide you step by step through techniques that make role rotation smooth, musical, and playful.",
        description: "Bachata RoleRotation Workshop...",
        image: require("../img/Events/Sisco&NoraEvent.png"),
        link: "https://app.coursely.se/activity/ea84c52e-ccc0-4938-adca-29212e16c383"
    }
];
*/


// Detta är den aktiva listan som hemsidan använder.
// Just nu är den tom, så meddelandet "Inga event..." kommer att visas.
const events = [];


export default events;