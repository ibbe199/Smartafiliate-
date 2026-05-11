import { useParams, Link } from "react-router-dom";
import { siteStructure } from "../data/siteStructure";
import { motion } from "motion/react";
import { Calendar, Clock, Share2, Printer, ArrowRight, ArrowLeft } from "lucide-react";
import { VeoVideoSummary } from "../components/VeoVideoSummary";

export default function PostPage() {
  const { postPath } = useParams();
  
  // Find specific post title from structure
  let postTitle = "عنوان المقال";
  let categoryTitle = "عام";
  
  for (const cat of siteStructure) {
    const post = cat.links.find(l => l.path.includes(postPath || ""));
    if (post) {
      postTitle = post.title;
      categoryTitle = cat.title;
      break;
    }
  }

  return (
    <article className="bg-neutral-950 min-h-screen">
      {/* Article Header */}
      <header className="border-b border-neutral-800 pt-24 pb-24 lg:pt-32 lg:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 font-black text-[200px] leading-none pointer-events-none select-none tracking-tighter">
          ARTICLE
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-orange-600 font-extrabold text-xs uppercase tracking-[0.4em] mb-12"
          >
            <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 opacity-30" />
            <span>{categoryTitle}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter uppercase mb-20 italic"
          >
            {postTitle}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-12 border-t border-neutral-800 pt-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center font-black text-black italic">SA</div>
              <div>
                <p className="font-black text-white text-lg leading-none">فريق سمارت أفلييت</p>
                <p className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mt-1">CORE_PROTOCOL</p>
              </div>
            </div>
            <div className="flex items-center gap-10 text-[10px] font-black text-neutral-500 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span>11 MAY 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>12m DEEP_READ</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-800">
        {/* Main Content */}
        <div className="lg:col-span-8 p-6 lg:p-20 border-l border-neutral-800">
          <div className="prose prose-invert prose-neutral max-w-none prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter prose-p:text-neutral-400 prose-p:text-xl prose-p:leading-relaxed prose-strong:text-orange-500">
             <div className="bg-neutral-900 border-r-8 border-orange-600 p-10 mb-16 shadow-[10px_10px_0px_0px_rgba(234,88,12,0.2)]">
               <p className="text-white font-black italic mb-0 text-2xl">
                 هذا الدليل هو جزء من التحديث الأمني والتقني للمصفوفة لعام 2026. نحن نطبق تقنيات الأتمتة المتقدمة لضمان دقة البيانات المعروضة.
               </p>
             </div>

             <section>
               <h2 className="text-5xl mb-10 italic uppercase">البروتوكول الابتدائي</h2>
               <p>
                 عندما نحلل <strong>{postTitle}</strong>، فإننا نغوص في صلب المنهجية التي ستحكم الويب في الفصول القادمة. 
                 لم يعد الذكاء الاصطناعي مجرد خيار، بل أصبح العمود الفقري الذي يرتكز عليه البناء الرقمي المعاصر.
               </p>
             </section>

             <VeoVideoSummary 
               title={postTitle} 
               content={`هذا المقال يتحدث عن ${postTitle} في فئة ${categoryTitle}. نناقش فيه البروتوكولات الابتدائية ومحاور التنفيذ وكيفية تطبيق هذا المفهوم في اقتصاد الذكاء الاصطناعي لعام 2026.`} 
             />

             <div className="my-20 h-[600px] bg-neutral-900 border-4 border-neutral-800 flex items-center justify-center group overflow-hidden relative shadow-2xl">
                <img 
                  src={`https://images.unsplash.com/featured/1200x800?${categoryTitle.split(' ')[0]}`} 
                  alt={postTitle}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms] grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors"></div>
                <span className="relative z-10 text-[120px] font-black text-white italic select-none tracking-tighter uppercase pointer-events-none drop-shadow-2xl">DATA_CORE</span>
             </div>

             <section>
               <h2 className="text-5xl mb-10 italic uppercase">محاور التنفيذ</h2>
               <p>
                 لقد قمنا بتفكيك هذا المفهوم إلى وحدات تنفيذية قابلة للتطبيق الفوري:
               </p>
               <ul className="space-y-6 mt-10 text-xl font-medium text-neutral-300">
                 <li className="flex gap-4 items-start"><span className="text-orange-600 font-black">01 //</span> إعادة تعريف أهمية {postTitle} في اقتصاد الانتباه.</li>
                 <li className="flex gap-4 items-start"><span className="text-orange-600 font-black">02 //</span> هندسة المسارات الحرجة للبدء وتحقيق عائد استثماري سريع.</li>
                 <li className="flex gap-4 items-start"><span className="text-orange-600 font-black">03 //</span> تكامل الأدوات: كيف تجعل التقنيات المختلفة تتحدث مع بعضها البعض.</li>
               </ul>
             </section>

             <section className="bg-white text-black p-16 my-20 transform -rotate-1 shadow-[20px_20px_0px_0px_rgba(234,88,12,1)]">
               <h3 className="text-4xl font-black mb-8 uppercase italic leading-none">مبدأ الرافعة التقنية</h3>
               <p className="text-2xl font-bold leading-relaxed mb-0">
                 إياك والظن أن الأدوات ستفعل كل شيء. أنت القائد، والمصفوفة هي المحرك. 
                 استخدم ذكاءك البشري لتوجيه القوة الغاشمة للخوارزميات نحو الأهداف الصحيحة.
               </p>
             </section>

             <section>
               <h2 className="text-5xl mb-10 italic uppercase">مرحلة الإطلاق</h2>
               <p>
                 الآن، وبعد استعراض هذه المكونات، حان وقت العمل. لا تنتظر الكمال، ابدأ بالإصدار التجريبي وقم بالتحسين أثناء الحركة.
                 السرعة هي العملة الأغلى في عام 2026.
               </p>
             </section>
          </div>

          <div className="mt-20 pt-10 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-xl font-black italic uppercase tracking-widest text-neutral-500">SHARE_THE_DATA_STREAM</div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]">Share <Share2 className="inline ml-2 w-4 h-4" /></button>
              <button className="px-8 py-4 bg-neutral-800 text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Print <Printer className="inline ml-2 w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 bg-neutral-900/10 flex flex-col divide-y divide-neutral-800">
          <div className="p-12 lg:p-16">
            <h3 className="text-xs font-black text-orange-600 uppercase tracking-[0.4em] mb-12">مقالات مشابهة في المصفوفة</h3>
            <div className="space-y-12">
              {siteStructure[0].links.slice(0, 4).map((link, i) => (
                <Link key={link.path} to={link.path} className="group block">
                  <span className="block text-[10px] font-black text-neutral-600 mb-3 uppercase tracking-widest">Protocol 0{i+1}</span>
                  <h4 className="text-2xl font-black text-white group-hover:text-orange-500 group-hover:italic transition-all leading-tight">
                    {link.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-12 lg:p-16 flex-grow flex flex-col justify-center bg-orange-600/5 group hover:bg-orange-600/10 transition-all cursor-pointer">
            <h3 className="text-4xl font-black text-white mb-8 italic uppercase tracking-tighter">انضم للمجتمع <br/> المتقدم</h3>
            <p className="text-neutral-500 font-bold mb-12 leading-relaxed">كن من ضمن الـ 1% الذين يمتلكون المعرفة قبل الجميع.</p>
            <Link to="/" className="inline-flex items-center justify-center p-6 bg-white text-black font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all group/btn">
              <span>GET_ACCESS_NOW</span>
              <ArrowLeft className="w-6 h-6 mr-4 group-hover/btn:-translate-x-2 transition-transform" />
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
