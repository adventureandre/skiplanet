"use client";

import Snowfall from "react-snowfall";
import { Header } from "../components/header";
import Image from "next/image";
import { useState } from "react";

export default function Portifolio() {
  const images = [
    "/carrossel-1_compress.jpg",
    "/carrossel-2_compress.jpg",
    "/carrossel-3_compress.jpg",
    "/carrossel-4_compress.jpg",
    "/carrossel-5_compress.jpg",
    "/carrossel-6_compress.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        style={{ backgroundImage: "url('/esportes-na-neve_compress.jpg')" }}
      />
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black/60" />

      <Header />

      {/* Conteúdo principal */}
      <main className="w-full px-4 md:px-10 max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-8">
          Portfólio
        </h1>

        <p className="text-white text-center text-lg mb-10">
          Confira algumas imagens incríveis do SkiPlanet, o maior parque de neve do Brasil!
        </p>

        {/* Galeria de imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(src)} // Abre o modal com a imagem selecionada
            >
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white font-bold text-lg">Imagem {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal para exibir a imagem */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/75">
          <div className="relative">
            {/* Botão para fechar o modal */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300"
            >
              ✖
            </button>

            {/* Imagem no modal */}
            <Image
              src={selectedImage}
              alt="Imagem aberta"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}