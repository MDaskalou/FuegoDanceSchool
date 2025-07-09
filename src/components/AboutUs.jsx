// src/components/About.jsx
import "../css/aboutus.css";
import AboutUs1 from "../img/About/About1.png";
import AboutUs2 from "../img/About/About2.png";
import AboutUs3 from "../img/About/About3.jpg";
import AboutUs4 from "../img/About/About4.jpg";
import AboutUs5 from "../img/About/About5.jpg";
import AboutUs6 from "../img/About/About6.jpg";
import AboutUs7 from "../img/About/About7.jpg";
import  AboutUs8 from "../img/About/About8.jpg";
import AboutUs9 from "../img/About/About9.jpg";
import SectionTitle from "./UI/SectionTitle";

import Section from "./UI/Section/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


function About() {
    return (
        <Section className="about-section">
            <div className="about-container">
                <div className="about-left">
                    <SectionTitle color="black">Om Fuego Dance School</SectionTitle>
                    <p className="about-description">
                        Fuego Dance School grundades ur en djup kärlek till Bachata Sensual – en dansstil som uttrycker känsla, 
                        närvaro och musikalitet. Vi erbjuder mer än bara danslektioner –
                        vi skapar en trygg, energifylld och inkluderande miljö där du får växa, oavsett erfarenhetsnivå.                    </p>
                    <p className="about-description">
                        Fuego Dance School grundades ur en djup kärlek till Bachata Sensual – en dansstil som uttrycker känsla, närvaro och musikalitet. Vi erbjuder mer än bara danslektioner –
                        vi skapar en trygg, energifylld och inkluderande miljö där du får växa, oavsett erfarenhetsnivå.                    </p>
                </div>

                <div className="about-right">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="about-carousel"
                        spaceBetween={20}
                        slidesPerView={1} // <--- mobil: 1 bild
                        breakpoints={{
                            1024: {
                                slidesPerView: 2, // <--- desktop: 2 bilder
                                spaceBetween: 30,
                            },
                        }}
                    >

                    {[AboutUs1, AboutUs2, AboutUs3, AboutUs4, AboutUs5, AboutUs6,AboutUs7, AboutUs8, AboutUs9].map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`Dansbild ${index + 1}`} className="about-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </Section>
    );
}

export default About;
