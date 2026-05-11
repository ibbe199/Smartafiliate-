import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Video, Sparkles, Loader2, Play, AlertTriangle, Key } from "lucide-react";

interface VeoVideoSummaryProps {
  content: string;
  title: string;
}

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export const VeoVideoSummary: React.FC<VeoVideoSummaryProps> = ({ content, title }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(true);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      }
    };
    checkKey();
  }, []);

  const handleOpenKeyDialog = async () => {
    try {
      await window.aistudio.openSelectKey();
      // Assume success after dialog opens/closes as per skill guidance
      setHasKey(true);
    } catch (err) {
      console.error("Failed to open key dialog", err);
    }
  };

  const generateSummaryVideo = async () => {
    setLoading(true);
    setError(null);
    setVideoUrl(null);
    setStatus('تحليل المحتوى وتهيئة المصفوفة...');

    try {
      // Step 1: Create a short prompt for the video based on the content
      const aiForPrompt = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const promptResponse = await aiForPrompt.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Create a visual description for a high-tech, abstract cinematic video that represents the following article about ${title}. The description should be suitable for a video generation model prompt. Focus on motion, light, and abstract tech concepts. Content: ${content.substring(0, 500)}`,
      });

      const videoPrompt = promptResponse.text || `High-tech cinematic abstract visualization about ${title}, futuristic motion graphics, glowing data streams, brutalist aesthetic.`;
      
      setStatus('بدء عملية توليد الفيديو (Veo 3.1)... قد يستغرق هذا بضع دقائق.');

      // Step 2: Generate Video using Veo (Uses the USER'S API KEY)
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("No API Key found. Please select a key.");
      }

      const ai = new GoogleGenAI({ apiKey });
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-lite-generate-preview',
        prompt: videoPrompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      // Polling for completion
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation });
        setStatus(`جاري المعالجة... يرجى الانتظار (نسبة الإنجاز قد تختلف)`);
      }

      if (operation.error) {
        throw new Error((operation.error as any).message || "Video generation failed");
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (!downloadLink) {
        throw new Error("No video URI returned from operation");
      }

      setStatus('تحميل الفيديو من المصفوفة...');

      // Fetch the video using the API key in the header
      const videoResponse = await fetch(downloadLink, {
        method: 'GET',
        headers: {
          'x-goog-api-key': apiKey,
        },
      });

      if (!videoResponse.ok) {
        throw new Error("Failed to fetch video file");
      }

      const videoBlob = await videoResponse.blob();
      const localUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(localUrl);
      setLoading(false);
      setStatus('');

    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setHasKey(false);
        setError("انتهت صلاحية مفتاح الـ API أو أنه غير صالح. يرجى إعادة الاختيار.");
      } else {
        setError(err.message || "حدث خطأ غير متوقع أثناء توليد الفيديو.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="my-16 p-8 lg:p-12 bg-neutral-900 border-4 border-neutral-800 shadow-[15px_15px_0px_0px_rgba(234,88,12,1)] rtl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
        <div>
          <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
            <Sparkles className="w-8 h-8 text-orange-600 animate-pulse" />
            ملخص فيديو AI (Veo)
          </h3>
          <p className="text-neutral-500 font-bold mt-2">
            حول هذا المقال إلى فيديو سنمائي ملخص باستخدام أحدث تقنيات Google DeepMind.
          </p>
        </div>

        {!videoUrl && !loading && (
          <div className="flex flex-col gap-4">
            {!hasKey ? (
              <button 
                onClick={handleOpenKeyDialog}
                className="brutalist-button flex items-center gap-3 bg-white text-black"
              >
                <Key className="w-5 h-5" />
                اختر مفتاح API (Veo)
              </button>
            ) : (
              <button 
                onClick={generateSummaryVideo}
                className="brutalist-button flex items-center gap-3"
              >
                <Video className="w-5 h-5" />
                توليد الملخص المرئي
              </button>
            )}
          </div>
        )}
      </div>

      {loading && (
        <div className="h-96 bg-black border-2 border-neutral-800 flex flex-col items-center justify-center gap-6 p-12 text-center">
          <Loader2 className="w-16 h-16 text-orange-600 animate-spin" />
          <div>
            <p className="text-xl font-black text-white animate-pulse">{status}</p>
            <p className="text-neutral-500 text-sm mt-4 max-w-md">
              توليد الفيديو عملية مكثفة تقنياً. سنقوم بإخطارك فور اكتمال معالجة المصفوفة للبيانات.
            </p>
          </div>
        </div>
      )}

      {error && !loading && (
        <div className="p-6 bg-red-950/20 border-2 border-red-900 text-red-500 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-black">خطأ في النظام</p>
            <p className="text-sm font-bold opacity-80">{error}</p>
            {!hasKey && (
              <button 
                onClick={handleOpenKeyDialog}
                className="mt-4 text-xs font-black underline uppercase tracking-widest hover:text-white"
              >
                إعادة اختيار المفتاح
              </button>
            )}
          </div>
        </div>
      )}

      {videoUrl && !loading && (
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-white opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
          <video 
            src={videoUrl} 
            controls 
            className="relative w-full aspect-video bg-black border-2 border-neutral-800"
            autoPlay
          />
          <div className="mt-6 flex justify-between items-center bg-black/50 p-4 border border-neutral-800">
             <div className="text-[10px] font-black text-neutral-500 tracking-[0.3em] uppercase">VEO_ENGINE_OUTPUT_SUCCESS</div>
             <button 
               onClick={() => { setVideoUrl(null); }}
               className="text-[10px] font-black text-orange-600 hover:text-white uppercase tracking-widest"
             >
               إعادة التوليد
             </button>
          </div>
        </div>
      )}
      
      <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-600"></div>
          <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Veo 3.1 Generate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
          <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Resolution: 720p</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
          <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">Aspect: 16:9</span>
        </div>
      </div>
    </div>
  );
};
