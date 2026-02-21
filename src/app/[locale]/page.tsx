"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Flame,
    Heart,
    Trophy,
    BookOpen,
    ChevronRight,
    CheckCircle2,
    Sword,
    X,
    Zap,
    Users,
    ShieldCheck,
    Menu
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Quiz from "../components/Quiz";
import LessonView from "../components/LessonView";
import LearningPath from "../components/LearningPath";
import CelebrationOverlay from "../components/CelebrationOverlay";
import AuthModal from "../components/AuthModal";
import { useSoundEffects } from "../hooks/useSoundEffects";
import { useProgress } from "../hooks/useProgress";

const Nav = ({ streak, totalXp, userEmail, onSync, onViewChange, currentView, locale }: {
    streak: number,
    totalXp: number,
    userEmail: string | null,
    onSync: () => void,
    onViewChange: (view: 'home' | 'path') => void,
    currentView: 'home' | 'path',
    locale: string
}) => {
    const t = useTranslations('nav');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const handleViewChange = (view: 'home' | 'path') => {
        onViewChange(view);
        closeMenu();
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass px-4 md:px-6 py-4 flex justify-between items-center transition-all duration-500 border-b border-white/5 bg-black/50 backdrop-blur-xl">
                <div className="flex items-center space-x-2 cursor-pointer z-50 hover:scale-105 transition-transform" onClick={() => handleViewChange('home')}>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(5,150,105,0.4)]">
                        <span className="text-white font-bold text-lg md:text-xl font-outfit">M</span>
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight text-white">Madinah<span className="text-emerald-500">Quest</span></span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => onViewChange('path')} className={`font-medium text-sm uppercase tracking-widest hover:text-white transition-colors ${currentView === 'path' ? 'text-white' : 'text-neutral-400'}`}>
                        {t('path')}
                    </button>

                    <div className="flex items-center space-x-1.5 text-emerald-400 font-bold bg-emerald-900/20 px-4 py-1.5 rounded-full border border-emerald-500/20 shadow-inner">
                        <Zap size={16} fill="currentColor" />
                        <span className="text-sm">{totalXp} XP</span>
                    </div>

                    <div className="flex items-center space-x-1 bg-neutral-900 rounded-full p-1 border border-white/5">
                        {['ru', 'en', 'uz'].map((lang) => (
                            <Link
                                key={lang}
                                href={`/${lang}`}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${locale === lang ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-white'}`}
                            >
                                {lang.toUpperCase()}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={userEmail ? () => onViewChange('path') : onSync}
                        className={`${userEmail ? 'bg-neutral-800 text-neutral-400 hover:text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'} px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center space-x-2`}
                    >
                        {userEmail && <ShieldCheck size={16} />}
                        <span>{userEmail ? t('profile') : t('sync')}</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4 z-50">
                    <div className="flex items-center space-x-1 px-3 py-1.5 bg-emerald-900/30 rounded-lg border border-emerald-500/20 text-emerald-400 font-bold text-xs">
                        <Zap size={14} fill="currentColor" />
                        <span>{totalXp}</span>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-neutral-400 hover:text-white transition-colors bg-neutral-900 rounded-lg border border-white/5"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a] pt-28 px-6 flex flex-col md:hidden"
                    >
                        <div className="flex flex-col space-y-8">
                            <div className="space-y-4">
                                <button
                                    onClick={() => handleViewChange('home')}
                                    className={`w-full text-3xl font-black text-left py-4 border-b border-white/5 flex items-center justify-between ${currentView === 'home' ? 'text-white' : 'text-neutral-600'}`}
                                >
                                    <span>{t('home')}</span>
                                    {currentView === 'home' && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                                </button>
                                <button
                                    onClick={() => handleViewChange('path')}
                                    className={`w-full text-3xl font-black text-left py-4 border-b border-white/5 flex items-center justify-between ${currentView === 'path' ? 'text-white' : 'text-neutral-600'}`}
                                >
                                    <span>{t('path')}</span>
                                    {currentView === 'path' && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                                </button>
                            </div>

                            <div className="py-2">
                                <div className="text-xs font-mono text-neutral-500 uppercase mb-4 tracking-widest pl-1">Language</div>
                                <div className="flex space-x-3">
                                    {['ru', 'en', 'uz'].map((lang) => (
                                        <Link
                                            key={lang}
                                            href={`/${lang}`}
                                            className={`flex-1 py-4 rounded-2xl text-center font-bold text-lg border transition-all ${locale === lang ? 'bg-emerald-600 border-emerald-500 text-white shadow-emerald-900/20 shadow-lg' : 'bg-neutral-900 border-white/5 text-neutral-500'}`}
                                        >
                                            {lang.toUpperCase()}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pb-8">
                                <button
                                    onClick={() => {
                                        if (!userEmail) onSync();
                                        closeMenu();
                                    }}
                                    className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 shadow-xl ${userEmail ? 'bg-neutral-900 text-neutral-400 border border-white/10' : 'bg-emerald-600 text-white'}`}
                                >
                                    {userEmail ? <ShieldCheck size={24} /> : <Users size={24} />}
                                    <span>{userEmail ? userEmail : t('sync')}</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default function Home() {
    const t = useTranslations('home');
    const params = useParams();
    const locale = params.locale as string;
    const { totalXp, streak, completedLessons, userEmail, addXP, completeLesson, setSyncEmail, isLoaded } = useProgress();

    const [activeLesson, setActiveLesson] = useState<number | null>(null);
    const [phase, setPhase] = useState<'theory' | 'quiz'>('theory');
    const [view, setView] = useState<'home' | 'path'>('home');
    const [showCelebration, setShowCelebration] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [lastEarnedXp, setLastEarnedXp] = useState(0);

    const { playClick, playSuccess, playApplause } = useSoundEffects();

    const startLesson = (id: number) => {
        playClick();
        setActiveLesson(id);
        setPhase('theory');
    };

    const handleLessonComplete = (xpEarned: number) => {
        playApplause();
        setLastEarnedXp(xpEarned);
        // XP already added in handleProgressXP
        if (activeLesson) completeLesson(activeLesson);
        setShowCelebration(true);
        setActiveLesson(null);
    };

    const handleProgressXP = (xp: number) => {
        addXP(xp);
    };

    const closeCelebration = () => {
        setShowCelebration(false);
        setView('path');
    };

    const [curriculum, setCurriculum] = useState<any[]>([]);

    useEffect(() => {
        const loadLessons = async () => {
            const lessons = await import('../data/lessons').then(m => m.getCurriculum(locale));
            setCurriculum(lessons);
        };
        loadLessons();
    }, [locale]);

    const lessonData = activeLesson ? curriculum.find(l => l.id === activeLesson) : null;

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-foreground font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
            <Nav
                streak={streak}
                totalXp={totalXp}
                userEmail={userEmail}
                onSync={() => setShowAuthModal(true)}
                onViewChange={setView}
                currentView={view}
                locale={locale}
            />

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                onSync={setSyncEmail}
                currentEmail={userEmail}
            />

            <AnimatePresence mode="wait">
                {isLoaded && activeLesson && lessonData && (
                    <motion.div
                        key="lesson-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-[#0a0a0a] overflow-y-auto overflow-x-hidden"
                    >
                        <div className="min-h-full flex flex-col items-center justify-center">
                            <button
                                onClick={() => setActiveLesson(null)}
                                className="fixed top-4 right-4 md:top-8 md:right-8 z-[70] bg-black/50 backdrop-blur-md text-white/50 hover:text-white transition-all p-3 rounded-full border border-white/10 hover:border-emerald-500 hover:scale-110 shadow-2xl"
                            >
                                <X size={24} className="md:w-6 md:h-6" />
                            </button>
                            <div className="w-full max-w-4xl pt-16 md:pt-10 pb-10 relative px-4 md:px-0">
                                {phase === 'theory' ? (
                                    <LessonView
                                        lesson={lessonData}
                                        onStartQuiz={() => setPhase('quiz')}
                                    />
                                ) : (
                                    <Quiz
                                        lesson={lessonData}
                                        onComplete={handleLessonComplete}
                                        onProgressXP={handleProgressXP}
                                        onExit={() => setActiveLesson(null)}
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
                {showCelebration && (
                    <CelebrationOverlay
                        xp={lastEarnedXp}
                        lessonTitle={lessonData?.title || "Lesson"}
                        onContinue={closeCelebration}
                    />
                )}
            </AnimatePresence>

            <div className={activeLesson ? 'hidden' : 'block'}>
                {!isLoaded ? (
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-emerald-600/20 border-t-emerald-500 rounded-full animate-spin" />
                    </div>
                ) : (
                    <AnimatePresence mode="wait">
                        {view === 'path' ? (
                            <div className="pt-24 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
                                <div className="text-center mb-12 md:mb-16">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="inline-block"
                                    >
                                        <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{t('journey.title')}</h1>
                                        <p className="text-neutral-500 text-sm md:text-lg max-w-xl mx-auto">{t('journey.subtitle')}</p>
                                    </motion.div>
                                </div>
                                <LearningPath
                                    currentLessonId={Math.max(...completedLessons, 0) + 1}
                                    completedLessons={completedLessons}
                                    onSelectLesson={startLesson}
                                    curriculum={curriculum}
                                />
                            </div>
                        ) : (
                            <div className="pt-28 md:pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
                                {/* Hero Section */}
                                <section className="relative mb-24 md:mb-40">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 blur-[130px] rounded-full -z-10 mix-blend-screen" />
                                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 blur-[130px] rounded-full -z-10 mix-blend-screen" />

                                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        >
                                            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                                                <Trophy size={14} />
                                                <span>Madina Arabic Series</span>
                                            </div>
                                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tighter text-white">
                                                {t('hero.title')}<br />
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">{t('hero.subtitle')}.</span>
                                            </h1>
                                            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-lg leading-relaxed">
                                                {t('hero.description')}
                                            </p>
                                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                                <button
                                                    onClick={() => setView('path')}
                                                    className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] border border-emerald-400/20 group"
                                                >
                                                    <span>{t('hero.start')}</span>
                                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="relative cursor-pointer hidden md:block"
                                            onClick={() => setView('path')}
                                        >
                                            <div className="relative z-10 p-10 glass rounded-[2.5rem] animate-float border border-white/5 shadow-2xl bg-gradient-to-br from-neutral-900/80 to-black/80">
                                                <div className="flex justify-between items-center mb-8">
                                                    <div className="flex space-x-2">
                                                        {[1, 2, 3, 4, 5].map((i) => (
                                                            <Heart key={i} size={24} fill={i < 4 ? "#ef4444" : "rgba(255,255,255,0.05)"} color={i < 4 ? "#ef4444" : "#262626"} />
                                                        ))}
                                                    </div>
                                                    <div className="text-neutral-500 font-mono text-xs uppercase tracking-widest">{t('hero.mission_card.title')}</div>
                                                </div>

                                                <div className="bg-black/40 p-8 rounded-2xl mb-8 border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                                                    <div className="absolute top-0 right-0 p-4 opacity-50">
                                                        <BookOpen className="text-neutral-700" size={100} strokeWidth={1} />
                                                    </div>
                                                    <div className="text-xs text-neutral-500 mb-4 uppercase tracking-widest font-bold relative z-10">{t('hero.mission_card.construct')}</div>
                                                    <div className="text-5xl text-right font-arabic mb-8 relative z-10 leading-relaxed text-emerald-100" dir="rtl">هَذَا بَيْتٌ</div>
                                                    <div className="flex flex-wrap gap-3 justify-center relative z-10">
                                                        {["بَيْتٌ", "هَذَا"].map((word, idx) => (
                                                            <div key={idx} className={`px-6 py-3 rounded-xl border-2 font-bold text-lg transition-all pointer-events-none transform group-hover:scale-105 ${idx === 1 ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-900/50' : 'border-neutral-800 bg-neutral-900 text-neutral-400'}`}>
                                                                {word}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="text-center text-xs text-neutral-600 font-mono uppercase tracking-widest">{t('hero.mission_card.demo')}</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </section>

                                {/* Methodology Section */}
                                <section className="py-24 relative">
                                    <div className="absolute inset-0 bg-neutral-900/20 skew-y-3 -z-10 rounded-[3rem]" />
                                    <div className="text-center mb-20">
                                        <h2 className="text-3xl md:text-5xl font-black mb-6">{t('methodology.title')}</h2>
                                        <p className="text-neutral-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                                            {t('methodology.subtitle')}
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                                        {[
                                            {
                                                icon: <Sword className="text-emerald-500" size={32} />,
                                                title: t('methodology.features.theory.title'),
                                                desc: t('methodology.features.theory.desc'),
                                                color: "emerald"
                                            },
                                            {
                                                icon: <CheckCircle2 className="text-amber-500" size={32} />,
                                                title: t('methodology.features.interactive.title'),
                                                desc: t('methodology.features.interactive.desc'),
                                                color: "amber"
                                            },
                                            {
                                                icon: <Zap className="text-blue-500" size={32} />,
                                                title: t('methodology.features.smart.title'),
                                                desc: t('methodology.features.smart.desc'),
                                                color: "blue"
                                            },
                                        ].map((f, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ y: -10 }}
                                                className="p-8 md:p-10 rounded-[2rem] bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-all group"
                                            >
                                                <div className={`w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5`}>
                                                    {f.icon}
                                                </div>
                                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-neutral-200">{f.title}</h3>
                                                <p className="text-neutral-500 leading-relaxed text-base">{f.desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>

                                <footer className="py-12 mt-12 border-t border-white/5 text-center flex flex-col items-center">
                                    <p className="text-neutral-600 text-sm font-mono uppercase tracking-widest">{t('footer')}</p>
                                </footer>
                            </div>
                        )}
                    </AnimatePresence>
                )}
            </div>

            {/* Floating Feedback Button */}
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe8P30Sm0f8pjP-PglJqBS0PvLyuhaOaIVAY0j1UfXoI0GwMw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-5 py-3 rounded-2xl font-bold shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] border border-emerald-400/20 transition-all transform hover:-translate-y-1 active:scale-95"
            >
                <Heart size={18} className="text-emerald-100 hidden sm:block" />
                <span className="text-sm">{t('feedback')}</span>
            </a>
        </main>
    );
}
