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
            <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center transition-all duration-500">
                <div className="flex items-center space-x-2 cursor-pointer z-50" onClick={() => handleViewChange('home')}>
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center glow">
                        <span className="text-white font-bold text-xl font-outfit">M</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:inline">Madinah<span className="text-emerald-500">Quest</span></span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => onViewChange('path')} className={`font-medium text-sm uppercase tracking-widest hover:text-white transition-colors ${currentView === 'path' ? 'text-white' : 'text-neutral-400'}`}>
                        {t('path')}
                    </button>

                    <div className="flex items-center space-x-1.5 text-emerald-500 font-bold bg-neutral-900/50 px-3 py-1.5 rounded-full border border-emerald-500/20">
                        <Zap size={16} fill="currentColor" />
                        <span className="text-sm">{totalXp}</span>
                    </div>

                    <div className="flex items-center space-x-2 bg-neutral-800 rounded-full p-1">
                        {['ru', 'en', 'uz'].map((lang) => (
                            <Link
                                key={lang}
                                href={`/${lang}`}
                                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${locale === lang ? 'bg-emerald-600 text-white' : 'text-neutral-400 hover:text-white'}`}
                            >
                                {lang.toUpperCase()}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={userEmail ? () => onViewChange('path') : onSync}
                        className={`${userEmail ? 'bg-neutral-800 text-neutral-400 hover:text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'} px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center space-x-2`}
                    >
                        {userEmail && <ShieldCheck size={14} />}
                        <span>{userEmail ? t('profile') : t('sync')}</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4 z-50">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-emerald-900/40 rounded-lg border border-emerald-500/30 text-emerald-400 font-bold text-sm">
                        <Zap size={14} fill="currentColor" />
                        <span>{totalXp}</span>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-neutral-400 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                        className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl pt-24 px-6 flex flex-col md:hidden"
                    >
                        <div className="flex flex-col space-y-6">
                            <button
                                onClick={() => handleViewChange('home')}
                                className={`text-2xl font-bold text-left py-2 border-b border-white/5 ${currentView === 'home' ? 'text-white' : 'text-neutral-500'}`}
                            >
                                {t('home')}
                            </button>
                            <button
                                onClick={() => handleViewChange('path')}
                                className={`text-2xl font-bold text-left py-2 border-b border-white/5 ${currentView === 'path' ? 'text-white' : 'text-neutral-500'}`}
                            >
                                {t('path')}
                            </button>

                            <div className="py-4">
                                <div className="text-sm font-mono text-neutral-500 uppercase mb-4 tracking-widest">Language</div>
                                <div className="flex space-x-3">
                                    {['ru', 'en', 'uz'].map((lang) => (
                                        <Link
                                            key={lang}
                                            href={`/${lang}`}
                                            className={`flex-1 py-3 rounded-xl text-center font-bold text-lg border transition-all ${locale === lang ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-neutral-900 border-white/10 text-neutral-400'}`}
                                        >
                                            {lang.toUpperCase()}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    if (!userEmail) onSync();
                                    closeMenu();
                                }}
                                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 ${userEmail ? 'bg-neutral-800 text-neutral-300' : 'bg-emerald-600 text-white'}`}
                            >
                                {userEmail ? <ShieldCheck size={20} /> : <Users size={20} />}
                                <span>{userEmail ? userEmail : t('sync')}</span>
                            </button>
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
        <main className="min-h-screen bg-[#0a0a0a] text-foreground font-sans">
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
                        <div className="min-h-full flex flex-col items-center justify-center p-4 md:p-6">
                            <button
                                onClick={() => setActiveLesson(null)}
                                className="fixed top-4 right-4 md:top-8 md:right-8 z-[70] bg-neutral-900/80 backdrop-blur-md text-neutral-400 hover:text-white transition-all p-3 rounded-full border border-white/10 hover:border-emerald-500 hover:glow shadow-2xl"
                            >
                                <X size={24} className="md:w-8 md:h-8" />
                            </button>
                            <div className="w-full max-w-4xl pt-16 md:pt-10 pb-10 relative">
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
                        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
                    </div>
                ) : (
                    <AnimatePresence mode="wait">
                        {view === 'path' ? (
                            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
                                <div className="text-center mb-12">
                                    <h1 className="text-4xl font-black mb-4">{t('journey.title')}</h1>
                                    <p className="text-neutral-500 max-w-xl mx-auto">{t('journey.subtitle')}</p>
                                </div>
                                <LearningPath
                                    currentLessonId={Math.max(...completedLessons, 0) + 1}
                                    completedLessons={completedLessons}
                                    onSelectLesson={startLesson}
                                    curriculum={curriculum}
                                />
                            </div>
                        ) : (
                            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                                {/* Hero Section */}
                                <section className="relative mb-32 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 blur-[120px] rounded-full -z-10" />
                                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/10 blur-[120px] rounded-full -z-10" />

                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-tighter mb-6">
                                                <Trophy size={14} />
                                                <span>Madina Arabic Series: 88 Lessons</span>
                                            </div>
                                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-4 md:mb-6">
                                                {t('hero.title')} <br />
                                                <span className="gradient-text tracking-tighter">{t('hero.subtitle')}.</span>
                                            </h1>
                                            <p className="text-lg md:text-xl text-neutral-400 mb-8 md:mb-10 max-w-xl leading-relaxed">
                                                {t('hero.description')}
                                            </p>
                                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                                <button
                                                    onClick={() => setView('path')}
                                                    className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-2 transition-all hover:glow group"
                                                >
                                                    <span>{t('hero.start')}</span>
                                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 1 }}
                                            className="relative cursor-pointer"
                                            onClick={() => setView('path')}
                                        >
                                            <div className="relative z-10 p-8 glass rounded-3xl animate-float">
                                                <div className="flex justify-between items-center mb-8">
                                                    <div className="flex space-x-2">
                                                        {[1, 2, 3, 4, 5].map((i) => (
                                                            <Heart key={i} size={24} fill={i < 4 ? "#ef4444" : "rgba(255,255,255,0.1)"} color={i < 4 ? "#ef4444" : "#404040"} />
                                                        ))}
                                                    </div>
                                                    <div className="text-neutral-500 font-mono">{t('hero.mission_card.title')}</div>
                                                </div>

                                                <div className="bg-neutral-900/50 p-6 rounded-2xl mb-6 border border-white/5">
                                                    <div className="text-sm text-neutral-500 mb-2 uppercase tracking-widest font-bold">{t('hero.mission_card.construct')}</div>
                                                    <div className="text-3xl text-right font-arabic mb-6" dir="rtl">هَذَا بَيْتٌ</div>
                                                    <div className="flex flex-wrap gap-2 justify-center">
                                                        {["بَيْتٌ", "هَذَا"].map((word, idx) => (
                                                            <div key={idx} className={`px-4 py-2 rounded-lg border transition-all pointer-events-none ${idx === 1 ? 'bg-emerald-600 border-emerald-400' : 'border-neutral-700 bg-neutral-800'}`}>
                                                                {word}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="text-center text-xs text-neutral-500 italic">{t('hero.mission_card.demo')}</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </section>

                                {/* Why section */}
                                <section className="py-20">
                                    <div className="text-center mb-16">
                                        <h2 className="text-4xl font-bold mb-4">{t('methodology.title')}</h2>
                                        <p className="text-neutral-500 max-w-2xl mx-auto text-lg leading-relaxed">
                                            {t('methodology.subtitle')}
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {[
                                            {
                                                icon: <Sword className="text-emerald-500" />,
                                                title: t('methodology.features.theory.title'),
                                                desc: t('methodology.features.theory.desc')
                                            },
                                            {
                                                icon: <CheckCircle2 className="text-amber-500" />,
                                                title: t('methodology.features.interactive.title'),
                                                desc: t('methodology.features.interactive.desc')
                                            },
                                            {
                                                icon: <BookOpen className="text-blue-500" />,
                                                title: t('methodology.features.smart.title'),
                                                desc: t('methodology.features.smart.desc')
                                            },
                                        ].map((f, i) => (
                                            <div key={i} className="p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
                                                <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                    {f.icon}
                                                </div>
                                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{f.title}</h3>
                                                <p className="text-neutral-500 leading-relaxed">{f.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <footer className="py-10 border-t border-white/5 text-center text-neutral-600 text-sm">
                                    <p>{t('footer')}</p>
                                </footer>
                            </div>
                        )}
                    </AnimatePresence>
                )}
            </div>
        </main>
    );
}
