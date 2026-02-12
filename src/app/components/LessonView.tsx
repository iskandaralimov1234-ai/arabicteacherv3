"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { Lesson } from "../data/types";

interface LessonViewProps {
    lesson: Lesson;
    onStartQuiz: () => void;
}

export default function LessonView({ lesson, onStartQuiz }: LessonViewProps) {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sections = lesson.theory.sections;
    const isStepByStep = sections && sections.length > 0;

    // Legacy support for older lesson structure
    const theoryText = isStepByStep ? sections[currentSectionIndex].content : (lesson.theory.text || "");
    const theoryExamples = isStepByStep ? (sections[currentSectionIndex].examples || []) : lesson.theory.examples;
    const sectionTitle = isStepByStep ? sections[currentSectionIndex].title : "Theory Module";

    const isLastSection = !isStepByStep || currentSectionIndex === sections.length - 1;

    const handleContinue = () => {
        if (!isLastSection) {
            setCurrentSectionIndex(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            onStartQuiz();
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Header / Progress */}
            <div className="flex items-center justify-between space-x-3 text-emerald-500 mb-8">
                <div className="flex items-center space-x-3">
                    <BookOpen size={24} />
                    <span className="font-bold uppercase tracking-widest text-sm">
                        {isStepByStep ? `Part ${currentSectionIndex + 1}/${sections.length}` : "Theory Module"}
                    </span>
                </div>
                {isStepByStep && (
                    <div className="flex space-x-1">
                        {sections.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 w-8 rounded-full transition-colors ${idx <= currentSectionIndex ? "bg-emerald-500" : "bg-emerald-500/20"}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSectionIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-3xl font-black mb-6">{sectionTitle}</h2>

                    <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-2xl mb-8">
                        <div className="text-xl text-neutral-300 leading-relaxed whitespace-pre-wrap">
                            {theoryText}
                        </div>
                    </div>

                    {(theoryExamples && theoryExamples.length > 0) && (
                        <>
                            <h3 className="text-lg font-bold text-neutral-500 uppercase mb-4 tracking-tighter">Examples:</h3>
                            <div className="grid gap-4 mb-12">
                                {theoryExamples.map((ex, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-neutral-900 rounded-xl border border-white/5">
                                        <span className="text-neutral-500">{ex.meaning}</span>
                                        <span className="text-2xl font-arabic tracking-wide" dir="rtl">{ex.arabic}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    <button
                        onClick={handleContinue}
                        className={`w-full py-6 rounded-2xl text-xl font-black flex items-center justify-center space-x-3 transition-all hover:scale-[1.02] active:scale-[0.98] ${isLastSection
                            ? "bg-emerald-600 hover:bg-emerald-500 hover:glow"
                            : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                            }`}
                    >
                        <span>{isLastSection ? "PROCEED TO TESTING" : "CONTINUE"}</span>
                        {isLastSection ? (
                            <ArrowRight className="animate-pulse" />
                        ) : (
                            <ChevronRight />
                        )}
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
