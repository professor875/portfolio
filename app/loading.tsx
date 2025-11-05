// app/loading.tsx
"use client";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-black text-white flex-col gap-4">
            <motion.h1
                className="text-3xl font-bold text-cyan-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
                Welcome to Mubashir Khan’s Portfolio
            </motion.h1>

            <motion.div
                className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
        </div>
    );
}
