import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function Card({ className, children, ...props }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn("glass-card p-6 md:p-8 flex flex-col items-start text-left transition-all hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:border-teal-500/30", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
