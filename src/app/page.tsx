"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Heart,
  Trophy,
  Users,
  BookOpen,
  ChevronRight,
  Play,
  CheckCircle2,
  Sword,
  X
} from "lucide-react";
import Link from "next/link";
import Quiz from "./components/Quiz";
import LessonView from "./components/LessonView";
import LearningPath from "./components/LearningPath";
import MindMap from "./components/MindMap";
import { madinaCurriculum } from "./data/curriculum";
import { useSoundEffects } from "./hooks/useSoundEffects";

const Nav = ({ streak, onViewChange, currentView }: { streak: number, onViewChange: (view: 'home' | 'path' | 'mindmap') => void, currentView: 'home' | 'path' | 'mindmap' }) => (
  <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center transition-all duration-500">
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onViewChange('home')}>
      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center glow">
        <span className="text-white font-bold text-xl font-outfit">L</span>
      </div>
      <span className="font-bold text-xl tracking-tight">Linga<span className="text-emerald-500">Quest</span></span>
    </div>
    <div className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-widest text-neutral-400">
      <button onClick={() => onViewChange('path')} className={`hover:text-white transition-colors ${currentView === 'path' ? 'text-white' : ''}`}>Path</button>
      <button onClick={() => onViewChange('mindmap')} className={`hover:text-white transition-colors ${currentView === 'mindmap' ? 'text-white' : ''}`}>Mind Map</button>
      <button className="hover:text-white transition-colors">Guilds</button>
      <button className="hover:text-white transition-colors">Library</button>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1 text-orange-500 font-bold">
        <Flame size={20} fill="currentColor" />
        <span>{streak}</span>
      </div>
      <button onClick={() => onViewChange('path')} className="bg-emerald-600 hover:bg-emerald-500 px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/20">
        Start Journey
      </button>
    </div>
  </nav>
);

export default function Home() {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [phase, setPhase] = useState<'theory' | 'quiz'>('theory');
  const [view, setView] = useState<'home' | 'path' | 'mindmap'>('home');
  const [streak, setStreak] = useState(14);
  const [totalXp, setTotalXp] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const { playClick, playSuccess } = useSoundEffects();

  const startLesson = (id: number) => {
    playClick();
    setActiveLesson(id);
    setPhase('theory');
  };

  const handleLessonComplete = (xpEarned: number) => {
    playSuccess();
    setTotalXp(prev => prev + xpEarned);
    if (activeLesson) setCompletedLessons(prev => [...prev, activeLesson]);
    setActiveLesson(null);
  };

  const lessonData = activeLesson ? madinaCurriculum.find(l => l.id === activeLesson) : null;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-foreground font-sans">
      <Nav streak={streak} onViewChange={setView} currentView={view} />

      <AnimatePresence mode="wait">
        {activeLesson && lessonData && (
          <motion.div
            key="lesson-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex items-center justify-center p-6 overflow-y-auto"
          >
            <button
              onClick={() => setActiveLesson(null)}
              className="absolute top-8 right-8 z-[70] text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-full"
            >
              <X size={32} />
            </button>
            <div className="w-full max-w-4xl pt-20 pb-10">
              {phase === 'theory' ? (
                <LessonView
                  lesson={lessonData}
                  onStartQuiz={() => setPhase('quiz')}
                />
              ) : (
                <Quiz
                  lesson={lessonData}
                  onComplete={handleLessonComplete}
                  onExit={() => setActiveLesson(null)}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={activeLesson ? 'hidden' : 'block'}>
        {view === 'path' ? (
          <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-black mb-4">Your Journey</h1>
              <p className="text-neutral-500 max-w-xl mx-auto">Master all 88 lessons to unlock the secrets of the Arabic language.</p>
            </div>
            <LearningPath
              currentLessonId={Math.max(...completedLessons, 0) + 1}
              completedLessons={completedLessons}
              onSelectLesson={startLesson}
            />
          </div>
        ) : view === 'mindmap' ? (
          <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <MindMap
              completedLessons={completedLessons}
              onSelectLesson={startLesson}
              onBack={() => setView('path')}
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
                  <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
                    Master Arabic <br />
                    <span className="gradient-text tracking-tighter">Through Quest.</span>
                  </h1>
                  <p className="text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed">
                    A digitized and gamified experience of the famous Madina Arabic curriculum.
                    From zero to fluency through interactive missions.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => startLesson(1)}
                      className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-2 transition-all hover:glow group"
                    >
                      <span>Begin Lesson 1</span>
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border border-neutral-800 hover:bg-neutral-900 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-2 transition-all">
                      <Play size={20} fill="currentColor" />
                      <span>Watch Trailer</span>
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative cursor-pointer"
                  onClick={() => startLesson(1)}
                >
                  <div className="relative z-10 p-8 glass rounded-3xl animate-float">
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Heart key={i} size={24} fill={i < 4 ? "#ef4444" : "rgba(255,255,255,0.1)"} color={i < 4 ? "#ef4444" : "#404040"} />
                        ))}
                      </div>
                      <div className="text-neutral-500 font-mono">Mission: Lesson 1</div>
                    </div>

                    <div className="bg-neutral-900/50 p-6 rounded-2xl mb-6 border border-white/5">
                      <div className="text-sm text-neutral-500 mb-2 uppercase tracking-widest font-bold">Construct: 'This is a house'</div>
                      <div className="text-3xl text-right font-arabic mb-6" dir="rtl">هَذَا بَيْتٌ</div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {["بَيْتٌ", "هَذَا"].map((word, idx) => (
                          <div key={idx} className={`px-4 py-2 rounded-lg border transition-all pointer-events-none ${idx === 1 ? 'bg-emerald-600 border-emerald-400' : 'border-neutral-700 bg-neutral-800'}`}>
                            {word}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center text-xs text-neutral-500 italic">Click to try interactive demo</div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Why section */}
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">The Methodology</h2>
                <p className="text-neutral-500 max-w-2xl mx-auto text-lg leading-relaxed">
                  We've broken down the 88 lessons of the Madina University curriculum into interactive, manageable sprints.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Sword className="text-emerald-500" />,
                    title: "Theory & Practice",
                    desc: "Learn the rules first with clear explanations, then master them through high-stakes tests."
                  },
                  {
                    icon: <Users className="text-amber-500" />,
                    title: "Community Guilds",
                    desc: "Join groups to conquer weekly goals and study the 88 lessons together with fellow students."
                  },
                  {
                    icon: <BookOpen className="text-blue-500" />,
                    title: "Smart Path",
                    desc: "Individual tracking for all 88 lessons. Review your mistakes automatically with the Smart Review tool."
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
              <p>© 2026 LingaQuest. Master the 88 Lessons of Madina Arabic.</p>
            </footer>
          </div>
        )}
      </div>
    </main>
  );
}
