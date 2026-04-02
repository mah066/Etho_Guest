import React from 'react';
import { Container } from '../layout/Container';
import { motion } from 'framer-motion';
import { Headset, Gamepad2, LayoutDashboard, Compass } from 'lucide-react';

const featuresList = [
    {
        icon: <Headset className="w-6 h-6 text-teal-400" />,
        title: 'Immersive VR Learning',
        description: 'Step into true-to-life hotel environments. Practice without real-world consequences.'
    },
    {
        icon: <Compass className="w-6 h-6 text-teal-400" />,
        title: 'Interactive Scenarios',
        description: '100+ branching narratives that respond dynamically to trainee decisions and tone of voice.'
    },
    {
        icon: <Gamepad2 className="w-6 h-6 text-teal-400" />,
        title: 'Gamified Experience',
        description: 'Build motivation through points, badges, and leaderboards that turn training into an engaging quest.'
    },
    {
        icon: <LayoutDashboard className="w-6 h-6 text-teal-400" />,
        title: 'Custom Dashboards',
        description: 'Track ROI, individual learner paths, and team readiness with real-time analytics for managers.'
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-square w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-teal-500/10 rounded-[3rem] rotate-6 border border-teal-500/20" />
                            <div className="absolute inset-0 bg-navy-800 rounded-[3rem] -rotate-3 border border-white/10 p-8 glass-card">
                                <div className="grid grid-cols-2 gap-4 h-full">
                                    {featuresList.map((feat, i) => (
                                        <motion.div
                                            key={i}
                                            className="bg-navy-950/50 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-white/5"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="mb-3 p-3 bg-teal-500/10 rounded-full">{feat.icon}</div>
                                            <span className="text-sm font-semibold text-white">{feat.title}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Impact</h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            We're not just moving manuals to screens. We're transforming how hospitality skills are acquired. EthoGuest leverages the latest in spatial computing to deliver training that is felt, remembered, and instantly applicable on the floor.
                        </p>

                        <div className="space-y-6">
                            {featuresList.map((feat, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20 shrink-0">
                                        {feat.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">{feat.title}</h4>
                                        <p className="text-slate-400">{feat.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
