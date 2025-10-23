import React from 'react';
import { User, Globe, Activity, Cpu } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
      <Icon className="h-5 w-5 text-indigo-300" />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
      <p className="text-sm sm:text-base text-white font-medium">{value}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">About</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              SYSTEM.ID — Student & future-focused entrepreneur exploring the intersections of AI, new tech, and science. I'm an introvert who finds clarity in code and complexity. My goal is to build something that matters.
            </p>
            <p className="mt-3 text-gray-400">
              I value thoughtful engineering, strong fundamentals, and shipping polished, real-world experiences. If it involves intelligence, interactivity, or impact, I want to work on it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Stat icon={Activity} label="Status" value="Online" />
            <Stat icon={Globe} label="Location" value="The Digital Frontier" />
            <Stat icon={User} label="Identity" value="SYSTEM.ID" />
            <Stat icon={Cpu} label="Current Age" value="15.731892596 years" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
