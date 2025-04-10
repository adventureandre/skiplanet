"use client";

import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Snowfall from "react-snowfall";
import { Header } from "../components/header";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Sobre() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* Efeito de neve */}
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

      {/* Fundo com imagem + overlay escuro */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/carrossel-2-4_compress.jpg')" }}
      />
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black/60" />

      <Header />

      {/* Conteúdo principal */}
      <main
        ref={ref}
        className="w-full px-4 md:px-10 max-w-4xl mx-auto mt-10"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-8">
          Características exclusivas do hotel Ski Planet
        </h1>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-blue-200 font-semibold hover:text-white transition-all flex items-center justify-center gap-2">
              <Image src="/design.svg" alt="Ícone de design" width={30} height={30} />
              Design exclusivo em estilo Alpes Suíços
            </AccordionTrigger>
            <AccordionContent className="text-white text-base">
              Arquitetura elegante que remete ao charme e à sofisticação dos tradicionais chalés alpinos, criando um ambiente acolhedor e luxuoso.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg text-blue-200 font-semibold hover:text-white transition-all flex items-center justify-center gap-2">
              <Image src="/localizacao.svg" alt="Ícone de localização" width={30} height={30} />
              Integração total com o parque
            </AccordionTrigger>
            <AccordionContent className="text-white text-base">
              Conexão perfeita com o parque de neve, proporcionando fácil acesso às atrações e ampliando a experiência dos hóspedes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg text-blue-200 font-semibold hover:text-white transition-all flex items-center justify-center gap-2">
              <Image src="/lazer.svg" alt="Ícone de lazer" width={30} height={30} />
              Lazer e entretenimento em grande estilo
            </AccordionTrigger>
            <AccordionContent className="text-white text-base">
              Aproximadamente 22.000 m² de áreas dedicadas ao lazer e entretenimento, incluindo espaços para relaxamento, diversão e atividades exclusivas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg text-blue-200 font-semibold hover:text-white transition-all flex items-center justify-center gap-2">
              <Image src="/picina.svg" alt="Ícone de piscina" width={30} height={30} />
              Piscina suspensa icônica com borda infinita
            </AccordionTrigger>
            <AccordionContent className="text-white text-base">
              Deslumbre-se com a grandiosidade da piscina suspensa de borda infinita, onde o horizonte e o luxo se encontram em um espetáculo incomparável.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <section className="bg-[#66c3e1] w-full rounded-sm py-10 text-center text-white mt-20">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    Um projeto inédito no Brasil, que combina neve, luxo e exclusividade em um só destino.
  </h2>
  <p className="text-white text-base mb-6">
    Seja um dos primeiros a conhecê-lo.
  </p>
  <button className="bg-[#003366] hover:bg-[#00264d] text-white font-semibold py-2 px-6 rounded transition">
    QUERO SABER MAIS
  </button>
</section>
      </main>
    </>
  );
}
