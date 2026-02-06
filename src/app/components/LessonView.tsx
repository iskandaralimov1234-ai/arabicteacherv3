"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { Lesson } from "../data/curriculum";

interface LessonViewProps {
    lesson: Lesson;
    onStartQuiz: () => void;
}

export default function LessonView({ lesson, onStartQuiz }: LessonViewProps) {
    return (
        <div className="w-full max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="flex items-center space-x-3 text-emerald-500 mb-8">
                <BookOpen size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Theory Module</span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-6">{lesson.title}</h2>
                <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-2xl mb-8">
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        {lesson.theory.text}
                    </p>
                </div>

                <h3 className="text-lg font-bold text-neutral-500 uppercase mb-4 tracking-tighter">Key Examples:</h3>
                <div className="grid gap-4 mb-12">
                    {lesson.theory.examples.map((ex, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-neutral-900 rounded-xl border border-white/5">
                            <span className="text-neutral-500">{ex.meaning}</span>
                            <span className="text-2xl font-arabic tracking-wide" dir="rtl">{ex.arabic}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={onStartQuiz}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 py-6 rounded-2xl text-xl font-black flex items-center justify-center space-x-3 transition-all hover:glow group"
                >
                    <span>PROCEED TO TESTING</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
            </motion.div>
        </div>
    );
}
