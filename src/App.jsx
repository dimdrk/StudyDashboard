import { useEffect, useState } from 'react';
import { flashcardsData, studyData } from './data.js';

const allTopics = studyData.flatMap((domain) => domain.topics);
const totalTopics = allTopics.length;
const prefixes = Array.from({ length: 23 }, (_, index) => index + 8);

function Icon({ name, className = '' }) {
  return <i className={`fa-solid ${name} ${className}`} aria-hidden="true" />;
}

function Modal({ children, onClose, labelledBy, size = 'max-w-lg' }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`w-full ${size} space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800`}
      >
        {children}
      </section>
    </div>
  );
}

function calculateSubnet(ipAddress, prefix) {
  const octets = ipAddress.split('.');
  if (
    octets.length !== 4
    || octets.some((octet) => !/^\d{1,3}$/.test(octet) || Number(octet) > 255)
    || !Number.isInteger(prefix)
    || prefix < 8
    || prefix > 30
  ) {
    return null;
  }

  const mask = (0xffffffff << (32 - prefix)) >>> 0;
  const wildcard = (~mask) >>> 0;
  const ip = octets.reduce((value, octet) => ((value << 8) | Number(octet)) >>> 0, 0);
  const network = (ip & mask) >>> 0;
  const broadcast = (network | wildcard) >>> 0;
  const toIp = (value) => [24, 16, 8, 0].map((shift) => (value >>> shift) & 255).join('.');

  return {
    mask: toIp(mask),
    wildcard: toIp(wildcard),
    network: toIp(network),
    broadcast: toIp(broadcast),
    range: `${toIp((network + 1) >>> 0)} - ${toIp((broadcast - 1) >>> 0)}`,
    hosts: (2 ** (32 - prefix)) - 2,
  };
}

