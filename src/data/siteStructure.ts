export interface SiteLink {
  title: string;
  path: string;
}

export interface SiteCategory {
  title: string;
  path: string;
  links: SiteLink[];
  imageKeywords: string;
  imageId: string;
}

export const siteStructure: SiteCategory[] = [
  {
    title: "أدوات الذكاء الاصطناعي",
    path: "/ai-tools",
    imageKeywords: "ai, technology, software, future",
    imageId: "photo-1677442136019-21780ecad995",
    links: [
      { title: "أفضل أدوات الذكاء الاصطناعي", path: "/ai-tools/best" },
      { title: "مقارنة أدوات الذكاء الاصطناعي", path: "/ai-tools/comparison" },
      { title: "30 أفضل أداة كتابة بالذكاء الاصطناعي", path: "/posts-ai/30-best-ai-writing-tools" },
      { title: "أفضل أدوات التصميم بالذكاء الاصطناعي", path: "/posts-ai/best-ai-design-tools" },
      { title: "أفضل أدوات الأتمتة 2026", path: "/posts-ai/best-ai-automation-tools-2026" },
      { title: "أفضل أدوات البرمجة 2026", path: "/posts-ai/best-ai-coding-tools-2026" },
      { title: "أفضل أدوات الفيديو 2026", path: "/posts-ai/best-ai-video-tools-2026" },
      { title: "أفضل أدوات البودكاست والصوت 2026", path: "/posts-ai/best-ai-audio-podcast-tools-2026" },
      { title: "أفضل أدوات السوشيال ميديا 2026", path: "/posts-ai/best-ai-social-media-tools-2026" },
    ],
  },
  {
    title: "مقارنات أدوات الذكاء الاصطناعي",
    path: "/ai-comparisons",
    imageKeywords: "ai comparison, artificial intelligence tools, analytics, dashboard",
    imageId: "photo-1551288049-bebda4e38f71",
    links: [
      { title: "ChatGPT vs DeepSeek: مقارنة شاملة للمحتوى والبرمجة والتسويق بالعمولة", path: "/articles/chatgpt-vs-deepseek-long" },
      { title: "ChatGPT vs Claude: مقارنة شاملة لصناعة المحتوى والتحليل والإنتاجية", path: "/articles/chatgpt-vs-claude-long" },
      { title: "DeepSeek vs Gemini: مقارنة شاملة للبرمجة والبحث وصناعة المحتوى", path: "/articles/deepseek-vs-gemini-long" },
      { title: "Claude vs Gemini: مقارنة شاملة للبحث والتحليل وصناعة المحتوى", path: "/articles/claude-vs-gemini-long" },
      { title: "ChatGPT vs Gemini: مقارنة شاملة لصناعة المحتوى والبحث والتسويق بالعمولة", path: "/articles/chatgpt-vs-gemini-long" },
      { title: "ChatGPT vs Grok: مقارنة شاملة لصناعة المحتوى والبحث والتحليل", path: "/articles/chatgpt-vs-grok-long" },
      { title: "Gemini vs Perplexity: مقارنة شاملة للبحث وصناعة المحتوى والسيو", path: "/articles/gemini-vs-perplexity-long" },
    ],
  },
  {
    title: "تعلم الذكاء الاصطناعي",
    path: "/learn-ai",
    imageKeywords: "learning, education, brainstorm, neural-network",
    imageId: "photo-1507146426996-ef05306b995a",
    links: [
      { title: "ما هو الذكاء الاصطناعي للمبتدئين", path: "/posts-ai/what-is-ai-beginners" },
      { title: "تعلم الذكاء الاصطناعي بدون خلفية تقنية", path: "/posts-ai/learn-ai-without-technical-background" },
      { title: "أسرع طريقة لتعلم الذكاء الاصطناعي", path: "/posts-ai/fastest-way-to-learn-ai" },
      { title: "خارطة طريق تعلم الذكاء الاصطناعي في 30 يوم", path: "/posts-ai/ai-learning-roadmap-30-days" },
      { title: "مسار تعلم الذكاء الاصطناعي الكامل", path: "/posts-ai/complete-ai-learning-path" },
      { title: "خارطة طريق من الصفر لتعلم الذكاء الاصطناعي", path: "/posts-ai/learn-ai-from-zero-roadmap" },
      { title: "بايثون للمبتدئين في الذكاء الاصطناعي", path: "/posts-ai/python-for-ai-beginners" },
      { title: "الرياضيات للمبتدئين في الذكاء الاصطناعي", path: "/posts-ai/math-for-ai-beginners" },
      { title: "دورات مجانية في الذكاء الاصطناعي بالعربي", path: "/posts-ai/free-ai-courses-arabic" },
      { title: "أفضل الكتب لتعلم الذكاء الاصطناعي", path: "/posts-ai/best-books-to-learn-ai" },
      { title: "نصائح لتعلم الذكاء الاصطناعي", path: "/posts-ai/learning-tips-for-ai" },
      { title: "مجتمعات تعلم الذكاء الاصطناعي", path: "/posts-ai/ai-learning-communities" },
      { title: "أخطاء تعلم الذكاء الاصطناعي للمبتدئين", path: "/posts-ai/ai-learning-mistakes-beginners" },
    ],
  },
  {
    title: "مشاريع وتطبيقات AI",
    path: "/ai-projects",
    imageKeywords: "innovation, coding, building, robotics",
    imageId: "photo-1581091226825-a6a2a5aee158",
    links: [
      { title: "مشاريع ذكاء اصطناعي للمبتدئين", path: "/posts-ai/ai-projects-for-beginners" },
      { title: "مشاريع عملية في الذكاء الاصطناعي للمبتدئين", path: "/posts-ai/practical-ai-projects-for-beginners" },
      { title: "بناء موقع بالذكاء الاصطناعي في دقائق", path: "/posts-ai/build-website-with-ai-in-minutes" },
      { title: "خطة 30 يوم للذكاء الاصطناعي", path: "/posts-ai/30-day-ai-plan" },
    ],
  },
  {
    title: "التسويق بالعمولة",
    path: "/affiliate-marketing",
    imageKeywords: "marketing, growth, success, digital-network",
    imageId: "photo-1460925895917-afdab827c52f",
    links: [
      { title: "ما هو التسويق بالعمولة", path: "/articles/what-is-affiliate-marketing" },
      { title: "أدوات الذكاء الاصطناعي للتسويق بالعمولة", path: "/posts-ai/ai-affiliate-tools" },
      { title: "دليل قمع التسويق بالعمولة", path: "/posts-ai/affiliate-funnel-guide" },
      { title: "دراسة حالة: 1000 زيارة للتسويق بالعمولة", path: "/posts-ai/affiliate-case-study-1000-visits" },
      { title: "استراتيجية نمو التسويق بالعمولة", path: "/posts-ai/affiliate-growth-strategy" },
      { title: "أخطاء التسويق بالعمولة", path: "/posts-ai/affiliate-mistakes" },
      { title: "أفضل برامج التسويق بالعمولة في العالم العربي", path: "/articles/best-affiliate-programs-arab-world" },
      { title: "مراجعة Systeme.io بالعربي", path: "/posts-ai/systeme-io-review-arabic" },
    ],
  },
  {
    title: "SEO والمحتوى",
    path: "/seo-content",
    imageKeywords: "seo, content, analysis, search-engine",
    imageId: "photo-1571721795195-a2cb2d33e00d",
    links: [
      { title: "سيو لمواقع التسويق بالعمولة", path: "/articles/seo-for-affiliate-sites" },
      { title: "أفضل هيكل للمحتوى", path: "/articles/best-content-structure" },
      { title: "هيكل المحتوى والسيو", path: "/posts-ai/content-structure-seo" },
      { title: "نجاح محتوى السيو بالذكاء الاصطناعي", path: "/posts-ai/ai-seo-content-success" },
      { title: "قبول جوجل لمحتوى الذكاء الاصطناعي", path: "/posts-ai/google-ai-content-acceptance" },
      { title: "حقيقة عقوبة جوجل لمحتوى AI", path: "/posts-ai/google-penalty-ai-content-truth" },
      { title: "محتوى AI: فرص ومخاطر جوجل", path: "/posts-ai/ai-content-google-opportunity-risk" },
    ],
  },
  {
    title: "أدوات مفتوحة المصدر",
    path: "/open-source",
    imageKeywords: "linux, community, chip, open-source",
    imageId: "photo-1555066931-4365d14bab8c",
    links: [
      { title: "دليل Ollama", path: "/posts-ai/ollama-guide" },
      { title: "دليل LM Studio", path: "/posts-ai/lmstudio-guide" },
      { title: "دليل Hugging Face", path: "/posts-ai/huggingface-guide" },
      { title: "دليل LangChain", path: "/posts-ai/langchain-guide" },
      { title: "دليل n8n", path: "/posts-ai/n8n-guide" },
      { title: "دليل DeepSeek", path: "/posts-ai/deepseek-guide" },
      { title: "دليل Llama 3", path: "/posts-ai/llama3-guide" },
      { title: "دليل Mistral", path: "/posts-ai/mistral-guide" },
      { title: "دليل Falcon", path: "/posts-ai/falcon-guide" },
    ],
  },
  {
    title: "مقالات عامة ومتخصصة",
    path: "/general-posts",
    imageKeywords: "news, future, city, communication",
    imageId: "photo-1451187580459-43490279c0fa",
    links: [
      { title: "آخر أخبار الذكاء الاصطناعي 2026", path: "/posts-ai/latest-ai-news-2026" },
      { title: "أحدث استخدامات أتمتة AI", path: "/posts-ai/latest-ai-automation-uses" },
      { title: "مستقبل أتمتة الذكاء الاصطناعي", path: "/posts-ai/future-of-ai-automation" },
      { title: "مستقبل المواقع العربية والذكاء الاصطناعي", path: "/posts-ai/future-arab-websites-ai" },
      { title: "الذكاء الاصطناعي في الصحة والطب", path: "/posts-ai/ai-health-medicine-research" },
      { title: "تصميم السوشيال ميديا بالذكاء الاصطناعي", path: "/posts-ai/ai-design-for-social-media" },
      { title: "دليل تصميم الشعارات بالذكاء الاصطناعي", path: "/posts-ai/ai-logo-design-guide" },
      { title: "هندسة نمو تيك توك", path: "/posts-ai/tiktok-growth-engineering" },
    ],
  },
];

export const legalLinks: SiteLink[] = [
  { title: "حول الموقع", path: "/about" },
  { title: "اتصل بنا", path: "/contact" },
  { title: "سياسة الخصوصية", path: "/privacy" },
  { title: "شروط الاستخدام", path: "/terms" },
  { title: "سياسة الكوكيز", path: "/cookie-policy" },
  { title: "إخلاء المسؤولية", path: "/disclosure" },
];
