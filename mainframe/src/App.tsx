import { useState } from 'react';
import { ActionSheet } from './components/ActionSheet';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ScrubVideo } from './components/ScrubVideo';
import type { SheetTopic } from './types/navigation';

export default function App() {
  const [activeTopic, setActiveTopic] = useState<SheetTopic | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ScrubVideo />
      <Navbar onSelectTopic={setActiveTopic} />
      <Hero onSelectTopic={setActiveTopic} />
      <ActionSheet
        topic={activeTopic}
        onClose={() => setActiveTopic(null)}
      />
    </div>
  );
}
