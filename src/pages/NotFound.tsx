import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 bg-neutral-950">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="relative">
          <div className="text-[15rem] md:text-[22rem] font-black text-neutral-900 select-none leading-none tracking-tighter italic">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="p-10 bg-orange-600 shadow-[20px_20px_0px_0px_rgba(255,255,255,1)] rotate-3">
                <span className="text-4xl font-black text-black uppercase tracking-tighter">DATA_MISSING</span>
             </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">فقدان الاتصال بالوحدة</h1>
          <p className="text-neutral-500 text-xl font-bold leading-relaxed max-w-lg mx-auto">
            يبدو أنك تحاول الوصول إلى قسم غير مشفر أو تم نقله خارج حدود المصفوفة الحالية.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-3 px-10 py-6 bg-white text-black font-black uppercase text-sm tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-[10px_10px_0px_0px_rgba(234,88,12,1)]"
          >
            <Home className="w-5 h-5" />
            <span>العودة للرئيسية</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-3 px-10 py-6 bg-neutral-900 text-white border-4 border-neutral-800 font-black uppercase text-sm tracking-widest hover:border-white transition-all"
          >
            <span>بروتوكول الرجوع</span>
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
