import React from 'react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { Users, Briefcase, Award, Settings } from 'lucide-react';

const modules = [
    {
        icon: <Users className="w-8 h-8 text-teal-400" />,
        title: 'Customer Service Training',
        description: 'Train staff to handle real guest interactions with empathy, professionalism, and confidence. Immersive roleplay scenarios help teams practice service recovery, communication, and delivering memorable guest experiences.'
    },
    {
        icon: <Briefcase className="w-8 h-8 text-teal-400" />,
        title: 'Front Desk Operations',
        description: 'Prepare employees for the fast-paced demands of reception and check-in environments. Teams can practice bookings, guest requests, issue handling, and high-pressure front desk situations in a realistic virtual setting.'
    },
    {
        icon: <Award className="w-8 h-8 text-teal-400" />,
        title: 'Leadership & Management Training',
        description: 'Develop supervisors and managers with scenario-based training focused on leadership, decision-making, and team performance. Build confidence in handling conflict, motivating staff, and managing operational challenges effectively.'
    },
    {
        icon: <Settings className="w-8 h-8 text-teal-400" />,
        title: 'Custom Training Solutions',
        description: 'Create tailored VR training programs designed around your brand standards, workflows, and business goals. EthoGuest helps you deliver learning experiences that match your environment and the way your teams actually work.'
    }
];

export function TrainingModules() {
    return (
        <section id="training" className="py-24 relative bg-navy-900 border-y border-white/5">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Training Modules</h2>
                    <p className="text-lg text-slate-300">
                        Targeted curriculums designed to elevate every aspect of your hospitality business, delivered through the power of spatial computing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {modules.map((mod, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full">
                                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 border border-teal-500/20">
                                    {mod.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    {mod.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
