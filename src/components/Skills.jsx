import React from 'react';
import { Code, Brain, Atom } from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon }) => (
  <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.06] p-5 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 flex items-center justify-center rounded-md bg-white/10">
        <Icon className="h-5 w-5 text-sky-300" />
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
    </div>
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="text-xs px-2.5 py-1 rounded-md bg-gray-900/60 border border-white/10 text-gray-200">
          {s}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Skillset.exe</h2>
          <p className="text-sm text-gray-400">Always learning. Always building.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <SkillCard
            title="Programming"
            icon={Code}
            items={["Python", "JavaScript", "TypeScript", "Node.js", "React"]}
          />
          <SkillCard
            title="AI Concepts"
            icon={Brain}
            items={["ML Basics", "Prompting", "Embeddings", "Agents", "APIs"]}
          />
          <SkillCard
            title="New Tech + Science"
            icon={Atom}
            items={["Web Tech", "3D/Interactive", "Automation", "Open Source", "Design Systems"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
