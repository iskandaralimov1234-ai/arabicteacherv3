"use client";

import { motion } from "framer-motion";
import { Trophy, Star, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useSoundEffects } from "../hooks/useSoundEffects";

interface CelebrationOverlayProps {
    xp: number;
    lessonTitle: string;
    onContinue: () => void;
}

export default function CelebrationOverlay({ xp, lessonTitle, onContinue }: CelebrationOverlayProps) {
    // Sound is triggered by the parent for reliability
    useEffect(() => {
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-6"
        >
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2
                    }}
                    className="mb-8 relative inline-block"
                >
                    <div className="text-[120px] leading-none select-none">🎉</div>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-4 -right-4"
                    >
                        <Star className="text-amber-400 w-12 h-12 fill-amber-400" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">Excellent Work!</h2>
                    <p className="text-neutral-400 mb-8 px-4">
                        You've successfully completed <span className="text-white font-bold">{lessonTitle}</span>
                    </p>

                    <div className="bg-neutral-900 border border-emerald-500/20 rounded-3xl p-8 mb-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Trophy size={80} className="text-emerald-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-1">Total Rewards</div>
                            <div className="text-5xl font-black text-emerald-500">+{xp} XP</div>
                        </div>
                    </div>

                    <button
                        onClick={onContinue}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-emerald-900/40 glow"
                    >
                        <span>CONTINUE JOURNEY</span>
                        <ArrowRight size={24} />
                    </button>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-600/10 blur-[100px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-600/10 blur-[100px] rounded-full -z-10 animate-pulse" />
        </motion.div>
    );
}
