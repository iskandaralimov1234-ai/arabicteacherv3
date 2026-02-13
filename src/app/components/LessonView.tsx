"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, ChevronRight, CheckCircle2, ChevronLeft } from "lucide-react";
import { Lesson } from "../data/types";

interface LessonViewProps {
    lesson: Lesson;
    onStartQuiz: () => void;
    onBack?: () => void; // Optional back handler if needed
}

export default function LessonView({ lesson, onStartQuiz }: LessonViewProps) {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    // Initial scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderContent = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-emerald-400 font-black">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('*') && part.endsWith('*')) {
                return <em key={i} className="text-emerald-200 not-italic font-medium bg-emerald-900/30 px-1 rounded">{part.slice(1, -1)}</em>;
            }
            return part;
        });
    };

    const sections = lesson.theory.sections || [];
    const isStepByStep = sections.length > 0;

    const currentSection = isStepByStep ? sections[currentSectionIndex] : {
        title: "Theory Module",
        content: lesson.theory.text || "",
        examples: lesson.theory.examples || []
    };

    const isLastSection = !isStepByStep || currentSectionIndex === sections.length - 1;
    const progress = ((currentSectionIndex + 1) / (sections.length || 1)) * 100;

    const handleContinue = () => {
        if (!isLastSection) {
            setCurrentSectionIndex(prev => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            onStartQuiz();
        }
    };

    const handleBack = () => {
        if (currentSectionIndex > 0) {
            setCurrentSectionIndex(prev => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <div className="w-full max-w-3xl mx-auto min-h-screen flex flex-col pb-20">
            {/* Minimal Header with Progress */}
            <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 mb-4 md:mb-8 transition-all">
                <div className="max-w-3xl mx-auto w-full flex items-center justify-between mb-2">
                    <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                        {lesson.title.split(':')[0]}
                    </div>
                    <div className="text-xs font-mono text-emerald-500 font-bold">
                        PART {currentSectionIndex + 1}/{sections.length || 1}
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            <div className="flex-1 px-4 md:px-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSectionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="glass p-6 md:p-10 rounded-3xl"
                    >
                        <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 leading-tight">
                            {currentSection.title}
                        </h2>

                        {/* Theory Text */}
                        <div className="prose prose-invert max-w-none mb-10">
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed whitespace-pre-wrap">
                                {currentSection.content.split('\n').map((line, i) => (
                                    <span key={i} className="block mb-4 last:mb-0">
                                        {renderContent(line)}
                                    </span>
                                ))}
                            </p>
                        </div>

                        {/* Examples Section */}
                        {(currentSection.examples && currentSection.examples.length > 0) && (
                            <div className="space-y-4 mb-12">
                                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Examples</h3>
                                <div className="grid gap-3 md:gap-4">
                                    {currentSection.examples.map((ex, i) => (
                                        <div key={i} className="group relative p-5 bg-neutral-900/50 hover:bg-neutral-900 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                                                <div className="text-neutral-400 font-medium text-base md:text-lg order-2 md:order-1">
                                                    {ex.meaning}
                                                </div>
                                                <div className="text-3xl md:text-4xl font-arabic tracking-wide self-end md:self-auto order-1 md:order-2 text-emerald-100" dir="rtl">
                                                    {ex.arabic}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Sticky/Fixed Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-50 md:static md:bg-none md:p-0 md:mt-8">
                <div className="max-w-3xl mx-auto flex gap-3">
                    {currentSectionIndex > 0 && (
                        <button
                            onClick={handleBack}
                            className="p-4 bg-neutral-800 rounded-2xl text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    <button
                        onClick={handleContinue}
                        className={`flex-1 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black flex items-center justify-center space-x-3 transition-all  shadow-lg active:scale-[0.98]
                            ${isLastSection
                                ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20"
                                : "bg-white text-black hover:bg-neutral-200"
                            }`}
                    >
                        <span>{isLastSection ? "START QUIZ" : "CONTINUE"}</span>
                        {isLastSection ? (
                            <ArrowRight className="animate-pulse" />
                        ) : (
                            <ChevronRight />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
