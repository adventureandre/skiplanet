"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { LuCheck, LuSnowflake, LuStar } from "react-icons/lu";
import { useInView } from "react-intersection-observer";
import Snowfall from "react-snowfall";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* Snowfall effect */}
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
        {/* Vídeo de fundo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/apresentacao.mp4"
          autoPlay
          loop
          muted
        ></video>


        {/* Conteúdo sobreposto */}
        <header className="relative z-10 py-4 bg-black/50">
          <div className="flex flex-row justify-center items-center container mx-auto max-w-7xl px-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={300} height={100} />
              <h1 className="text-4xl font-bold text-[0px] text-white">SkiPlanet</h1>

            </div>

            {/* Menu de navegação */}
            <nav className="w-full">
              <ul className="flex flex-row justify-center items-center gap-4 text-lg text-white">
                <li className="hover:text-red-700 transition duration-300">
                  <a href="#home">Início</a>
                </li>
                <li className="hover:text-red-700 transition duration-300">
                  <a href="#sobre">Sobre</a>
                </li>
                <li className="hover:text-red-700 transition duration-300">
                  <a href="#precos">Nossa História</a>
                </li>
                <li className="hover:text-red-700 transition duration-300">
                  <a href="#contato">Portifolio</a>
                </li>
              </ul>
            </nav>

            {/* Botão de WhatsApp */}
            <div className="w-[450px] flex flex-row justify-center items-center gap-3">
              <span className="text-1xl font-bold text-white">
                Agende já sua Visita
              </span>
              <a href="">
                <FaWhatsapp size={50} className="text-white" />
              </a>
            </div>
          </div>

        </header>
        <h2 className="text-5xl font-extrabold text-center text-white zindex-10 absolute mt-5 w-full">
          Maior parque de neve do Brasil
        </h2>
      </div>

      <main className="relative">
        {/* SVG decorativo no topo do main */}
        <div
          className="w-full h-[160px] bg-no-repeat bg-top bg-cover mt-[-160px] pt-[50px] "
          style={{ backgroundImage: "url('/svg2.png')" }}
        >

          <ul className="flex bg-none flex-row justify-center items-center gap-10">
            <li className="flex flex-col justify-center items-center gap-2">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <LuSnowflake size={50} className="text-red-700 mx-auto" />
                <span>Neve Real</span>
              </motion.div>
            </li>
            <li className="flex flex-col justify-center items-center gap-2">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
              >
                <LuCheck size={50} className="text-red-700 mx-auto" />
                <span>Diversão Garantida</span>
              </motion.div>
            </li>
            <li className="flex flex-col justify-center items-center gap-2">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <LuStar size={50} className="text-red-700 mx-auto" />
                <span>Estrutura 5 Estrelas</span>
              </motion.div>
            </li>
          </ul>
        </div>

        {/* Parallax */}
        <Parallax
          bgImage="/banner_compress-2.jpg"
          strength={300} // Controla a intensidade do efeito de parallax
          bgImageStyle={{ objectFit: "cover", }} // Garante que a imagem cubra o espaço
         
        >
          <div className="h-[700px] flex justify-center items-center text-center">
            <div className="relative z-10 text-white">
              <h2 className="text-5xl font-bold">SkiPlanet</h2>
              <p className="text-2xl">Aventura na neve começa aqui!</p>
              <p className="text-sm">
                O primeiro complexo temático de neve do Brasil: uma experiência inédita em Balneário Camboriú
              </p>
              <h3 className="text-4xl mt-5 text-blue-400">
                Atrações exclusivas no coração de Santa Catarina
              </h3>
              <p className="flex flex-row justify-center items-center gap-2 text-2xl">
                <Image src="neve.svg" alt="icone neve" width={30} height={30} /> Um parque de neve autêntico, com experiências reais de esportes e atividades na neve, proporcionando diversão para todas as idades.
              </p>

              <p className="flex flex-row justify-center items-center gap-2 text-2xl">
                <Image src="hotel.svg" alt="icone hotel" width={30} height={30} /> Um hotel de luxo inspirado nos Alpes Suíços, oferecendo conforto, sofisticação e um serviço de padrão internacional.
              </p>
              <h3 className="text-4xl mt-5 text-blue-400">
                Praia e neve no mesmo dia: uma experiência única nas Américas
              </h3>

              <p className="flex flex-row justify-center items-center gap-2 text-2xl">
                <Image src="praia.svg" alt="icone hotel" width={30} height={30} /> Um hotel de luxo inspirado nos Alpes Suíços, oferecendo conforto, sofisticação e um serviço de padrão internacional.
              </p>
            </div>
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <section className="">
          <div className="relative container mx-auto max-w-7xl px-4 py-10">

            <h1 className="text-4xl my-5 text-blue-400">O maior parque de neve indoor da América Latina: a principal atração do Ski Planet</h1>

            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
              className=""
            >
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

            <button className=" ml-[-60px]  custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black p-3 rounded-full shadow-lg z-10">
              <LuArrowLeft />
            </button>
            <button className="mr-[-60px] custom-next absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black p-3 rounded-full shadow-lg z-10">
              <LuArrowRight />
            </button>

          </div>
        </section>

        </Parallax>

        {/* //Carrossel */}
        



        <section className="w-full flex justify-center items-center py-10 bg-white">
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