function CalculatorModal({ onClose }) {
  const [ipAddress, setIpAddress] = useState('192.168.10.45');
  const [prefix, setPrefix] = useState(24);
  const result = calculateSubnet(ipAddress.trim(), Number(prefix));

  const fields = [
    ['Subnet Mask', result?.mask ?? '—', 'text-cisco-blue'],
    ['Wildcard Mask', result?.wildcard ?? '—', 'text-amber-500'],
    ['Network Address', result?.network ?? '—', ''],
    ['Broadcast Address', result?.broadcast ?? '—', ''],
    ['Usable Host Range', result?.range ?? '—', 'text-emerald-500'],
    ['Total Usable Hosts', result?.hosts ?? '—', 'text-purple-500'],
  ];

  return (
    <Modal onClose={onClose} labelledBy="calculator-title">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-slate-700">
        <h2 id="calculator-title" className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
          <Icon name="fa-calculator" className="text-cisco-blue" />
          <span>CCNA Subnet &amp; Wildcard Calculator</span>
        </h2>
        <button type="button" onClick={onClose} aria-label="Close calculator" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <Icon name="fa-xmark" className="text-lg" />
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <label htmlFor="calc-ip" className="mb-1 block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
            IP Address &amp; Prefix
          </label>
          <div className="flex gap-2">
            <input
              id="calc-ip"
              value={ipAddress}
              onChange={(event) => setIpAddress(event.target.value)}
              placeholder="192.168.1.1"
              aria-invalid={!result}
              className="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2 font-mono text-sm dark:border-slate-700 dark:bg-slate-900"
            />
            <select
              aria-label="Network prefix"
              value={prefix}
              onChange={(event) => setPrefix(Number(event.target.value))}
              className="rounded-lg border border-gray-300 bg-gray-50 p-2 font-mono text-sm dark:border-slate-700 dark:bg-slate-900"
            >
              {prefixes.map((value) => <option key={value} value={value}>/{value}</option>)}
            </select>
          </div>
          {!result && <p role="alert" className="mt-1 text-xs text-red-500">Enter a valid IPv4 address.</p>}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {fields.map(([label, value, color]) => (
            <div key={label} className="rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-slate-700 dark:bg-slate-900">
              <span className="block text-xs text-gray-500 dark:text-gray-400">{label}</span>
              <span className={`font-mono ${label === 'Usable Host Range' ? 'text-xs' : 'text-sm'} font-bold ${color}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

function FlashcardsModal({ onClose }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = flashcardsData[cardIndex];
  const changeCard = (step) => {
    setCardIndex((current) => (current + step + flashcardsData.length) % flashcardsData.length);
    setFlipped(false);
  };

  return (
    <Modal onClose={onClose} labelledBy="flashcards-title" size="max-w-md">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-slate-700">
        <h2 id="flashcards-title" className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
          <Icon name="fa-brain" className="text-amber-500" />
          <span>CCNA Quick-Recall Flashcards</span>
        </h2>
        <button type="button" onClick={onClose} aria-label="Close flashcards" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <Icon name="fa-xmark" className="text-lg" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((value) => !value)}
        aria-label={flipped ? 'Show flashcard question' : 'Show flashcard answer'}
        className={`flashcard h-52 w-full cursor-pointer rounded-xl text-center ${flipped ? 'flipped' : ''}`}
      >
        <span className="flashcard-inner relative flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-cisco-blue/40 bg-gray-50 p-6 shadow-inner dark:bg-slate-900">
          <span className="flashcard-front absolute inset-0 flex flex-col items-center justify-between p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cisco-blue">Question (Click to flip)</span>
            <span className="text-base font-semibold text-gray-800 dark:text-gray-100">{card.q}</span>
            <span className="text-xs text-gray-400"><Icon name="fa-rotate" /> Flip for answer</span>
          </span>
          <span className="flashcard-back absolute inset-0 flex flex-col items-center justify-between rounded-xl bg-blue-50 p-6 dark:bg-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">Answer</span>
            <span className="font-mono text-sm text-gray-900 dark:text-white">{card.a}</span>
            <span className="text-xs text-gray-400">Click to flip back</span>
          </span>
        </span>
      </button>

      <div className="flex items-center justify-between pt-2">
        <button type="button" onClick={() => changeCard(-1)} className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600">
          <Icon name="fa-arrow-left" /> Prev
        </button>
        <span className="font-mono text-xs text-gray-500">{cardIndex + 1} / {flashcardsData.length}</span>
        <button type="button" onClick={() => changeCard(1)} className="rounded-lg bg-cisco-blue px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-500">
          Next <Icon name="fa-arrow-right" />
        </button>
      </div>
    </Modal>
  );
}

export default function App() {
  const [currentTopicId, setCurrentTopicId] = useState('1.1');
  const [masteredTopics, setMasteredTopics] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('ccna_mastered_topics') || '[]');
    return Array.isArray(saved) ? saved.filter((id) => allTopics.some((topic) => topic.id === id)) : [];
  });
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [flashcardsOpen, setFlashcardsOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');
  const [mobileSearch, setMobileSearch] = useState('');
  const currentDomain = studyData.find((domain) => domain.topics.some((topic) => topic.id === currentTopicId));
  const currentTopic = currentDomain?.topics.find((topic) => topic.id === currentTopicId);
  const masteryPercent = Math.round((masteredTopics.length / totalTopics) * 100);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('ccna_mastered_topics', JSON.stringify(masteredTopics));
  }, [masteredTopics]);

  function searchTopics(query) {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return;
    const match = allTopics.find((topic) => (
      topic.title.toLowerCase().includes(normalizedQuery)
      || topic.summary.toLowerCase().includes(normalizedQuery)
      || topic.content.toLowerCase().includes(normalizedQuery)
    ));
    if (match) setCurrentTopicId(match.id);
  }

  function toggleMastered() {
    setMasteredTopics((current) => (
      current.includes(currentTopicId)
        ? current.filter((id) => id !== currentTopicId)
        : [...current, currentTopicId]
    ));
  }

  const isMastered = masteredTopics.includes(currentTopicId);

  return (
    <div className="flex h-full flex-col bg-gray-50 font-sans text-gray-800 transition-colors duration-200 dark:bg-slate-900 dark:text-gray-100">
      <header className="sticky top-0 z-40 bg-cisco-navy text-white shadow-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Icon name="fa-network-wired" className="text-2xl text-cisco-blue" />
            <div>
              <h1 className="text-lg font-bold leading-none">CCNA 200-301 Hub</h1>
              <span className="font-mono text-xs text-blue-300">Interactive Exam Prep Guide</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative hidden w-64 md:block">
              <input
                type="search"
                value={globalSearch}
                onChange={(event) => {
                  setGlobalSearch(event.target.value);
                  searchTopics(event.target.value);
                }}
                placeholder="Search objectives, CLI..."
                aria-label="Search objectives and CLI notes"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 py-1.5 pl-9 pr-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cisco-blue"
              />
              <Icon name="fa-magnifying-glass" className="absolute left-3 top-2.5 text-xs text-gray-400" />
            </div>
            <button type="button" onClick={() => setCalculatorOpen(true)} className="flex items-center space-x-1 rounded-lg bg-cisco-blue px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-sky-500">
              <Icon name="fa-calculator" /><span className="hidden sm:inline">Subnet Calc</span>
            </button>
            <button type="button" onClick={() => setFlashcardsOpen(true)} className="flex items-center space-x-1 rounded-lg bg-slate-700 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-slate-600">
              <Icon name="fa-layer-group" /><span className="hidden sm:inline">Flashcards</span>
            </button>
            <button type="button" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'} className="rounded-lg p-2 text-gray-300 hover:bg-slate-800 hover:text-white">
              <Icon name="fa-moon" className={`text-lg ${darkMode ? 'hidden' : ''}`} />
              <Icon name="fa-sun" className={`text-lg text-yellow-400 ${darkMode ? '' : 'hidden'}`} />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 overflow-hidden px-2 py-6 sm:px-4 lg:px-8">
        <aside className="hidden w-72 shrink-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800 lg:flex">
          <div className="border-b border-gray-100 bg-gray-50/50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Overall Mastery</span>
              <span className="text-xs font-bold text-cisco-blue">{masteryPercent}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">
              <div className="h-full bg-cisco-blue transition-all duration-500" style={{ width: `${masteryPercent}%` }} />
            </div>
          </div>
          <nav aria-label="Study topics" className="flex-1 space-y-1 overflow-y-auto p-3">
            {studyData.map((domain) => (
              <div key={domain.id} className="mb-4">
                <h2 className="mb-1 px-2 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500">{domain.name}</h2>
                {domain.topics.map((topic) => {
                  const selected = topic.id === currentTopicId;
                  return (
                    <button
                      type="button"
                      key={topic.id}
                      aria-current={selected ? 'page' : undefined}
                      onClick={() => setCurrentTopicId(topic.id)}
                      className={`group flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors ${selected ? 'bg-cisco-blue text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700'}`}
                    >
                      <span className="truncate">{topic.title}</span>
                      {masteredTopics.includes(topic.id) && <Icon name="fa-circle-check" className="ml-1 text-xs text-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex flex-col gap-3 border-b border-gray-100 p-4 dark:border-slate-700 lg:hidden sm:flex-row">
            <select
              aria-label="Select study topic"
              value={currentTopicId}
              onChange={(event) => setCurrentTopicId(event.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm dark:border-slate-700 dark:bg-slate-900"
            >
              {studyData.map((domain) => (
                <optgroup key={domain.id} label={domain.name}>
                  {domain.topics.map((topic) => <option key={topic.id} value={topic.id}>{topic.id} - {topic.title}</option>)}
                </optgroup>
              ))}
            </select>
            <div className="relative w-full">
              <input
                type="search"
                value={mobileSearch}
                onChange={(event) => {
                  setMobileSearch(event.target.value);
                  searchTopics(event.target.value);
                }}
                placeholder="Search notes..."
                aria-label="Search notes"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-9 pr-3 text-sm placeholder-gray-400 dark:border-slate-700 dark:bg-slate-900"
              />
              <Icon name="fa-magnifying-glass" className="absolute left-3 top-3 text-xs text-gray-400" />
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/30 px-6 py-4 dark:border-slate-700 dark:bg-slate-800/30">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cisco-blue">{currentDomain?.name}</span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{currentTopic?.title}</h2>
              {currentTopic?.summary && (
                <p className="mt-1 max-w-3xl text-sm text-gray-600 dark:text-slate-300">{currentTopic.summary}</p>
              )}
            </div>
            <button
              type="button"
              onClick={toggleMastered}
              aria-pressed={isMastered}
              className={`flex items-center space-x-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${isMastered ? 'border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' : 'border-gray-300 text-gray-700 hover:border-emerald-500 hover:bg-emerald-50 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-emerald-950/30'}`}
            >
              <Icon name={isMastered ? 'fa-circle-check' : 'fa-circle-check'} className="text-sm text-emerald-500" />
              <span>{isMastered ? 'Learned' : 'Mark as Learned'}</span>
            </button>
          </div>

          <article
            className="prose max-w-none flex-1 space-y-6 overflow-y-auto p-6 dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: currentTopic?.content ?? '' }}
          />
        </main>
      </div>

      {calculatorOpen && <CalculatorModal onClose={() => setCalculatorOpen(false)} />}
      {flashcardsOpen && <FlashcardsModal onClose={() => setFlashcardsOpen(false)} />}
    </div>
  );
}
