import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

export const Header = () => {
    return(
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
    )
}