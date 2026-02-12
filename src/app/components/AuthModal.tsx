"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSync: (email: string) => void;
    currentEmail: string | null;
}

export default function AuthModal({ isOpen, onClose, onSync, currentEmail }: AuthModalProps) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsSubmitting(true);
        // Simulate network delay
        setTimeout(() => {
            onSync(email);
            setIsSubmitting(false);
            onClose();
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[120] w-full max-w-md p-6"
                    >
                        <div className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-emerald-600/20 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <ShieldCheck size={32} />
                                </div>

                                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Sync Progress</h3>
                                <p className="text-neutral-400 text-sm mb-8">
                                    {currentEmail
                                        ? `Currently synced as ${currentEmail}. Enter a new email to change.`
                                        : "Enter your email to link your progress and save it for the future."}
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="w-full bg-neutral-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span>{isSubmitting ? "Syncing..." : "Sync Now"}</span>
                                        {!isSubmitting && <ArrowRight size={18} />}
                                    </button>
                                </form>

                                <div className="mt-8 flex items-center justify-center space-x-2 text-[10px] text-neutral-600 uppercase tracking-widest font-bold">
                                    <ShieldCheck size={12} />
                                    <span>Locked with local encryption</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
