"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CheckCircle2, XCircle, Trophy, ArrowRight, RefreshCw, Zap } from "lucide-react";
import { Task, Lesson } from "../data/types";
import { useSoundEffects } from "../hooks/useSoundEffects";

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
    const { playSuccess, playError, playClick } = useSoundEffects();

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
        <div className="w-full max-w-2xl mx-auto glass p-8 rounded-3xl relative">
            <AnimatePresence>
                {floatingXp.map(xpItem => (
                    <motion.div
                        key={xpItem.id}
                        initial={{ opacity: 0, scale: 0.5, y: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: -50
                        }}
                        exit={{ opacity: 0 }}
                        className="absolute left-1/2 -top-[10px] -translate-x-1/2 pointer-events-none z-[1000] flex items-center space-x-2 text-emerald-400 font-black text-4xl italic drop-shadow-[0_0_20px_rgba(52,211,153,0.5)] whitespace-nowrap"
                        style={{
                            marginLeft: xpItem.x
                        }}
                    >
                        <Zap fill="currentColor" size={36} />
                        <span>+10 XP</span>
                    </motion.div>
                ))}
            </AnimatePresence>

            <div className="flex justify-between items-center mb-12">
                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Heart
                            key={i}
                            size={24}
                            fill={i <= hearts ? "#ef4444" : "rgba(255,255,255,0.1)"}
                            color={i <= hearts ? "#ef4444" : "#404040"}
                            className="transition-all duration-300"
                        />
                    ))}
                </div>
                <div className="bg-neutral-800 h-2 w-32 rounded-full overflow-hidden">
                    <motion.div
                        className="bg-emerald-500 h-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentTaskIndex + 1) / lesson.tasks.length) * 100}%` }}
                    />
                </div>
                <div className="text-sm font-mono text-neutral-500">
                    TASK {currentTaskIndex + 1}/{lesson.tasks.length}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentTask.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="mb-12"
                >
                    <h3 className="text-neutral-400 text-sm uppercase tracking-widest font-bold mb-4">{currentTask.question}</h3>
                    {currentTask.arabic && (
                        <div className="text-5xl text-right font-arabic mb-12 leading-relaxed" dir="rtl">
                            {currentTask.arabic}
                        </div>
                    )}

                    {currentTask.type === 'multiple-choice' && (
                        <div className="grid gap-3">
                            {currentTask.options?.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleOptionSelect(option)}
                                    className={`p-4 rounded-xl border text-left transition-all ${selectedOption === option
                                        ? 'bg-emerald-900/40 border-emerald-500 ring-2 ring-emerald-500/20'
                                        : 'bg-neutral-800 border-neutral-700 hover:border-neutral-500'
                                        } ${isAnswered && option === currentTask.correctAnswer ? 'bg-emerald-900/60 border-emerald-400' : ''}`}
                                    disabled={isAnswered}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}

                    {currentTask.type === 'word-scramble' && (
                        <div className="space-y-8">
                            <div className="min-h-[60px] p-4 flex flex-wrap gap-2 justify-center border-b border-neutral-800">
                                {scrambledOrder.map((word, i) => (
                                    <motion.div
                                        layoutId={`word-${word}`}
                                        key={i}
                                        className="px-6 py-2 bg-emerald-600 rounded-lg font-bold border border-emerald-400 cursor-pointer"
                                        onClick={() => toggleScrambleWord(word)}
                                    >
                                        {word}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {currentTask.scrambledWords?.filter(w => !scrambledOrder.includes(w)).map((word) => (
                                    <motion.div
                                        layoutId={`word-${word}`}
                                        key={word}
                                        className="px-6 py-2 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-neutral-500 cursor-pointer transition-all"
                                        onClick={() => toggleScrambleWord(word)}
                                    >
                                        {word}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            <div className="mt-8">
                {!isAnswered ? (
                    <button
                        onClick={checkAnswer}
                        disabled={(!selectedOption && currentTask.type === 'multiple-choice') || (currentTask.type === 'word-scramble' && scrambledOrder.length === 0)}
                        className="w-full bg-emerald-600 disabled:bg-neutral-800 disabled:text-neutral-500 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all"
                    >
                        <span>CHECK ANSWER</span>
                    </button>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between ${isCorrect ? 'bg-emerald-900/40 border border-emerald-500/30' : 'bg-red-900/20 border border-red-500/30'}`}
                    >
                        <div className="flex items-center space-x-3 mb-4 sm:mb-0 text-lg font-bold">
                            {isCorrect ? (
                                <>
                                    <CheckCircle2 className="text-emerald-500" />
                                    <span className="text-emerald-400 font-arabic">أَحْسَنْتَ! (Correct!)</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="text-red-500" />
                                    <span className="text-red-400">Oops! Correct: <span className="font-arabic">{currentTask.correctAnswer}</span></span>
                                </>
                            )}
                        </div>
                        <button
                            onClick={nextTask}
                            className="bg-white text-black px-8 py-3 rounded-xl font-black flex items-center space-x-2 hover:bg-neutral-200 transition-all"
                        >
                            <span>{currentTaskIndex < lesson.tasks.length - 1 ? 'CONTINUE' : 'FINISH'}</span>
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
