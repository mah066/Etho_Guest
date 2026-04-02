import React from 'react';
import { Container } from '../layout/Container';
import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy-900 to-transparent pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Hospitality Education for the Modern Workforce</h2>
                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                            EthoGuest is a next-generation platform blending unparalleled hospitality expertise with advanced digital learning environments. We believe that immersive training directly translates to superior guest experiences.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                            Our mission is to replace outdated manuals and passive videos with dynamic, interactive scenarios. By combining virtual reality (VR) with gamified metaverse environments, we empower your staff to learn faster, retain more, and engage deeply with their professional development.
                        </p>

                        <div className="grid grid-cols-2 gap-8 w-full border-t border-white/10 pt-8 mt-2">
                            <div>
                                <h4 className="text-teal-400 text-4xl font-bold mb-2 glow-text">85%</h4>
                                <p className="text-slate-400">Better Knowledge Retention</p>
                            </div>
                            <div>
                                <h4 className="text-teal-400 text-4xl font-bold mb-2 glow-text">3x</h4>
                                <p className="text-slate-400">Faster Onboarding Time</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card p-2"
                    >
                        <div className="w-full h-full bg-navy-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500 via-navy-900 to-navy-950" />
                            <div className="z-10 text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4 border border-white/20 backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                                <span className="text-white font-medium tracking-wide">Watch the Vision</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
