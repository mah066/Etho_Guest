import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';
import { Sparkles, ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
            {/* Background elements */}
            <div className="absolute top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-navy-800/80 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Welcome to the Future of Hospitality Training</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                            Train Smarter with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 glow-text">Immersive VR</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
                            EthoGuest transforms hospitality training with immersive, real-world simulations that helps teams learn faster, perform better, and deliver exceptional guest experiences.
                        </p>

                        <ul className="space-y-3 mb-10 max-w-xl text-slate-300">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                                Realistic hotel & service simulations
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                                Customer service to management training
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                                Gamified learning that drives engagement
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                                Fully customizable for your business
                            </li>
                        </ul>

                        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">


                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
                    >
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 glass-card bg-navy-900/50 flex items-center justify-center p-8 mt-10 lg:mt-0">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 border border-white/5 flex items-center justify-center shadow-2xl">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/5 rounded-full animate-[spin_10s_linear_infinite] border border-teal-500/10 border-dashed" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-teal-500/5 rounded-full animate-[spin_8s_linear_infinite_reverse] border border-teal-500/20" />

                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="w-24 h-24 mb-6 rounded-2xl bg-teal-500/20 flex items-center justify-center border border-teal-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                                        <Sparkles className="w-12 h-12 text-teal-400" />
                                    </div>
                                    <span className="text-xl font-medium text-white tracking-widest uppercase glow-text">Virtual Training Space</span>
                                    <span className="text-slate-400 mt-2">Interactive 3D Environment Module</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
