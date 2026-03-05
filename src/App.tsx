import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Code2, 
  GraduationCap, 
  Layout, 
  Lightbulb, 
  Menu, 
  Play, 
  Trophy, 
  X,
  ArrowLeft,
  HelpCircle
} from 'lucide-react';
import Markdown from 'react-markdown';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { curriculum } from './data/curriculum';
import { Module, Lesson, MCQ, PracticeQuestion } from './types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const playTechSound = (isSuccess: boolean) => {
  try {
    const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (isSuccess) {
      // High-pitched technological "blip"
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.05);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else {
      // Low-pitched technological "error buzz"
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  } catch (e) {
    // Silent fail if audio context is blocked or unsupported
  }
};

export default function App() {
  const [activeModuleId, setActiveModuleId] = useState<string>(curriculum[0].id);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const activeModule = curriculum.find(m => m.id === activeModuleId) || curriculum[0];
  const activeLesson = activeModule.lessons.find(l => l.id === activeLessonId);

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    );
  };

  return (
    <div className="flex h-screen bg-dark-bg text-slate-300 overflow-hidden tech-grid">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="w-80 bg-dark-surface border-r border-dark-border flex flex-col z-30 shadow-2xl lg:shadow-none absolute lg:relative h-full"
          >
            <div className="p-6 border-b border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center glow-primary">
                  <Code2 className="text-white w-5 h-5" />
                </div>
                <h1 className="font-display font-bold text-xl tracking-tight text-white glow-text-primary">PyMaster</h1>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-6">
              {curriculum.map((module) => (
                <div key={module.id} className="space-y-2">
                  <button
                    onClick={() => {
                      setActiveModuleId(module.id);
                      setActiveLessonId(null);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-xl transition-all duration-200 group",
                      activeModuleId === module.id 
                        ? "bg-brand-primary/20 text-brand-primary" 
                        : "hover:bg-white/5 text-slate-400"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{module.title}</span>
                      <ChevronRight className={cn(
                        "w-4 h-4 transition-transform",
                        activeModuleId === module.id ? "rotate-90" : ""
                      )} />
                    </div>
                  </button>

                  {activeModuleId === module.id && (
                    <div className="ml-4 space-y-1 border-l-2 border-dark-border pl-4">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLessonId(lesson.id)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group",
                            activeLessonId === lesson.id
                              ? "bg-white/10 text-brand-primary ring-1 ring-white/10"
                              : "text-slate-500 hover:text-slate-300"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            {lesson.type === 'notes' && <BookOpen className="w-4 h-4" />}
                            {lesson.type === 'quiz' && <HelpCircle className="w-4 h-4" />}
                            {lesson.type === 'practice' && <Play className="w-4 h-4" />}
                            <span className="truncate max-w-[160px]">{lesson.title}</span>
                          </div>
                          {completedLessons.includes(lesson.id) && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-6 border-t border-dark-border bg-black/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">System Progress</p>
                  <p className="text-sm font-semibold text-slate-300">
                    {completedLessons.length} / {curriculum.reduce((acc, m) => acc + m.lessons.length, 0)} Nodes
                  </p>
                </div>
              </div>
              <div className="h-2 w-full bg-dark-border rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedLessons.length / curriculum.reduce((acc, m) => acc + m.lessons.length, 0)) * 100}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="h-full bg-brand-primary glow-primary shadow-[0_0_10px_rgba(75,139,190,0.5)]"
                />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Header */}
        <header className="h-16 bg-dark-surface/80 backdrop-blur-md border-b border-dark-border flex items-center px-6 justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5 text-slate-400" />
              </button>
            )}
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">{activeModule.title}</span>
              {activeLesson && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white font-medium glow-text-primary">{activeLesson.title}</span>
                </>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-xl text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-lg glow-primary">
              <GraduationCap className="w-4 h-4" />
              <span>Certification Portal</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {!activeLesson ? (
              <motion.div
                key="module-overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto p-8 lg:p-12"
              >
                <div className="mb-12">
                  <h2 className="font-display text-4xl font-bold text-white mb-4 glow-text-primary">{activeModule.title}</h2>
                  <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">{activeModule.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeModule.lessons.map((lesson, idx) => (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLessonId(lesson.id)}
                      className="group relative p-6 bg-dark-surface border border-dark-border rounded-2xl text-left hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(75,139,190,0.1)] transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                          lesson.type === 'notes' ? "bg-blue-500/10 text-blue-400" :
                          lesson.type === 'quiz' ? "bg-purple-500/10 text-purple-400" :
                          "bg-emerald-500/10 text-emerald-400"
                        )}>
                          {lesson.type === 'notes' && <BookOpen className="w-6 h-6" />}
                          {lesson.type === 'quiz' && <HelpCircle className="w-6 h-6" />}
                          {lesson.type === 'practice' && <Play className="w-6 h-6" />}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {completedLessons.includes(lesson.id) && (
                            <div className="bg-emerald-500/20 text-emerald-400 p-1 rounded-full">
                              <CheckCircle2 className="w-5 h-5" />
                            </div>
                          )}
                          {lesson.type === 'practice' && lesson.practice?.difficulty && (
                            <span className={cn(
                              "text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded-md border",
                              lesson.practice.difficulty === 'easy' ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" :
                              lesson.practice.difficulty === 'medium' ? "text-amber-400 border-amber-500/20 bg-amber-500/5" :
                              "text-rose-400 border-rose-500/20 bg-rose-500/5"
                            )}>
                              {lesson.practice.difficulty}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Node {idx + 1}</p>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{lesson.title}</h3>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeLesson.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto p-8 lg:p-12"
              >
                <button 
                  onClick={() => setActiveLessonId(null)}
                  className="flex items-center gap-2 text-slate-500 hover:text-slate-300 mb-8 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-semibold">Return to Module Map</span>
                </button>

                {activeLesson.type === 'notes' && (
                  <div className="markdown-body">
                    <Markdown>{activeLesson.content}</Markdown>
                    <div className="mt-12 pt-8 border-t border-dark-border flex justify-between items-center">
                      <p className="text-slate-500 text-sm italic">Transmission complete? Sync your progress.</p>
                      <button
                        onClick={() => toggleLessonCompletion(activeLesson.id)}
                        className={cn(
                          "px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2",
                          completedLessons.includes(activeLesson.id)
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-brand-primary text-white hover:bg-brand-primary/90 glow-primary"
                        )}
                      >
                        {completedLessons.includes(activeLesson.id) ? (
                          <>
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Synchronized</span>
                          </>
                        ) : (
                          <span>Mark as Complete</span>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {activeLesson.type === 'quiz' && (
                  <QuizView 
                    quiz={activeLesson.quiz!} 
                    onComplete={() => toggleLessonCompletion(activeLesson.id)}
                    isCompleted={completedLessons.includes(activeLesson.id)}
                  />
                )}

                {activeLesson.type === 'practice' && (
                  <PracticeView 
                    practice={activeLesson.practice!}
                    onComplete={() => toggleLessonCompletion(activeLesson.id)}
                    isCompleted={completedLessons.includes(activeLesson.id)}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function QuizView({ quiz, onComplete, isCompleted }: { quiz: MCQ[], onComplete: () => void, isCompleted: boolean }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz[currentQuestionIdx];

  const handleAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      playTechSound(true);
    } else {
      playTechSound(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < quiz.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      if (score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0) >= quiz.length * 0.7) {
        onComplete();
      }
    }
  };

  if (showResults) {
    return (
      <div className="bg-dark-surface p-8 rounded-3xl border border-dark-border shadow-2xl text-center">
        <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
          <Trophy className="w-10 h-10 text-brand-primary" />
        </div>
        <h3 className="font-display text-3xl font-bold text-white mb-2">Assessment Complete</h3>
        <p className="text-slate-400 mb-8">Accuracy Rating: <span className="text-brand-primary font-mono">{Math.round((score / quiz.length) * 100)}%</span></p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              setCurrentQuestionIdx(0);
              setSelectedOption(null);
              setIsAnswered(false);
              setScore(0);
              setShowResults(false);
            }}
            className="px-8 py-3 bg-white/5 text-slate-300 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10"
          >
            Re-Initialize
          </button>
          <button 
            onClick={() => window.location.reload()} 
            className="px-8 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg glow-primary"
          >
            Advance to Next Node
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold text-white">Neural Assessment</h3>
        <span className="text-sm font-mono text-slate-500">Query {currentQuestionIdx + 1} / {quiz.length}</span>
      </div>

      <div className="bg-dark-surface p-8 rounded-3xl border border-dark-border shadow-xl">
        <p className="text-xl font-medium text-slate-200 mb-8 leading-relaxed">{currentQuestion.question}</p>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => setSelectedOption(idx)}
              className={cn(
                "w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between group",
                selectedOption === idx 
                  ? "border-brand-primary bg-brand-primary/10" 
                  : "border-dark-border hover:border-slate-700 hover:bg-white/5",
                isAnswered && idx === currentQuestion.correctAnswer && "border-emerald-500/50 bg-emerald-500/10",
                isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && "border-rose-500/50 bg-rose-500/10"
              )}
            >
              <span className={cn(
                "font-medium",
                isAnswered && idx === currentQuestion.correctAnswer ? "text-emerald-400" :
                isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer ? "text-rose-400" :
                selectedOption === idx ? "text-brand-primary" : "text-slate-400"
              )}>
                {option}
              </span>
              {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
              {isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && <X className="w-5 h-5 text-rose-400" />}
            </button>
          ))}
        </div>

        {isAnswered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-black/30 rounded-2xl border border-dark-border"
          >
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-brand-secondary mt-1 shrink-0" />
              <div>
                <p className="font-bold text-white mb-1">System Insight</p>
                <p className="text-slate-400 text-sm leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-8 flex justify-end">
          {!isAnswered ? (
            <button
              disabled={selectedOption === null}
              onClick={handleAnswer}
              className="px-8 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify Logic
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="px-8 py-3 bg-white text-dark-bg rounded-xl font-bold hover:bg-slate-200 transition-all shadow-lg flex items-center gap-2"
            >
              <span>{currentQuestionIdx === quiz.length - 1 ? 'Finalize' : 'Next Query'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function PracticeView({ practice, onComplete, isCompleted }: { practice: PracticeQuestion, onComplete: () => void, isCompleted: boolean }) {
  const [code, setCode] = useState(practice.initialCode);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleExecute = () => {
    // Simple normalization for basic validation
    const normalize = (s: string) => s.replace(/\s+/g, '').replace(/#.*$/gm, '').trim();
    const isCorrect = normalize(code).includes(normalize(practice.solution)) || normalize(code) === normalize(practice.solution);
    
    if (isCorrect) {
      setStatus('success');
      playTechSound(true);
      onComplete();
    } else {
      setStatus('error');
      playTechSound(false);
    }
    
    // Reset status after a delay
    setTimeout(() => setStatus('idle'), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-display text-2xl font-bold text-white tracking-tight">{practice.title}</h3>
          {practice.difficulty && (
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border",
              practice.difficulty === 'easy' ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" :
              practice.difficulty === 'medium' ? "text-amber-400 border-amber-500/20 bg-amber-500/5" :
              "text-rose-400 border-rose-500/20 bg-rose-500/5"
            )}>
              {practice.difficulty}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {status === 'success' && (
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs font-bold text-emerald-400 uppercase tracking-widest"
            >
              Logic Validated
            </motion.span>
          )}
          {status === 'error' && (
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs font-bold text-rose-400 uppercase tracking-widest"
            >
              Syntax Error Detected
            </motion.span>
          )}
          {isCompleted && (
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Validated</span>
            </div>
          )}
        </div>
      </div>

      <div className={cn(
        "bg-dark-surface p-8 rounded-3xl border transition-all duration-500 shadow-2xl",
        status === 'success' ? "border-emerald-500/50 shadow-emerald-500/10" :
        status === 'error' ? "border-rose-500/50 shadow-rose-500/10" :
        "border-dark-border"
      )}>
        <div className="mb-8">
          <p className="text-slate-400 leading-relaxed text-lg">{practice.description}</p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between px-4 py-2 bg-black/40 rounded-t-xl border border-dark-border border-b-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              <span className="text-xs font-mono text-slate-500 ml-2">compiler_v1.py</span>
            </div>
          </div>
          <div className="relative min-h-[16rem] bg-black/40 rounded-b-xl border border-dark-border border-t-0 overflow-hidden">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => highlight(code, languages.python, 'python')}
              padding={24}
              className="font-mono text-sm min-h-[16rem] focus:outline-none selection:bg-brand-primary/30"
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
                fontSize: 14,
                color: '#FFE873', // brand-secondary
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            {practice.hints.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setShowHint(idx === showHint ? null : idx)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 border",
                  showHint === idx 
                    ? "bg-brand-secondary text-dark-bg border-brand-secondary" 
                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"
                )}
              >
                <Lightbulb className="w-3 h-3" />
                <span>Hint {idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="px-6 py-2 text-slate-500 text-sm font-bold hover:text-slate-300 transition-colors"
            >
              {showSolution ? 'Hide Solution' : 'Reveal Solution'}
            </button>
            <button
              onClick={handleExecute}
              className={cn(
                "px-8 py-2 rounded-xl font-bold transition-all shadow-lg",
                status === 'success' ? "bg-emerald-500 text-white glow-emerald" :
                status === 'error' ? "bg-rose-500 text-white glow-rose" :
                "bg-brand-primary text-white hover:bg-brand-primary/90 glow-primary"
              )}
            >
              {status === 'idle' ? 'Execute Code' : status === 'success' ? 'Success' : 'Retry'}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showHint !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div className="p-4 bg-brand-secondary/5 border border-brand-secondary/20 rounded-xl flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-brand-secondary mt-0.5" />
                <p className="text-sm text-brand-secondary/80">{practice.hints[showHint]}</p>
              </div>
            </motion.div>
          )}

          {showSolution && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                <p className="text-sm font-bold text-emerald-400 mb-3">Reference Implementation:</p>
                <pre className="font-mono text-xs bg-black/30 p-4 rounded-lg border border-emerald-500/10 overflow-x-auto">
                  <code 
                    dangerouslySetInnerHTML={{ 
                      __html: highlight(practice.solution, languages.python, 'python') 
                    }} 
                  />
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
