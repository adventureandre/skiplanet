"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { LuCheck, LuSnowflake,LuPlay, LuStar, LuArrowLeft, LuArrowRight, LuX } from "react-icons/lu";
import { useInView } from "react-intersection-observer";
import Snowfall from "react-snowfall";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Header } from "../components/header";

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Snowfall
        color="white"
        snowflakeCount={20}
        style={{
          zIndex: 99,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      />

      <div className="w-full h-screen relative background-cover">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/apresentacao.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <Header />

        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white z-10 absolute mt-5 w-full">
          Maior parque de neve do Brasil
        </h2>
      </div>

      <main className="relative">
        <div
          className="w-full h-auto bg-no-repeat bg-top bg-cover pt-10 pb-5 mt-[-125px]"
          style={{ backgroundImage: "url('/svg2.png')" }}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center gap-10 px-4">
            {[{
              icon: <LuSnowflake size={40} className="text-red-700 mx-auto" />,
              text: "Neve Real",
              animation: { opacity: 0, x: 60 },
            }, {
              icon: <LuCheck size={40} className="text-red-700 mx-auto" />,
              text: "Diversão Garantida",
              animation: { opacity: 0, scale: 0.5 },
            }, {
              icon: <LuStar size={40} className="text-red-700 mx-auto" />,
              text: "Estrutura 5 Estrelas",
              animation: { opacity: 0, x: -60 },
            }].map((item, i) => (
              <li key={i} className="flex flex-col justify-center items-center gap-2 text-center">
                <motion.div
                  ref={ref}
                  initial={item.animation}
                  animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        <Parallax bgImage="/banner_compress-2.jpg" strength={300} bgImageStyle={{ objectFit: "cover" }}>
          <div className="flex flex-col justify-center items-center text-center px-4 bg-[#1d5491]">
            <div className="py-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg animate-bounce flex items-center gap-2 transition-all duration-300"
              >
                <LuPlay size={24} />
                Clique aqui e assista ao vídeo
              </button>

            </div>

            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 px-4">
                <div className="relative w-full max-w-4xl rounded-lg shadow-lg p-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-[-20px] right-[-20px] text-red-500 hover:text-red-700"
                  >
                    <LuX size={30} />
                  </button>

                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src="https://www.youtube.com/embed/8tnW3q0pJCY?si=i2cuXAeHjTaOhecn"
                      title="Vídeo"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "0.5rem",
                      }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-auto md:h-[700px] flex flex-col justify-center items-center text-center px-4 py-10 relative">
            <div className="absolute inset-0 bg-black/50 z-0" />
            <div className="relative z-10 text-white space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">SkiPlanet</h2>
              <p className="text-xl md:text-2xl">Aventura na neve começa aqui!</p>
              <p className="text-sm max-w-xl mx-auto">
                O primeiro complexo temático de neve do Brasil: uma experiência inédita em Balneário Camboriú
              </p>
              <h3 className="text-2xl md:text-4xl mt-5 text-blue-400">
                Atrações exclusivas no coração de Santa Catarina
              </h3>
              <div className="text-white space-y-2">
                {[{
                  icon: "neve.svg",
                  text: "Um parque de neve autêntico, com experiências reais de esportes e atividades na neve."
                }, {
                  icon: "hotel.svg",
                  text: "Hotel de luxo inspirado nos Alpes Suíços."
                }, {
                  icon: "praia.svg",
                  text: "Um contraste único entre o litoral e o clima alpino."
                }].map((item, i) => (
                  <p key={i} className="flex flex-row justify-center items-center gap-2 text-lg md:text-2xl">
                    <Image src={item.icon} alt={item.text} width={30} height={30} />
                    {item.text}
                  </p>
                ))}
                <h3 className="text-2xl md:text-4xl mt-5 text-blue-400">
                  Praia e neve no mesmo dia
                </h3>
              </div>
            </div>
          </div>

          <section className=" bg-black/50">
            <div className="relative container mx-auto max-w-7xl px-4 py-10">
              <h1 className="text-4xl my-5 text-blue-400">O maior parque de neve indoor da América Latina: a principal atração do Ski Planet</h1>

              <Swiper
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                spaceBetween={15}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
              >
                {/* SwiperSlides */}
                <SwiperSlide >
                  <article className="flex flex-col justify-center items-center gap-2">
                    <Image
                      src="/esportes-na-neve_compress.jpg"
                      alt="Imagem do parque"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                    <h2 className="text-2xl font-bold text-white">Esportes na Neve</h2>
                    <p className="text-white">
                      Pista ampla para esqui e snowboard
                    </p>
                  </article>
                </SwiperSlide>
                <SwiperSlide >
                  <article className="flex flex-col justify-center items-center gap-2">
                    <Image
                      src="/lazer-e-entretenimento_compress.jpg"
                      alt="Imagem do parque"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                    <h2 className="text-2xl font-bold text-white">Lazer e Entretenimento</h2>
                    <p className="text-white">
                      Atividades interativas e atrações temáticas para todas as idades
                    </p>
                  </article>
                </SwiperSlide>
                <SwiperSlide >
                  <article className="flex flex-col justify-center items-center gap-2">
                    <Image
                      src="/gastronomia-tematica_compress.jpg"
                      alt="Imagem do parque"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                    <h2 className="text-2xl font-bold text-white">Gastronomia Temática</h2>
                    <p className="text-white">
                      Experiências culinárias imersivas
                    </p>
                  </article>
                </SwiperSlide>
              </Swiper>

              <button className="hidden md:flex ml-[-60px] custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black p-3 rounded-full shadow-lg z-10">
                <LuArrowLeft />
              </button>
              <button className="hidden md:flex mr-[-60px] custom-next absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black p-3 rounded-full shadow-lg z-10">
                <LuArrowRight />
              </button>
            </div>
          </section>
        </Parallax>

        <section className=" bg-[#1d5491]">
          <div className="relative container mx-auto max-w-7xl px-4 py-10">
            <h1 className="text-4xl my-5 text-blue-400 w-full text-center">E tem muito mais!
              Diversão e entretenimento em nível internacional</h1>

            <Swiper
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              spaceBetween={15}
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
            >
              {/* SwiperSlides */}
              <SwiperSlide >
                <article className="flex flex-col justify-center items-center gap-2">
                  <Image
                    src="/carrossel-1_compress.jpg"
                    alt="Imagem do parque"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </article>
              </SwiperSlide>
              <SwiperSlide >
                <article className="flex flex-col justify-center items-center gap-2">
                  <Image
                    src="/carrossel-5_compress.jpg"
                    alt="Imagem do parque"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </article>
              </SwiperSlide>


              <SwiperSlide >
                <article className="flex flex-col justify-center items-center gap-2">
                  <Image
                    src="/carrossel-3_compress.jpg"
                    alt="Imagem do parque"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </article>
              </SwiperSlide>

              <SwiperSlide >
                <article className="flex flex-col justify-center items-center gap-2">
                  <Image
                    src="/carrossel-2_compress.jpg"
                    alt="Imagem do parque"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </article>
              </SwiperSlide>

            </Swiper>

            <button className="hidden md:flex ml-[-60px] custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black p-3 rounded-full shadow-lg z-10">
              <LuArrowLeft />
            </button>
            <button className="hidden md:flex mr-[-60px] custom-next absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black p-3 rounded-full shadow-lg z-10">
              <LuArrowRight />
            </button>
          </div>
        </section>

        <section className="w-full flex justify-center items-center py-10 bg-white px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.96727462742!2d-48.745538415463294!3d-16.625405891165247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ecd610b97ba09%3A0xa7c69c6fd34feb3a!2sFunilaria%20e%20pintura!5e0!3m2!1spt-BR!2sbr!4v1744081837091!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
    </>
  );
}
