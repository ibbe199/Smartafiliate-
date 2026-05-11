import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { siteStructure } from "../../data/siteStructure";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center font-black text-xl italic text-white transition-transform group-hover:scale-110">SA</div>
              <span className="text-2xl font-black tracking-tighter uppercase italic text-white">Smart Affiliate</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {siteStructure.slice(0, 5).map((category) => (
              <div key={category.path} className="relative group h-24 flex items-center">
                <button className={cn(
                  "flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors py-1 border-b-2",
                  location.pathname.startsWith(category.path) ? "text-white border-orange-600" : "text-neutral-400 border-transparent hover:text-white"
                )}>
                  {category.title}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </button>
                <div className="absolute right-0 top-full w-72 bg-neutral-900 border border-neutral-800 shadow-2xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 p-3 z-50">
                  <div className="grid gap-1">
                    <div className="px-3 py-2 text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] mb-1">
                      المحتوى الرائج
                    </div>
                    {category.links.slice(0, 6).map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-orange-500 transition-all font-bold"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <button className="px-8 py-3 bg-white text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(234,88,12,1)] hover:shadow-none translate-y-0 active:translate-y-1">
              انضم للمصفوفة
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        className="lg:hidden overflow-hidden bg-neutral-900 border-t border-neutral-800"
      >
        <div className="px-6 pt-4 pb-10 space-y-6">
          {siteStructure.map((category) => (
            <div key={category.path}>
              <div className="text-xs font-black text-orange-600 uppercase tracking-[0.3em] mb-3">{category.title}</div>
              <div className="grid gap-3 pr-2">
                {category.links.slice(0, 4).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-bold text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <button className="w-full py-4 bg-orange-600 text-white font-black uppercase tracking-widest">
            انضم للمصفوفة
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
