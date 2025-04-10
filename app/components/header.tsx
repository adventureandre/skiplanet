"use client"

import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { useState } from "react"
import { LuMenu, LuX } from "react-icons/lu"
import Link from "next/link"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-10 py-4 bg-black/50">
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={120} height={80} />
          <h1 className="text-white text-[0px]">SkiPlanet</h1>
        </div>

        {/* Menu Mobile Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <LuX size={32} /> : <LuMenu size={32} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-white text-lg">
          <Link href="/" className="hover:text-red-700 transition">Início</Link>
          <Link href="/sobre" className="hover:text-red-700 transition">Sobre</Link>
          <Link href="#precos" className="hover:text-red-700 transition">Nossa História</Link>
          <Link href="#contato" className="hover:text-red-700 transition">Portfólio</Link>
        </nav>

        {/* Botão WhatsApp */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-white font-bold">Agende já sua Visita</span>
          <Link href="#">
            <FaWhatsapp size={32} className="text-white" />
          </Link>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4">
          <nav className="flex flex-col gap-4 text-white text-lg">
            <Link href="/" className="hover:text-red-700 transition">Início</Link>
            <Link  href="/sobre" className="hover:text-red-700 transition">Sobre</Link>
            <Link href="#precos" className="hover:text-red-700 transition">Nossa História</Link>
            <Link href="#contato" className="hover:text-red-700 transition">Portfólio</Link>
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-white font-bold">Agende já sua Visita</span>
            <Link href="#">
              <FaWhatsapp size={32} className="text-white" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
