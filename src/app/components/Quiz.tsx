"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CheckCircle2, XCircle, Trophy, ArrowRight, RefreshCw, Zap } from "lucide-react";
import { Task, Lesson } from "../data/types";
import { useSoundEffects } from "../hooks/useSoundEffects";

import confetti from 'canvas-confetti';

interface QuizProps {
    lesson: Lesson;
    onComplete: (xp: number) => void;
    onProgressXP?: (xp: number) => void;
    onExit: () => void;
}

export default function Quiz({ lesson, onComplete, onProgressXP, onExit }: QuizProps) {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [hearts, setHearts] = useState(5);
    const [xp, setXp] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [scrambledOrder, setScrambledOrder] = useState<string[]>([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [floatingXp, setFloatingXp] = useState<{ id: number; x: number; y: number }[]>([]);
    const { playSuccess, playError, playClick, playHover } = useSoundEffects();

    const currentTask = lesson.tasks[currentTaskIndex];

    useEffect(() => {
        if (currentTask?.type === 'word-scramble' && currentTask.scrambledWords) {
            setScrambledOrder([]);
        }
    }, [currentTaskIndex, currentTask]);

    const handleOptionSelect = (option: string) => {
        if (isAnswered) return;
        playClick();
        setSelectedOption(option);
    };

    const toggleScrambleWord = (word: string) => {
        if (isAnswered) return;
        playClick();
        if (scrambledOrder.includes(word)) {
            setScrambledOrder(scrambledOrder.filter(w => w !== word));
        } else {
            setScrambledOrder([...scrambledOrder, word]);
        }
    };

    const checkAnswer = () => {
        let correct = false;
        if (currentTask.type === 'multiple-choice') {
            correct = selectedOption === currentTask.correctAnswer;
        } else if (currentTask.type === 'word-scramble') {
            correct = scrambledOrder.join(' ') === currentTask.correctAnswer;
        }

        setIsCorrect(correct);
        setIsAnswered(true);

        if (correct) {
            playSuccess();
            setXp(prev => prev + 10);
            if (onProgressXP) onProgressXP(10);

            // Fire Confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#059669', '#10b981', '#fbbf24']
            });

            // Add floating XP animation
            const id = Date.now();
            setFloatingXp(prev => [...prev, { id, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }]);
            setTimeout(() => {
                setFloatingXp(prev => prev.filter(item => item.id !== id));
            }, 2000);
        } else {
            playError();
            setHearts(prev => Math.max(0, prev - 1));
        }
    };

    const nextTask = () => {
        if (currentTaskIndex < lesson.tasks.length - 1) {
            setCurrentTaskIndex(prev => prev + 1);
            setIsAnswered(false);
            setSelectedOption(null);
            setScrambledOrder([]);
        } else {
            setIsFinished(true);
            onComplete(xp);
        }
    };

    if (hearts === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-neutral-900 rounded-3xl border border-red-500/20">
                <XCircle size={64} className="text-red-500 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Out of Hearts!</h2>
                <p className="text-neutral-400 mb-8">Don't worry, every mistake is a step towards mastery.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-neutral-800 hover:bg-neutral-700 px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-all"
                >
                    <RefreshCw size={20} />
                    <span>Try Again</span>
                </button>
            </div>
        );
    }

    if (isFinished) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-neutral-900 rounded-3xl border border-emerald-500/20">
                <Trophy size={64} className="text-amber-500 mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-2">Lesson Complete!</h2>
                <p className="text-emerald-500 font-bold mb-8">+{xp} XP Earned</p>
                <button
                    onClick={onExit}
                    className="bg-emerald-600 hover:bg-emerald-500 px-12 py-4 rounded-xl font-bold transition-all hover:scale-105"
                >
                    Return to Path
                </button>
            </div>
        );
    }

    if (!currentTask) return null;

    return (
        <div className="w-full max-w-2xl mx-auto glass p-6 md:p-8 rounded-3xl relative min-h-[60vh] flex flex-col justify-between">
            <AnimatePresence>
                {floatingXp.map(xpItem => (
                    <motion.div
                        key={xpItem.id}
                        initial={{ opacity: 0, scale: 0.5, y: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: -100
                        }}
                        exit={{ opacity: 0 }}
                        className="absolute left-1/2 top-10 -translate-x-1/2 pointer-events-none z-[100] flex items-center space-x-2 text-emerald-400 font-black text-4xl italic drop-shadow-[0_0_20px_rgba(52,211,153,0.5)] whitespace-nowrap"
                        style={{
                            marginLeft: xpItem.x
                        }}
                    >
                        <Zap fill="currentColor" size={36} />
                        <span>+10 XP</span>
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Header: Hearts & Progress */}
            <div className="flex items-center justify-between mb-8 gap-4">
                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            initial={false}
                            animate={{ scale: i <= hearts ? 1 : 0.8, opacity: i <= hearts ? 1 : 0.3 }}
                        >
                            <Heart
                                size={24}
                                fill={i <= hearts ? "#ef4444" : "transparent"}
                                color={i <= hearts ? "#ef4444" : "#525252"}
                                className="transition-colors duration-300"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="flex-1 max-w-[150px] md:max-w-[200px] h-3 bg-neutral-900 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-300"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentTaskIndex) / lesson.tasks.length) * 100}%` }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                    >
                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -translate-x-full" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }} />
                    </motion.div>
                </div>
                <div className="text-xs md:text-sm font-mono text-neutral-500 font-bold">
                    {currentTaskIndex + 1}/{lesson.tasks.length}
                </div>
            </div>

            {/* Question Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentTask.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col"
                >
                    <h3 className="text-neutral-400 text-sm md:text-base uppercase tracking-widest font-bold mb-4 md:mb-6">{currentTask.question}</h3>

                    {currentTask.arabic && (
                        <div className="text-4xl md:text-6xl text-center md:text-right font-arabic mb-8 md:mb-12 leading-relaxed py-4" dir="rtl">
                            {currentTask.arabic}
                        </div>
                    )}

                    {currentTask.type === 'multiple-choice' && (
                        <div className="grid gap-3 md:gap-4">
                            {currentTask.options?.map((option, idx) => {
                                const isWrongSelection = isAnswered && selectedOption === option && option !== currentTask.correctAnswer;
                                const isCorrectSelection = isAnswered && option === currentTask.correctAnswer;

                                return (
                                    <motion.button
                                        key={option}
                                        onMouseEnter={() => playHover()}
                                        onClick={() => handleOptionSelect(option)}
                                        animate={isWrongSelection ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.4 } } : {}}
                                        className={`group relative p-4 md:p-5 rounded-2xl border text-left text-lg font-medium transition-all duration-200
                                        ${selectedOption === option
                                                ? 'bg-emerald-900/30 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]'
                                                : 'bg-neutral-800/50 border-white/5 hover:bg-neutral-800 hover:border-white/10'
                                            } 
                                        ${isCorrectSelection
                                                ? 'bg-emerald-500/20 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                                                : isWrongSelection
                                                    ? 'bg-red-500/20 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                                                    : 'active:scale-[0.98]'
                                            }
                                    `}
                                        disabled={isAnswered}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{option}</span>
                                            {selectedOption === option && !isAnswered && (
                                                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                                            )}
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    )}

                    {currentTask.type === 'word-scramble' && (
                        <div className="space-y-8">
                            {/* Drop Zone */}
                            <div className="min-h-[80px] p-4 md:p-6 bg-neutral-900/50 rounded-2xl border-2 border-dashed border-neutral-800 flex flex-wrap gap-2 justify-center items-center transition-colors hover:border-neutral-700">
                                {scrambledOrder.length === 0 && (
                                    <span className="text-neutral-600 text-sm uppercase tracking-widest pointer-events-none">Tap words to build sentence</span>
                                )}
                                {scrambledOrder.map((word, i) => (
                                    <motion.button
                                        layoutId={`word-${word}`}
                                        key={`${word}-dropped`}
                                        className="px-4 py-2 md:px-6 md:py-3 bg-emerald-600 rounded-xl font-bold text-white shadow-lg active:scale-95 transition-transform"
                                        onMouseEnter={() => playHover()}
                                        onClick={() => toggleScrambleWord(word)}
                                    >
                                        {word}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Source Words */}
                            <div className="flex flex-wrap gap-3 justify-center">
                                {currentTask.scrambledWords?.filter(w => !scrambledOrder.includes(w)).map((word) => (
                                    <motion.button
                                        layoutId={`word-${word}`}
                                        key={word}
                                        className="px-4 py-2 md:px-6 md:py-3 bg-neutral-800 rounded-xl border border-white/10 hover:border-white/20 active:scale-95 transition-all text-neutral-300 font-medium"
                                        onMouseEnter={() => playHover()}
                                        onClick={() => toggleScrambleWord(word)}
                                    >
                                        {word}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Bottom Action Area */}
            <div className="mt-8 md:mt-12 sticky bottom-0 pt-4 z-20">
                <AnimatePresence mode="wait">
                    {!isAnswered ? (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            onClick={checkAnswer}
                            disabled={(!selectedOption && currentTask.type === 'multiple-choice') || (currentTask.type === 'word-scramble' && scrambledOrder.length === 0)}
                            className="w-full bg-emerald-600 disabled:bg-neutral-800 disabled:text-neutral-600 disabled:cursor-not-allowed hover:bg-emerald-500 text-white text-lg font-black py-5 rounded-2xl shadow-xl transition-all active:scale-[0.98] uppercase tracking-wide"
                        >
                            CHECK ANSWER
                        </motion.button>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className={`p-1 rounded-3xl ${isCorrect ? 'bg-gradient-to-b from-emerald-500/20 to-emerald-900/40 border border-emerald-500/50' : 'bg-gradient-to-b from-red-500/20 to-red-900/40 border border-red-500/50'} backdrop-blur-xl shadow-2xl`}
                        >
                            <div className="p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center space-x-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
                                        {isCorrect ? <CheckCircle2 size={28} /> : <XCircle size={28} />}
                                    </div>
                                    <div className="text-left">
                                        <div className={`font-black text-xl ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                            {isCorrect ? 'Excellent!' : 'Incorrect'}
                                        </div>
                                        {!isCorrect && 'correctAnswer' in currentTask && (
                                            <div className="text-sm text-red-200/80 mt-1">
                                                Correct answer: <span className="font-bold text-white font-arabic">{currentTask.correctAnswer}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={nextTask}
                                    className={`w-full md:w-auto px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-lg
                                        ${isCorrect
                                            ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                                            : 'bg-neutral-100 text-neutral-900 hover:bg-white'}
                                    `}
                                >
                                    <span>CONTINUE</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
