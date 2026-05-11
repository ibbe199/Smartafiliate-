import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Users } from "lucide-react";
import { siteStructure } from "./data/siteStructure";

export default function Home() {
  return (
    <div className="bg-neutral-950">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col border-b border-neutral-800">
        <div className="absolute top-0 right-0 p-12 overflow-hidden pointer-events-none">
          <span className="text-[240px] font-black text-white opacity-5 select-none leading-none tracking-tighter">2026</span>
        </div>

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto w-full">
          <div className="lg:col-span-8 p-8 lg:p-20 flex flex-col justify-center border-l border-neutral-800">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs font-black text-orange-600 uppercase tracking-[0.6em] mb-10 border-r-4 border-orange-600 pr-4"
            >
              الجيل القادم من الأعمال الرقمية
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[130px] font-black leading-[0.8] tracking-tighter uppercase mb-12 drop-shadow-[10px_10px_0px_rgba(0,0,0,0.5)]"
            >
              اتقن اقتصاد <br/>
              <span className="text-orange-600 italic">الذكاء الاصطناعي</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-3xl text-neutral-400 max-w-3xl mb-16 font-medium leading-relaxed"
            >
              استراتيجيات متقدمة للتسويق بالعمولة، أتمتة أدوات الـ AI، وهندسة المحتوى العميق للجيل القادم من بناة الويب.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-12"
            >
              <div className="group cursor-pointer">
                <div className="text-neutral-500 text-[10px] uppercase tracking-widest mb-3 font-black">المشروع المميز</div>
                <Link to="/learn-ai" className="text-3xl font-black text-white group-hover:text-orange-500 underline underline-offset-[16px] decoration-4 decoration-orange-600 transition-all block">
                  خارطة طريق 30 يوم ←
                </Link>
              </div>
              <div className="w-px h-20 bg-neutral-800 hidden sm:block"></div>
              <div className="group cursor-pointer">
                <div className="text-neutral-500 text-[10px] uppercase tracking-widest mb-3 font-black">أدوات مفتوحة</div>
                <Link to="/open-source" className="text-3xl font-black text-white group-hover:text-orange-500 underline underline-offset-[16px] decoration-4 decoration-white transition-all block">
                  دليل LLM المحلي ←
                </Link>
              </div>
            </motion.div>
          </div>

          <aside className="lg:col-span-4 bg-neutral-900/30 p-12 lg:p-20 flex flex-col justify-between border-r border-neutral-800">
            <div>
              <h2 className="text-xs font-black text-orange-600 uppercase tracking-[0.3em] mb-12">مركز المعرفة</h2>
              <div className="space-y-10">
                {[
                  { t: "مقارنة أدوات AI", p: "/ai-tools/comparison", n: "01" },
                  { t: "نجاح محتوى SEO", p: "/posts-ai/ai-seo-content-success", n: "02" },
                  { t: "أقماع الأفلييت", p: "/posts-ai/affiliate-funnel-guide", n: "03" },
                  { t: "دليل DeepSeek", p: "/posts-ai/deepseek-guide", n: "04" }
                ].map((item) => (
                  <Link key={item.n} to={item.p} className="flex justify-between items-end border-b border-neutral-800 pb-4 hover:border-white transition-all group">
                    <span className="text-3xl font-black group-hover:italic group-hover:text-orange-500 transition-all leading-none">{item.t}</span>
                    <span className="text-neutral-600 font-mono text-sm mb-1">[{item.n}]</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <div className="text-xs font-black text-neutral-500 uppercase tracking-widest mb-6">الأدوات الرائجة</div>
              <div className="flex flex-wrap gap-3">
                {["Llama 3", "n8n", "DeepSeek", "Ollama", "Mistral"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-neutral-800 text-[10px] font-black uppercase rounded-full tracking-wider hover:bg-orange-600 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Grid Categories */}
      <section className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {siteStructure.map((cat, i) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="group block p-12 border-b lg:border-l border-neutral-800 hover:bg-neutral-900 transition-all relative overflow-hidden min-h-[500px] flex flex-col justify-end"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all duration-700">
               <img 
                 src={`https://images.unsplash.com/featured/800x600?${cat.imageKeywords.split(', ')[0]}`} 
                 alt={cat.title}
                 className="w-full h-full object-cover grayscale"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute top-0 right-0 p-8 text-neutral-800 font-black text-6xl group-hover:text-orange-950 transition-colors pointer-events-none italic z-10">
              0{i + 1}
            </div>
            <div className="relative z-10">
              <div className="text-xs font-black text-orange-600 uppercase tracking-[0.3em] mb-6">{cat.links.length} مقال</div>
              <h3 className="text-4xl font-black text-white mb-6 group-hover:italic transition-all group-hover:translate-x-2">{cat.title}</h3>
              <p className="text-neutral-400 font-medium leading-relaxed mb-10 max-w-sm">
                استكشف أحدث التقنيات والاستراتيجيات في {cat.title} لتحقيق أقصى قدر من النتائج في عام 2026.
              </p>
              <div className="inline-flex items-center gap-3 text-white font-black group-hover:text-orange-500 transition-all">
                <span>استكشف القسم</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Newsletter - Brutalist style */}
      <section className="bg-orange-600 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase mb-10 italic">
            انضم إلى <br/> النخبة الرقمية
          </h2>
          <p className="text-black/70 text-2xl font-bold max-w-2xl mx-auto mb-16">
            كن أول من يحصل على استراتيجيات الأتمتة والذكاء الاصطناعي المسربة مباشرة في بريدك.
          </p>
          <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-0 group border-8 border-black shadow-[20px_20px_0px_0px_white]">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 bg-white p-8 text-2xl font-black placeholder:text-neutral-300 outline-none text-black focus:bg-orange-50 transition-colors"
            />
            <button className="bg-black text-white px-12 py-8 text-2xl font-black uppercase hover:bg-neutral-900 transition-all ring-inset hover:ring-4 ring-orange-600">
              اشترك الآن
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
