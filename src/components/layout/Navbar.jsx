import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from './Container';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Training', href: '#training' },
        { name: 'Features', href: '#features' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-white tracking-wider">
                            EthoGuest<span className="text-teal-400">.</span>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Button size="sm">Book a Demo</Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="p-2 text-slate-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-b border-white/10 py-4 px-4 shadow-xl">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block text-base font-medium text-slate-300 hover:text-teal-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>Book a Demo</Button>
                            </li>
                        </ul>
                    </div>
                )}
            </Container>
        </header>
    );
}
