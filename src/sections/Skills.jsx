import { useState } from 'react';

const Skills = () => {
  // skill groups
  const devSkills = [
    { label: 'HTML / CSS / JavaScript', pct: '90%', from: '#60a5fa', to: '#3b82f6' },
    { label: 'Tailwind CSS', pct: '88%', from: '#7c3aed', to: '#06b6d4' },
    { label: 'React.js / Redux Toolkit', pct: '92%', from: '#34d399', to: '#10b981' },
    { label: 'FastAPI', pct: '78%', from: '#f59e0b', to: '#f97316' },
    { label: 'Three.js', pct: '75%', from: '#7dd3fc', to: '#3b82f6' },
    { label: 'Framer Motion', pct: '70%', from: '#f472b6', to: '#fb7185' },
    { label: 'REST / APIs', pct: '85%', from: '#22c55e', to: '#16a34a' }
  ];

  const langSkills = [
    { label: 'C / C++', pct: '88%', from: '#06b6d4', to: '#3b82f6' },
    { label: 'Python', pct: '82%', from: '#34d399', to: '#10b981' },
    { label: 'Rust', pct: '60%', from: '#fb923c', to: '#f97316' },
    { label: 'SQL', pct: '80%', from: '#f59e0b', to: '#f97316' },
    { label: 'Data Structures & Algorithms', pct: '78%', from: '#7c3aed', to: '#60a5fa' },
    { label: 'OOP & System Design', pct: '72%', from: '#7dd3fc', to: '#3b82f6' },
    { label: 'DBMS', pct: '80%', from: '#f59e0b', to: '#f97316' },
    { label: 'Operating System', pct: '78%', from: '#60a5fa', to: '#7c3aed' }
  ];

  const toolsSkills = [
    { label: 'Git / GitHub', pct: '90%', from: '#06b6d4', to: '#3b82f6' },
    { label: 'CI/CD (GitHub Actions)', pct: '82%', from: '#f59e0b', to: '#f97316' },
    { label: 'Docker', pct: '80%', from: '#7dd3fc', to: '#3b82f6' },
    { label: 'Postman / Swagger', pct: '74%', from: '#f472b6', to: '#fb7185' },
    { label: 'WebSocket / Realtime', pct: '76%', from: '#34d399', to: '#10b981' },
    { label: 'Low-latency systems', pct: '70%', from: '#7c3aed', to: '#60a5fa' },
    { label: 'Testing & Integration', pct: '78%', from: '#22c55e', to: '#16a34a' }
  ];

  // selected skill per card (defaults)
  const [devSelected, setDevSelected] = useState(devSkills[0].label);
  const [langSelected, setLangSelected] = useState(langSkills[0].label);
  const [toolsSelected, setToolsSelected] = useState(toolsSkills[0].label);

  const selectedDev = devSkills.find((s) => s.label === devSelected) || devSkills[0];
  const selectedLang = langSkills.find((s) => s.label === langSelected) || langSkills[0];
  const selectedTool = toolsSkills.find((s) => s.label === toolsSelected) || toolsSkills[0];

  return (
    <section className="c-space my-20" id="skills">
      <div className="flex items-center justify-between">
        <p className="head-text">Skills</p>
        <p className="text-white-600 hidden sm:block"></p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-8">
        {/* Development card */}
        <div className="p-6 rounded-3xl bg-black-200 backdrop-filter backdrop-blur-3xl border border-black-300 shadow-2xl hover:translate-y-[-6px] transform transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6EE7B7] to-[#3B82F6] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 17H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white-800 text-lg">Development</h4>
              <p className="text-white-600 text-sm">Frontend & backend web development</p>
            </div>
          </div>

          <div className="mb-4">
            {/* buttons to pick which development skill to show */}
            <div className="flex flex-wrap gap-2 mb-3">
              {devSkills.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setDevSelected(s.label)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-150 ${devSelected === s.label ? 'bg-white-800 text-black' : 'bg-black-300 text-white-600 border border-black-400'}`}>
                  {s.label}
                </button>
              ))}
            </div>

            {/* show only the selected development skill's bar */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="text-white-600 text-sm">{selectedDev.label}</div>
                <div className="text-white-600 text-xs">{selectedDev.pct}</div>
              </div>
              <div className="w-full bg-black-300 rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: selectedDev.pct, transition: 'width 700ms ease', background: `linear-gradient(90deg, ${selectedDev.from}, ${selectedDev.to})` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Languages & CS card */}
        <div className="p-6 rounded-3xl bg-black-200 backdrop-filter backdrop-blur-3xl border border-black-300 shadow-2xl hover:translate-y-[-6px] transform transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FDE68A] to-[#FCA5A5] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 7H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white-800 text-lg">Languages & CS</h4>
              <p className="text-white-600 text-sm">Core languages and computer science fundamentals</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {langSkills.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setLangSelected(s.label)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-150 ${langSelected === s.label ? 'bg-white-800 text-black' : 'bg-black-300 text-white-600 border border-black-400'}`}>
                  {s.label}
                </button>
              ))}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="text-white-600 text-sm">{selectedLang.label}</div>
                <div className="text-white-600 text-xs">{selectedLang.pct}</div>
              </div>
              <div className="w-full bg-black-300 rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: selectedLang.pct, transition: 'width 700ms ease', background: `linear-gradient(90deg, ${selectedLang.from}, ${selectedLang.to})` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Concepts card */}
        <div className="p-6 rounded-3xl bg-black-200 backdrop-filter backdrop-blur-3xl border border-black-300 shadow-2xl hover:translate-y-[-6px] transform transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c7b0ff] to-[#7dd3fc] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 18H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white-800 text-lg">Tools & Concepts</h4>
              <p className="text-white-600 text-sm">Dev tools, infra and system-level concepts</p>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex flex-wrap gap-2 mb-3">
              {toolsSkills.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setToolsSelected(s.label)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-150 ${toolsSelected === s.label ? 'bg-white-800 text-black' : 'bg-black-300 text-white-600 border border-black-400'}`}>
                  {s.label}
                </button>
              ))}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="text-white-600 text-sm">{selectedTool.label}</div>
                <div className="text-white-600 text-xs">{selectedTool.pct}</div>
              </div>
              <div className="w-full bg-black-300 rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: selectedTool.pct, transition: 'width 700ms ease', background: `linear-gradient(90deg, ${selectedTool.from}, ${selectedTool.to})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
