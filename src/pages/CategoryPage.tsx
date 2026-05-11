import { useParams, Link } from "react-router-dom";
import { siteStructure } from "../data/siteStructure";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Tag } from "lucide-react";

export default function CategoryPage() {
  const { categoryId } = useParams();
  
  // Find category based on path (e.g., /ai-tools -> ai-tools)
  const category = siteStructure.find(c => c.path.includes(categoryId || ""));

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-8 p-10 text-center">
        <h1 className="text-9xl font-black italic text-neutral-800">404</h1>
        <p className="text-2xl font-bold uppercase tracking-widest text-neutral-500 underline decoration-orange-600">القسم غير موجود في المصفوفة</p>
        <Link to="/" className="px-10 py-4 bg-orange-600 text-black font-black uppercase tracking-widest hover:bg-white transition-all">
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 border-b border-neutral-800">
        <div className="flex items-center gap-4 text-xs font-black text-orange-600 uppercase tracking-[0.4em] mb-8">
          <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
          <span className="opacity-30">/</span>
          <span>{category.title}</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase italic">
          {category.title}
        </h1>
        <p className="text-2xl text-neutral-400 max-w-3xl font-medium leading-[1.6]">
          دليل شامل ومركز حول {category.title}. استكشف الموارد المختارة بعناية لتحقيق الريادة في المشهد الرقمي لعام 2026.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {category.links.map((link, i) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col border-b lg:border-l border-neutral-800 hover:bg-neutral-900 transition-all"
          >
            <div className="h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img 
                src={`https://images.unsplash.com/featured/800x600?${category.imageKeywords.split(', ')[0]},${i}`} 
                alt={link.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-12 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-8">
                 <div className="flex items-center gap-4 text-[10px] font-black text-neutral-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3 h-3 text-orange-600" />
                      <span>{category.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-orange-600" />
                      <span>8m READ</span>
                    </div>
                 </div>
                 <span className="text-neutral-700 font-mono italic group-hover:text-orange-950 transition-colors">[{i < 9 ? `0${i+1}` : i+1}]</span>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-8 group-hover:text-orange-500 transition-colors leading-[1.1] tracking-tight group-hover:italic">
                {link.title}
              </h3>
              <p className="text-neutral-500 font-medium leading-relaxed mb-12 line-clamp-3">
                استكشاف عميق لـ {link.title} وكيفية تطبيقه عملياً لتعظيم كفاءتك الرقمية واستراتيجيات النمو.
              </p>
              <div className="mt-auto">
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-3 text-white font-black uppercase text-xs tracking-widest group-hover:gap-5 transition-all text-orange-600"
                >
                  اقرأ المقال
                  <ArrowLeft className="w-5 h-5 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
