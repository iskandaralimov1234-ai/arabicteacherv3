"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ZoomIn, ArrowLeft, Lock, CheckCircle2, Star } from "lucide-react";
import { madinaCurriculum, Lesson } from "../data/curriculum";

interface MindMapProps {
    completedLessons: number[];
    onSelectLesson: (id: number) => void;
    onBack: () => void;
}

const ISLANDS = [
    {
        id: "foundations",
        title: "Island of Origins",
        description: "Foundations & Nouns",
        lessonRange: [1, 23],
        color: "from-blue-500 to-cyan-400",
        icon: "🏔️"
    },
    {
        id: "verbs",
        title: "Island of Action",
        description: "Verbs & Daily Life",
        lessonRange: [24, 54],
        color: "from-emerald-500 to-teal-400",
        icon: "⚔️"
    },
    {
        id: "forms",
        title: "Island of Forms",
        description: "Verb Patterns (Awzan)",
        lessonRange: [55, 70],
        color: "from-amber-500 to-orange-400",
        icon: "🏗️"
    },
    {
        id: "mastery",
        title: "Island of Wisdom",
        description: "Advanced Syntax & Quran",
        lessonRange: [71, 88],
        color: "from-purple-600 to-pink-500",
        icon: "🕌"
    }
];

export default function MindMap({ completedLessons, onSelectLesson, onBack }: MindMapProps) {
    const [view, setView] = useState<"islands" | "zoom">("islands");
    const [selectedIsland, setSelectedIsland] = useState<typeof ISLANDS[0] | null>(null);

    const handleIslandClick = (island: typeof ISLANDS[0]) => {
        setSelectedIsland(island);
        setView("zoom");
    };

    const isLessonCompleted = (id: number) => completedLessons.includes(id);

    return (
        <div className="min-h-[80vh] w-full relative overflow-hidden bg-neutral-950 rounded-3xl border border-white/5 font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent)] pointer-events-none" />

            <AnimatePresence mode="wait">
                {view === "islands" ? (
                    <motion.div
                        key="islands-view"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="p-8 h-full flex flex-col items-center justify-center"
                    >
                        <header className="text-center mb-12">
                            <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-2">
                                Knowledge Galaxy
                            </h2>
                            <p className="text-neutral-500">Explore the structure of the Arabic language</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                            {ISLANDS.map((island) => {
                                const lessonsInIsland = madinaCurriculum.filter(
                                    (l: Lesson) => l.id >= island.lessonRange[0] && l.id <= island.lessonRange[1]
                                );
                                const completedInIsland = lessonsInIsland.filter((l: Lesson) => isLessonCompleted(l.id)).length;
                                const progress = (completedInIsland / lessonsInIsland.length) * 100;

                                return (
                                    <motion.button
                                        key={island.id}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleIslandClick(island)}
                                        className="relative group text-left p-6 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                                    >
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${island.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-3 rounded-2xl bg-neutral-800 text-3xl">
                                                {island.icon}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs uppercase tracking-tighter text-neutral-500 font-bold">Progress</div>
                                                <div className="text-xl font-black">{Math.round(progress)}%</div>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-1">{island.title}</h3>
                                        <p className="text-neutral-500 text-sm mb-6">{island.description}</p>

                                        {/* Mini Progress Bar */}
                                        <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                className={`h-full bg-gradient-to-r ${island.color}`}
                                            />
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="zoom-view"
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="p-8 h-full"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <button
                                onClick={() => setView("islands")}
                                className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors"
                            >
                                <ArrowLeft size={20} />
                                <span>Back to Galaxy</span>
                            </button>
                            <div className="flex items-center space-x-3">
                                <Star className="text-amber-500 fill-amber-500" size={20} />
                                <h3 className="text-xl font-bold">{selectedIsland?.title}</h3>
                            </div>
                        </div>

                        {/* Force Graph Like Layout (Simplified Grid for now but with connecting lines logic) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 py-8">
                            {madinaCurriculum
                                .filter((l: Lesson) => l.id >= selectedIsland!.lessonRange[0] && l.id <= selectedIsland!.lessonRange[1])
                                .map((lesson: Lesson, idx: number) => {
                                    const completed = isLessonCompleted(lesson.id);
                                    return (
                                        <motion.div
                                            key={lesson.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.02 }}
                                            className="relative flex flex-col items-center"
                                        >
                                            <button
                                                onClick={() => onSelectLesson(lesson.id)}
                                                className={`
                                                    w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-lg font-bold transition-all relative
                                                    ${completed
                                                        ? `bg-gradient-to-br ${selectedIsland?.color} text-white shadow-lg shadow-${selectedIsland?.color.split('-')[1]}/20`
                                                        : 'bg-neutral-800 text-neutral-600 border border-white/5'}
                                                    hover:scale-110 active:scale-95 group
                                                `}
                                            >
                                                {completed ? (
                                                    <CheckCircle2 size={24} className="animate-in fade-in zoom-in" />
                                                ) : (
                                                    lesson.id
                                                )}

                                                {/* Tooltip on hover */}
                                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold pointer-events-none z-10">
                                                    {lesson.title}
                                                </div>
                                            </button>
                                            <div className="mt-2 text-[10px] text-neutral-600 font-bold uppercase tracking-tighter">
                                                L{lesson.id}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Back Button */}
            {view === "islands" && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <button
                        onClick={onBack}
                        className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full text-sm text-neutral-400 border border-white/5 transition-all"
                    >
                        Exit Mind Map
                    </button>
                </div>
            )}
        </div>
    );
}
