import React from 'react';
import { Container } from '../layout/Container';
import { motion } from 'framer-motion';

export function WhyEthoGuest() {
    return (
        <section className="py-24 relative bg-navy-950">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-transparent pointer-events-none" />
            <Container className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-3xl mx-auto">
                    Why Top Hospitality Brands Choose EthoGuest
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-3xl bg-navy-900 border border-white/5 hover:border-teal-500/30 transition-colors"
                    >
                        <h3 className="text-5xl font-bold text-teal-400 mb-4 glow-text">99%</h3>
                        <p className="text-xl font-semibold text-white mb-2">Trainee Engagement</p>
                        <p className="text-slate-400">Interactive VR environments keep staff locked into the learning process.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-8 rounded-3xl bg-navy-900 border border-white/5 hover:border-teal-500/30 transition-colors"
                    >
                        <h3 className="text-5xl font-bold text-teal-400 mb-4 glow-text">Scalable</h3>
                        <p className="text-xl font-semibold text-white mb-2">For Any Team Size</p>
                        <p className="text-slate-400">Deploy consistent, high-quality training across international properties instantly.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-8 rounded-3xl bg-navy-900 border border-white/5 hover:border-teal-500/30 transition-colors"
                    >
                        <h3 className="text-5xl font-bold text-teal-400 mb-4 glow-text">Modern</h3>
                        <p className="text-xl font-semibold text-white mb-2">Appeals to New Talent</p>
                        <p className="text-slate-400">Attract and retain the next generation of workers with cutting-edge tech.</p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
