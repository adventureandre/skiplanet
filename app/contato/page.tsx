"use client";

import Snowfall from "react-snowfall";
import { Header } from "../components/header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contato() {
    const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.3 });

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

            <div
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center opacity-80"
                style={{ backgroundImage: "url('/desenvolvimento_compress.jpg')" }}
            />
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black/60" />

            <Header />

            <main className="w-full px-4 md:px-10 max-w-4xl mx-auto mt-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-8">
                    Entre em Contato
                </h1>

                <p className="text-white text-center text-lg mb-10">
                    Estamos prontos para ajudar! Preencha o formulário abaixo ou entre em contato diretamente pelos nossos canais.
                </p>

                {/* Formulário animado de baixo pra cima */}
                <motion.div
                    ref={formRef}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={formInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <form className="bg-[#003366] p-6 rounded-lg shadow-lg space-y-6">
                        {/* Campos do formulário */}
                        <div>
                            <label htmlFor="name" className="block text-white font-semibold mb-2">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-3 rounded bg-[#00264d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#66c3e1]"
                                placeholder="Digite seu nome"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-white font-semibold mb-2">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 rounded bg-[#00264d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#66c3e1]"
                                placeholder="Digite seu e-mail"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-white font-semibold mb-2">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="w-full p-3 rounded bg-[#00264d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#66c3e1]"
                                placeholder="Digite sua mensagem"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#66c3e1] hover:bg-[#005f8d] text-white font-semibold py-3 px-6 rounded transition"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </motion.div>

                {/* Canais de atendimento com efeito separado */}
                <motion.div
                    ref={infoRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <section className="bg-[#66c3e1] w-full rounded-sm py-10 text-center text-white mt-20">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Nossos Canais de Atendimento
                        </h2>
                        <p className="text-white text-base mb-6">
                            Entre em contato conosco pelos canais abaixo:
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <strong>Telefone:</strong> (11) 1234-5678
                            </li>
                            <li>
                                <strong>E-mail:</strong> contato@skiplanet.com.br
                            </li>
                            <li>
                                <strong>Endereço:</strong> Balneário - Camboriú, SC
                            </li>
                        </ul>
                    </section>
                </motion.div>
            </main>
        </>
    );
}
