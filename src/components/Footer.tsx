import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-bold text-white tracking-tighter">
          <Terminal className="text-cyan-400" size={20} />
          <span>Nihar<span className="text-cyan-400">.dev</span></span>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Nihar Ranjan Panda. All rights reserved.
        </p>
        <div className="text-slate-500 text-sm flex items-center gap-1">
          Built with <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
