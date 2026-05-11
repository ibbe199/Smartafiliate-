import { Link } from "react-router-dom";
import { Github, Twitter, Youtube, ArrowUp } from "lucide-react";
import { siteStructure } from "../../data/siteStructure";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      {/* Marquee Ticker */}
      <div className="h-16 bg-orange-600 text-black flex items-center overflow-hidden border-y-4 border-black">
        <div className="whitespace-nowrap flex gap-12 font-black uppercase text-sm animate-marquee select-none">
          <span className="flex items-center gap-4">● LATEST_PROTOCOL: GPT-5_NEURAL_WEIGHTS_LEAKED</span>
          <span className="flex items-center gap-4">● SEO_UPDATE: THE_DEATH_OF_TRADITIONAL_SEARCH</span>
          <span className="flex items-center gap-4">● SYSTEM_ALERT: NEW_PYTHON_AUTOMATION_LIBRARIES</span>
          <span className="flex items-center gap-4">● TRAFFIC_REPORT: 1000%_GROWTH_IN_AI_WORKFLOWS</span>
          <span className="flex items-center gap-4">● INFRA_GUIDE: LOCAL_OLLAMA_ORCHESTRATION</span>
          <span className="flex items-center gap-4">● AFFILIATE_DATA: HIGH-TICKET_DEV_PROGRAMS</span>
          {/* Duplicate for seamless loop */}
          <span className="flex items-center gap-4">● LATEST_PROTOCOL: GPT-5_NEURAL_WEIGHTS_LEAKED</span>
          <span className="flex items-center gap-4">● SEO_UPDATE: THE_DEATH_OF_TRADITIONAL_SEARCH</span>
          <span className="flex items-center gap-4">● SYSTEM_ALERT: NEW_PYTHON_AUTOMATION_LIBRARIES</span>
          <span className="flex items-center gap-4">● TRAFFIC_REPORT: 1000%_GROWTH_IN_AI_WORKFLOWS</span>
          <span className="flex items-center gap-4">● INFRA_GUIDE: LOCAL_OLLAMA_ORCHESTRATION</span>
          <span className="flex items-center gap-4">● AFFILIATE_DATA: HIGH-TICKET_DEV_PROGRAMS</span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-black text-2xl italic">SA</div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">Smart Affiliate</span>
            </div>
            <p className="text-neutral-500 font-bold text-lg leading-relaxed max-w-sm">
              بناء الجيل القادم من المسوقين العرب المجهزين بأحدث تقنيات الذكاء الاصطناعي والأتمتة الرقمية.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-400 hover:text-orange-600 transition-colors"><Twitter /></a>
              <a href="#" className="text-neutral-400 hover:text-orange-600 transition-colors"><Youtube /></a>
              <a href="#" className="text-neutral-400 hover:text-orange-600 transition-colors"><Github /></a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-12">
            {siteStructure.slice(0, 2).map(cat => (
              <div key={cat.path}>
                <h3 className="text-xs font-black text-orange-600 uppercase tracking-[0.3em] mb-8">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.links.slice(0, 5).map(link => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-lg font-black text-white hover:text-orange-500 transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end justify-between">
            <button 
              onClick={scrollToTop}
              className="w-16 h-16 border-2 border-neutral-800 flex items-center justify-center rounded-full hover:border-orange-600 hover:text-orange-600 transition-all group"
            >
              <ArrowUp className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="text-right mt-10 md:mt-0">
               <div className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-2">Since 2024</div>
               <div className="text-xl font-black italic">SMART_AFFILIATE</div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">
          <div className="flex flex-wrap gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="text-neutral-400">
            © 2026 SA_CORP_GLOBAL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
