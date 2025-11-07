'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface SkillCardProps {
    title: string;
    color: string;
    children: React.ReactNode;
}

const SkillCard = ({ title, color, children }: SkillCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleOpen = () => {
        if (isMobile) setIsOpen(!isOpen);
    };

    const alwaysOpen = !isMobile;

    return (
        <div className="bg-black/70 border-2 border-white/30 rounded-2xl shadow-md transition p-5 md:p-6 hover:shadow-lg">
            {/* Header */}
            <div
                className={`flex justify-between items-center ${isMobile ? "cursor-pointer" : ""}`}
                onClick={toggleOpen}
            >
                <h3 className={`text-xl font-semibold mb-0 ${color}`}>{title}</h3>
                {isMobile && (
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="text-white" />
                    </motion.div>
                )}
            </div>

            {/* Expandable Section */}
            <AnimatePresence>
                {(isOpen || alwaysOpen) && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-3"
                    >
                        <ul className="space-y-2 text-gray-300">{children}</ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function SkillsSection() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SkillCard title="🧱 Frontend Development" color="text-cyan-400">
                <>
                    <li><b>Languages:</b> HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
                    <li><b>Frameworks:</b> Vue.js, Nuxt.js, React.js, Next.js, Alpine.js, jQuery</li>
                    <li><b>Styling:</b> SCSS/SASS, Tailwind CSS, Bootstrap, Vuetify, Bladewind UI</li>
                </>
            </SkillCard>

            <SkillCard title="⚙️ Backend Development" color="text-green-400">
                <>
                    <li><b>Languages:</b> PHP, Python</li>
                    <li><b>Frameworks:</b> Laravel, Livewire, Filament</li>
                    <li><b>Databases:</b> MySQL, PostgreSQL, MongoDB, Redis</li>
                    <li><b>APIs:</b> RESTful APIs, Laravel Sanctum/Passport</li>
                </>
            </SkillCard>

            <SkillCard title="☁️ DevOps & Cloud" color="text-yellow-400">
                <>
                    <li>Linux (Server & CLI)</li>
                    <li>AWS (EC2, S3, etc.)</li>
                    <li>Docker</li>
                    <li>Hostinger Deployment</li>
                    <li>Git, GitHub & GitLab</li>
                </>
            </SkillCard>

            <SkillCard title="🔍 Search & Data Tools" color="text-purple-400">
                <>
                    <li>Typesense</li>
                    <li>Algolia</li>
                    <li>Supabase (Database & Auth)</li>
                </>
            </SkillCard>

            <SkillCard title="🧠 Other Skills" color="text-pink-400">
                <>
                    <li>Responsive & Accessible UI Design</li>
                    <li>Performance Optimization</li>
                    <li>Deployment Automation</li>
                    <li>Database Design & Query Optimization</li>
                </>
            </SkillCard>

            <SkillCard title="🎨 Animations & Graphics" color="text-white">
                <>
                    <li><b>3D & Visuals:</b> Three.js, tsParticles / Particles.js</li>
                    <li><b>Animations:</b> Framer Motion, AOS (Animate On Scroll)</li>
                    <li><b>Interactive UI:</b> Parallax effects, smooth scroll, motion-based transitions</li>
                </>
            </SkillCard>
        </div>
    );
}
