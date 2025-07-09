import FuegoLogo from "../img/FuegoLogoimg.png";

const courses = [
    {
        id: 1,
        title: "Nivå 1",
        image: FuegoLogo, // Ändra tillbaka till require() om det behövs
        description: "För dig som är helt ny till bachata. Vi går igenom grundläggande steg, takt och enkla turer.",
        times: "Onsdagar kl 18:00 – 19:30",
        requirements: "Inga förkunskaper krävs",
        bookingLink: "https://app.coursely.se/activity/4e2309bd-e426-4e34-8b81-c43f15d9d12e"
    },
    {
        id: 2,
        title: "Nivå 2",
        image: FuegoLogo,
        description: "Vi bygger vidare på grunderna med mer variation, musikalitet och partnering.",
        times: "Måndag kl 18:00 – 19:30 eller Onsdag kl 19:40 – 21:10",
        requirements: "Du bör ha gått nivå 1 eller motsvarande",
        bookingLink: "https://dinbokningssida.se/niva2"
    },
    {
        id: 3,
        title: "Nivå 3 Teknik",
        image: FuegoLogo,
        description: "Teknikkurs med fokus på kroppskontroll, styrning och kontakt.",
        times: "Tisdagar kl 18:00 – 19:30",
        requirements: "Minst 2 terminer erfarenhet",
        bookingLink: "https://dinbokningssida.se/niva3"
    },
    {
        id: 4,
        title: "Nivå 3",
        image: FuegoLogo,
        description: "Teknikkurs med fokus på kroppskontroll, styrning och kontakt.",
        times: "Tisdagar kl 19:40 – 21:10",
        requirements: "Minst 2 terminer erfarenhet",
        bookingLink: "https://dinbokningssida.se/niva3"
    },
    {
        id: 5,
        title: "Nivå 4",
        image: FuegoLogo,
        description: "Avancerad nivå med flytande rörelser, footwork och kombinationer.",
        times: "Torsdagar kl 19:40 – 21:10",
        requirements: "Du har dansat minst 1 år regelbundet",
        bookingLink: "https://dinbokningssida.se/niva4"
    },
    {
        id: 6,
        title: "Nivå 4 Teknik",
        image: FuegoLogo,
        description: "Fördjupning i teknik, isoleringar och musikalitet.",
        times: "Torsdagar kl 18:00 – 19:30",
        requirements: "Nivå 4 eller motsvarande erfarenhet",
        bookingLink: "https://dinbokningssida.se/niva4teknik"
    },
    {
        id: 7,
        title: "Nivå 5",
        image: FuegoLogo,
        description: "Vår mest avancerade kurs för dig som vill finslipa stil och performance.",
        times: "Söndagar kl 12:00 – 14:00",
        requirements: "Inbjudan krävs",
        bookingLink: "https://dinbokningssida.se/niva5"
    },
    {
        id: 8,
        title: "RoleRotation",
        image: FuegoLogo,
        description: "Vår mest avancerade kurs för dig som vill finslipa stil och performance.",
        times: "Söndagar kl 12:00 – 14:00",
        requirements: "Inbjudan krävs",
        bookingLink: "https://dinbokningssida.se/niva5"
    },
    {
        id: 9,
        title: "Avancerade Grunder",
        image: FuegoLogo,
        description: "Vår mest avancerade kurs för dig som vill finslipa stil och performance.",
        times: "Söndagar kl 12:00 – 14:00",
        requirements: "Inbjudan krävs",
        bookingLink: "https://dinbokningssida.se/niva5"
    },
    {
        id: 10,
        title: "Styling för följare",
        image: FuegoLogo,
        description: "Vår mest avancerade kurs för dig som vill finslipa stil och performance.",
        times: "Söndagar kl 12:00 – 14:00",
        requirements: "Inbjudan krävs",
        bookingLink: "https://dinbokningssida.se/niva5"
    }
];

export default courses;