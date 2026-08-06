import { PortfolioData } from "@/types/portfolio";

export const EN_PORTFOLIO_DATA: PortfolioData = {
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "8+" },
    { label: "Code Accuracy", value: "95%" },
    { label: "Tech Stack Tools", value: "15+" },
  ],
  projects: [
    {
      title: "Adepti",
      description:
        "An internal talent marketplace optimized for enterprise scale. Led the frontend architecture, implementing a comprehensive bilingual (EN/NL) system and sophisticated multi-layered filtering mechanisms.",
      tags: [
        "SaaS",
        "Talent Management",
        "Bilingual",
        "React",
        "MUI",
        "Redux",
        "React Query",
      ],
      features: [
        "Bilingual (EN/NL) Support",
        "Multi-layered Filtering",
        "Scalable Enterprise Structure",
      ],
      link: "https://www.adepti.co",
      image: "/assets/projects/adepti.png",
      accent: "primary",
    },
    {
      title: "Taheiya",
      description:
        "Comprehensive accountants SaaS platform. Engineered a robust real-time communication system and full RTL support. Pioneered a high-efficiency Figma-to-Code workflow.",
      tags: [
        "SaaS",
        "Accountants Freelancing",
        "Real-time Communication",
        "RTL",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "React Query",
      ],
      features: [
        "Real-time Communication",
        "Full RTL Support",
        "Optimized SaaS UI",
      ],
      link: "https://mohaseb.sa",
      image: "/assets/projects/taheiya.png",
      accent: "secondary",
    },
    {
      title: "Science Toonz",
      description:
        "Educational powerhouse combining interactive video lessons with real-time AI assessments. Integrated OpenRouter AI for personalized feedback and dynamic quiz generation.",
      tags: [
        "AI",
        "Education",
        "Interactive",
        "React",
        "MUI",
        "Jotai",
        "RTQuery",
      ],
      features: [
        "Interactive Video Lessons",
        "AI-Powered Assessments",
        "OpenRouter Integration",
      ],
      link: "https://sciencetoonz.com",
      image: "/assets/projects/science-toonz.png",
      accent: "tertiary",
    },
    {
      title: "Chatting App",
      description:
        "A full-stack real-time messaging platform built from scratch. Engineered WebSocket communication with Socket.IO, implemented secure JWT & Google OAuth authentication, and delivered a rich chat experience with typing indicators, online presence, and infinite scroll history.",
      tags: [
        "Real-time",
        "Full-Stack",
        "WebSockets",
        "Next.js",
        "TypeScript",
        "Socket.IO",
        "PostgreSQL",
        "Prisma",
      ],
      features: [
        "Real-time WebSocket Messaging",
        "JWT & Google OAuth",
        "Typing Indicators & Unread Badges",
      ],
      link: "https://github.com/mahmoudzanoun13/chatting-app",
      image: "/assets/projects/chatting-app.png",
      accent: "primary",
    },
  ],
  experience: [
    {
      type: "experience",
      icon: "work",
      period: "Jul 2026 — Present",
      title: "Frontend Developer",
      company: "Crazy Dolphin Diving Center",
      companyLink: "https://www.crazy-dolphin.com",
      highlights: [
        {
          text: "Maintaining and developing features for a production entertainment web platform.",
          focus: "production entertainment web platform",
        },
        {
          text: "Delivering UI improvements and bug fixes in a live environment.",
          focus: "UI improvements and bug fixes",
        },
        {
          text: "Working with a legacy jQuery codebase in production.",
          focus: "legacy jQuery codebase",
        },
      ],
      tech: ["jQuery", "JavaScript", "HTML5", "CSS3"],
      image: "/assets/experience-visual.png",
    },
    {
      type: "experience",
      icon: "work",
      period: "May 2023 — Jun 2026",
      title: "Frontend Developer",
      company: "GenTech",
      companyLink: "https://gen-tech.io",
      highlights: [
        {
          text: "Led development of 4 production apps from architectural blueprint to deployment.",
          focus: "4 production apps",
        },
        {
          text: "Architected multi-language support systems for global market reach.",
          focus: "multi-language support",
        },
        {
          text: "Engineered robust internal component libraries used across all corporate digital products.",
          focus: "internal component libraries",
        },
        {
          text: "Contributed to other 4 projects, delivering key features and components",
          focus: "other 4 projects",
        },
        {
          text: "Implemented static code analysis using SonarQube to improve code quality across projects.",
          focus: "SonarQube"
        },
      ],
      tech: ["React", "Next.js", "System Design", "Tailwind CSS", "TypeScript"],
      image: "/assets/experience-visual.png",
    },
    {
      type: "experience",
      icon: "school",
      period: "Apr 2023 — May 2023",
      title: "Frontend Instructor",
      company: "Creativa Innovation Hub",
      companyLink: "https://creativa.gov.eg",
      highlights: [
        {
          text: "Taught React.js to beginners from non-CS backgrounds.",
          focus: "React.js to beginners",
        },
        {
          text: "Led a graduation project from planning to delivery.",
          focus: "graduation project",
        },
      ],
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      type: "education",
      icon: "school",
      period: "Sep 2021 — Nov 2021",
      title: "Web Development",
      company: "ZTM Academy",
      description:
        "Advanced immersion into full-stack paradigms, focusing on the MERN stack and modern UI engineering. Mastered state management, backend integration, and responsive design patterns.",
      metrics: [
        { label: "Certification Completed", icon: "verified" },
        { label: "Top Tier Graduate", icon: "grade" },
      ],
      visual: [
        {
          type: "icon-box",
          icon: "workspace_premium",
          color: "from-secondary/20 to-secondary/5",
          iconColor: "text-secondary",
        },
      ],
    },
    {
      type: "education",
      icon: "history_edu",
      period: "Oct 2020 — Feb 2021",
      title: "Computer Science",
      company: "Harvard University (CS50)",
      description:
        "Built the fundamental logic foundation. Deep dives into Memory Management, Algorithms, and Data Structures using C, Python, and SQL. Developed a rigorous approach to problem-solving.",
      stats: [
        { label: "Complexity", value: "O(log n)" },
        { label: "Logic Mastery", value: "100%" },
      ],
    },
  ],
  recommendations: [
    {
      id: "https://www.linkedin.com/in/omar-mohammed-el-gharieb",
      name: "Omar Mohammed El Gharieb",
      role: "Senior Project Manager | Delivery Manager | Senior Product Manager → Head of Product | Fintech & SaaS | Turning Complex Delivery into Scalable Products | Remote-First",
      relationship: "Managed Mahmoud directly",
      relationshipType: "leadership",
      text: "I am pleased to recommend Mahmoud Zanoun as an outstanding Frontend Developer. During our time together at Gentech Software House, he consistently demonstrated a strong commitment to delivering high-quality solutions and an impressive range of technical skills.\n\n Mahmoud has a keen eye for detail and an innate ability to translate complex requirements into intuitive and visually appealing user interfaces. His proficiency in technologies such as HTML, CSS, and JavaScript, along with frameworks like React and Next.js, enabled our team to execute projects efficiently and meet tight deadlines.\n\n In addition to his technical expertise, Mahmoud is a proactive collaborator. He actively participated in team discussions, offering valuable insights and fostering a positive working environment. His strong communication skills made it easy for team members and stakeholders to align on project goals.\n\n I highly recommend Mahmoud for any opportunity where his frontend development skills and collaborative spirit can be utilized. I am confident that he will be an invaluable asset to any team.",
      avatarInitials: "OM"
    },
    {
      id: "https://www.linkedin.com/in/omar-abo-el-wafa-967621b3",
      name: "Omar Abo El Wafa",
      role: "Tech lead @ Vodafone",
      relationship: "Managed Mahmoud directly",
      relationshipType: "leadership",
      text: "Mahmoud is one of those hard-workers, and decent developers you would like to have in your team.",
      avatarInitials: "OA"
    },
    {
      id: "https://www.linkedin.com/in/khaled-yahia",
      name: "Khaled Yahia",
      role: "Frontend Team lead @ GenTech",
      relationship: "Managed Mahmoud directly",
      relationshipType: "leadership",
      text: "I had the pleasure of working closely with Mahmoud on several high-impact web projects, and I can confidently say they are one of the most talented frontend developers I’ve collaborated with.\n\n Mahmoud has an exceptional eye for detail, responsive interfaces that not only look stunning but also provide seamless user experiences across all devices. Their deep understanding of modern JavaScript frameworks (especially React), HTML5, CSS3, and accessibility best practices enables them to build scalable, maintainable, and performant applications.\n\n Beyond technical skills, Mahmoud is a proactive problem-solver, an excellent communicator, and always eager to share knowledge with teammates. He actively contribute to code reviews, advocate for UX-focused development, and stay ahead of industry trends constantly improving both his own work and the team’s overall output.\n\n Any team would be lucky to have Mahmoud on board. I highly recommend him for any frontend role where quality, collaboration, and innovation matter.",
      avatarInitials: "KY"
    },
    {
      id: "https://www.linkedin.com/in/amr-hussien2025",
      name: "Amr Hussien",
      role: "Business Analyst | Product Owner",
      relationship: "Managed Mahmoud directly",
      relationshipType: "leadership",
      text: "I had the pleasure of working with Mahmoud on two different projects, and he truly represents the meaning of commitment and professionalism.\n\n Mahmoud is always eager to learn, improve himself, and challenge his limits. He consistently looks for better solutions and has a strong sense of ownership over the work he delivers. His mindset goes beyond implementation; he understands the broader project context and always aims to add real value.\n\n From a communication and collaboration perspective, Mahmoud is very professional, clear, and easy to work with. He is one of the strongest frontend developers I have worked with, combining solid technical skills with a growth-oriented attitude.\n\n I would highly recommend Mahmoud to any team looking for a reliable, skilled, and motivated frontend developer.",
      avatarInitials: "AH"
    },
    {
      id: "https://www.linkedin.com/in/ahmed-el-sayed-saleh",
      name: "Ahmed ElSayed Saleh",
      role: "Front-End Developer / Wordpress Developer / CMS Architect",
      relationship: "Worked with Mahmoud but on different teams",
      relationshipType: "collaboration",
      text: "It was a pleasure working with Mahmoud Zanoun. He combines strong practical skills with a high level of professionalism and integrity. Mahmoud has excellent communication skills, works very well within a team, and always strives to deliver high-quality results on time. I am confident that any team or organization he joins will greatly benefit from his experience, positive attitude, and dedication.",
      avatarInitials: "AE"
    },
    {
      id: "https://www.linkedin.com/in/amrzaher",
      name: "Amr Zaher",
      role: "HR Manager focused on Employee Relations and Performance Management",
      relationship: "Worked with Mahmoud but on different teams",
      relationshipType: "collaboration",
      text: "Mahmoud is  consistently demonstrated strong skills in building clean, responsive, and user-friendly interfaces. he had a solid understanding of modern front-end technologies and always pay attention to performance, usability, and details, he is reliable, proactive, and easy to work with. he communicate clearly, accept feedback positively, and always aim to deliver high-quality work on time.",
      avatarInitials: "AZ"
    },
    {
      id: "https://www.linkedin.com/in/muhammad-bendary46",
      name: "Muhammad Bendary",
      role: "UI/UX Designer | B2B SaaS • Mobile & Web @GenTech",
      relationship: "Worked with Mahmoud on the same team",
      relationshipType: "collaboration",
      text: "I had the pleasure of working with Mahmoud, and he is a highly skilled and reliable Front-End Developer. He has strong experience with React and modern front-end technologies, and he always delivers clean, well-structured, and responsive interfaces.\n\n Mahmoud is proactive, detail-oriented, and easy to collaborate with. He communicates clearly, understands requirements quickly, and consistently contributes valuable ideas to improve the final product.\n\n Working with him was a great experience, and I would confidently recommend Mahmoud for any front-end or React development role.",
      avatarInitials: "MB"
    },
    {
      id: "https://www.linkedin.com/in/waleed-adel-377582246",
      name: "Waleed Adel",
      role: "Agile Product Owner | LMS & SaaS Products | Turning Requirements into High-Impact Releases",
      relationship: "Managed Mahmoud directly",
      relationshipType: "leadership",
      text: "As the Product Owner who worked directly with Mahmoud, I can confidently say that he is disciplined, committed, and consistently goes above and beyond to ensure the highest quality of work. I wholeheartedly recommend him.",
      avatarInitials: "WA"
    },
    {
      id: "https://www.linkedin.com/in/abdulrahman-mahmoud-elsobky",
      name: "AbdulRahman Mahmoud",
      role: "Full Stack Developer | React | Next.js | Node.js | NestJS | Building Scalable SaaS & Multi-Tenant Platforms",
      relationship: "Worked with Mahmoud on the same team",
      relationshipType: "collaboration",
      text: "It was my pleasure to work alongside Mahmoud as a fellow Frontend Developer at GEN-TECH, where his technical skills and professional conduct were consistently outstanding. Mahmoud possesses a strong command of React.js and Next.js, and his commitment to writing clean, precise code was always evident.\n\n Beyond his technical abilities, what distinguishes Mahmoud is his exceptional work ethic and collaborative spirit. He was consistently generous with his knowledge, supportive in helping colleagues navigate challenges, and a genuine contributor to a positive and productive team atmosphere. His integrity and dedication to high-quality work made him a truly valuable member of our team.\n\n I offer my highest recommendation for Mahmoud to any organization seeking a frontend developer who excels technically while also strengthening the team around him.",
      avatarInitials: "AM"
    },
    {
      id: "https://www.linkedin.com/in/ahmed-tayee-a28900243",
      name: "Ahmed Tayee",
      role: "Automation Software Tester | ISTQB CTFL v4.0 | Agile Tester | Business Analyst | Deutsch B1",
      relationship: "Worked with Mahmoud on the same team",
      relationshipType: "collaboration",
      text: "I worked closely with Mahmoud at Gentech, and he was always great to work with. As a frontend developer, he cared about the quality of his work and was quick to respond to feedback or bugs.\n\n From a tester’s perspective, that made collaboration smooth and stress-free. He communicated clearly, stayed practical, and focused on getting things done the right way. Overall, he’s reliable, easygoing, and a solid teammate.\n\n I’d definitely recommend him and would be happy to work with him again.",
      avatarInitials: "AT"
    },
    {
      id: "https://www.linkedin.com/in/kareemyasser8",
      name: "Kareem Yasser",
      role: "Frontend Developer at Gen-tech",
      relationship: "Worked with Mahmoud on the same team",
      relationshipType: "collaboration",
      text: "I had the pleasure of working alongside Mahmoud on several frontend projects, where he consistently demonstrated strong technical skills and a solid understanding of modern frontend development. As a peer, he was collaborative, reliable, and always willing to contribute ideas that improved both the user experience and code quality.",
      avatarInitials: "KY"
    },
    {
      id: "https://www.linkedin.com/in/omniaosman",
      name: "Omnia Osman",
      role: "Back-End developer (Django | NestJS)",
      relationship: "Worked with Mahmoud but on different teams",
      relationshipType: "collaboration",
      text: "I had the opportunity to work with him, and he was a cooperative and dependable Frontend Developer. He worked well within the team, communicated clearly, and was always open to learning and feedback.\n\n He showed a good understanding of frontend fundamentals and put genuine effort into improving his skills. His positive attitude and willingness to support others made collaboration smooth and productive.\n\n I appreciated working with him and believe he has strong potential to grow as a Frontend Developer.",
      avatarInitials: "OO"
    },
    {
      id: "https://www.linkedin.com/in/nehal-salah-8a17211b3",
      name: "Nehal Salah",
      role: "Product Owner | Business Analyst",
      relationship: "Worked with Mahmoud on the same team",
      relationshipType: "collaboration",
      text: "I worked with Mahmoud as a Product Owner, and he was a pleasure to collaborate with. Mahmoud is a highly disciplined Frontend Developer with strong attention to detail and a clear commitment to delivering high-quality work on time. He is dependable, proactive, and maintains a positive, professional attitude throughout the project. I would gladly recommend him to any team looking for a reliable and skilled Frontend Developer.",
      avatarInitials: "NS"
    },
    {
      id: "https://www.linkedin.com/in/zeyadhekal",
      name: "Zeyad Hekal",
      role: "Software Engineering Lead @ BDuro",
      relationship: "Worked with Mahmoud but on different teams",
      relationshipType: "collaboration",
      text: "Mahmoud was one of the first people to suggest and research AI tools to boost productivity and streamline Figma to Code process cutting down unnecessary wasted time and cost.\n He is hardworking and it was good to have him on the team.",
      avatarInitials: "ZH"
    },
  ],
};

export const AR_PORTFOLIO_DATA: PortfolioData = {
  stats: [
    { label: "سنوات الخبرة", value: "+3" },
    { label: "مشاريع منجزة", value: "+8" },
    { label: "دقة الكود", value: "95%" },
    { label: "أدوات تقنية", value: "+15" },
  ],
  projects: [
    {
      title: "Adepti",
      description:
        "منصة داخلية للمواهب محسنة للمقياس المؤسسي. قدت بنية الواجهة الأمامية، ونفذت نظامًا ثنائي اللغة (إنجليزي/هولندي) شاملاً وآليات تصفية متطورة متعددة الطبقات.",
      tags: [
        "SaaS",
        "إدارة المواهب",
        "ثنائي اللغة",
        "React",
        "MUI",
        "Redux",
        "React Query",
      ],
      features: [
        "دعم ثنائي اللغة (EN/NL)",
        "تصفية متعددة الطبقات",
        "بنية مؤسسية قابلة للتوسع",
      ],
      link: "https://www.adepti.co",
      image: "/assets/projects/adepti.png",
      accent: "primary",
    },
    {
      title: "Taheiya",
      description:
        "منصة SaaS شاملة للمحاسبين. هندست نظام اتصال قوي في الوقت الفعلي ودعم كامل للغة العربية (RTL). ابتكرت سير عمل عالي الكفاءة من Figma إلى كود.",
      tags: [
        "SaaS",
        "العمل الحر للمحاسبين",
        "اتصال في الوقت الفعلي",
        "RTL",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "React Query",
      ],
      features: [
        "اتصال في الوقت الفعلي",
        "دعم كامل لـ RTL",
        "واجهة مستخدم SaaS محسنة",
      ],
      link: "https://mohaseb.sa",
      image: "/assets/projects/taheiya.png",
      accent: "secondary",
    },
    {
      title: "Science Toonz",
      description:
        "منصة تعليمية قوية تجمع بين دروس الفيديو التفاعلية والتقييمات اللحظية المدعومة بالذكاء الاصطناعي. تم دمج OpenRouter AI لتقديم مراجعات مخصصة وإنشاء اختبارات ديناميكية.",
      tags: [
        "الذكاء الاصطناعي",
        "التعليم",
        "تفاعلي",
        "React",
        "MUI",
        "Jotai",
        "RTQuery",
      ],
      features: [
        "دروس فيديو تفاعلية",
        "تقييمات مدعومة بالذكاء الاصطناعي",
        "دمج OpenRouter",
      ],
      link: "https://sciencetoonz.com",
      image: "/assets/projects/science-toonz.png",
      accent: "tertiary",
    },
    {
      title: "تطبيق المحادثة",
      description:
        "منصة مراسلة فورية متكاملة مبنية من الصفر. هندست التواصل عبر WebSocket باستخدام Socket.IO، ونفذت مصادقة آمنة عبر JWT وGoogle OAuth، وقدمت تجربة دردشة غنية بمؤشرات الكتابة والحضور أونلاين وتاريخ تمرير لانهائي.",
      tags: [
        "الوقت الفعلي",
        "Full-Stack",
        "WebSockets",
        "Next.js",
        "TypeScript",
        "Socket.IO",
        "PostgreSQL",
        "Prisma",
      ],
      features: [
        "مراسلة فورية عبر WebSocket",
        "JWT وGoogle OAuth",
        "مؤشرات الكتابة والرسائل غير المقروءة",
      ],
      link: "https://github.com/mahmoudzanoun13/chatting-app",
      image: "/assets/projects/chatting-app.png",
      accent: "primary",
    },
  ],
  experience: [
    {
      type: "experience",
      icon: "work",
      period: "يوليو 2026 — الحاضر",
      title: "مطور واجهات أمامية",
      company: "Crazy Dolphin Diving Center",
      companyLink: "https://www.crazy-dolphin.com",
      highlights: [
        {
          text: "صيانة وتطوير ميزات لمنصة ترفيهية إنتاجية على الإنترنت.",
          focus: "منصة ترفيهية إنتاجية",
        },
        {
          text: "تحسينات في واجهة المستخدم وإصلاح الأخطاء في بيئة حية.",
          focus: "تحسينات في واجهة المستخدم وإصلاح الأخطاء",
        },
        {
          text: "العمل مع قاعدة كود jQuery قديمة في الإنتاج.",
          focus: "قاعدة كود jQuery قديمة",
        },
      ],
      tech: ["jQuery", "JavaScript", "HTML5", "CSS3"],
      image: "/assets/experience-visual.png",
    },
    {
      type: "experience",
      icon: "work",
      period: "مايو 2023 — يونيو 2026",
      title: "مطور واجهات أمامية",
      company: "GenTech",
      companyLink: "https://gen-tech.io",
      highlights: [
        {
          text: "قيادة تطوير 4 تطبيقات إنتاجية من المخطط المعماري إلى النشر.",
          focus: "4 تطبيقات إنتاجية",
        },
        {
          text: "هندسة أنظمة دعم متعددة اللغات للوصول إلى السوق العالمية.",
          focus: "أنظمة دعم متعددة اللغات",
        },
        {
          text: "بناء مكتبات مكونات داخلية قوية تُستخدم عبر جميع المنتجات الرقمية للشركة.",
          focus: "مكتبات مكونات داخلية",
        },
        {
          text: "المساهمة في 4 مشاريع أخرى، بتقديم ميزات ومكونات رئيسية",
          focus: "4 مشاريع أخرى",
        },
        {
          text: "تنفيذ تحليل ثابت للكود باستخدام SonarQube لتحسين جودة الكود عبر المشاريع.",
          focus: "SonarQube"
        },
      ],
      tech: ["React", "Next.js", "System Design", "Tailwind CSS", "TypeScript"],
      image: "/assets/experience-visual.png",
    },
    {
      type: "experience",
      icon: "school",
      period: "أبريل 2023 — مايو 2023",
      title: "مدرب واجهات أمامية",
      company: "Creativa Innovation Hub",
      companyLink: "https://creativa.gov.eg",
      highlights: [
        {
          text: "تدريس React.js للمبتدئين من خلفيات غير تقنية.",
          focus: "React.js للمبتدئين",
        },
        {
          text: "قيادة مشروع التخرج من التخطيط حتى التسليم.",
          focus: "مشروع التخرج",
        },
      ],
      tech: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      type: "education",
      icon: "school",
      period: "سبتمبر 2021 — نوفمبر 2021",
      title: "تطوير الويب",
      company: "أكاديمية ZTM",
      description:
        "انغماس متقدم في نماذج الـ Full-Stack، مع التركيز على MERN وهندسة واجهات المستخدم الحديثة. إتقان إدارة الحالة، تكامل الواجهة الخلفية، وأنماط التصميم المتجاوب.",
      metrics: [
        { label: "تم إكمال الشهادة", icon: "verified" },
        { label: "خريج من الدرجة الأولى", icon: "grade" },
      ],
      visual: [
        {
          type: "icon-box",
          icon: "workspace_premium",
          color: "from-secondary/20 to-secondary/5",
          iconColor: "text-secondary",
        },
      ],
    },
    {
      type: "education",
      icon: "history_edu",
      period: "أكتوبر 2020 — فبراير 2021",
      title: "علوم الحاسب",
      company: "جامعة هارفارد (CS50)",
      description:
        "بناء أساس الفهم المنطقي. التعمق في إدارة الذاكرة، الخوارزميات، وهياكل البيانات باستخدام C و Python و SQL. تطوير نهج صارم لحل المشكلات.",
      stats: [
        { label: "التعقيد", value: "O(log n)" },
        { label: "إتقان المنطق", value: "100%" },
      ],
    },
  ],
  recommendations: [
    {
      id: "https://www.linkedin.com/in/omar-mohammed-el-gharieb",
      name: "عمر محمد الغريب",
      role: "مدير مشاريع أول | مدير تسليم | مدير منتجات أول ← رئيس قسم المنتجات | التقنية المالية و SaaS | تحويل التسليم المعقد إلى منتجات قابلة للتوسع | العمل عن بُعد",
      relationship: "قام بإدارة محمود مباشرة",
      relationshipType: "leadership",
      text: "يسعدني أن أوصي بمحمود زنون كـ مطور واجهات أمامية متميز. خلال فترة عملنا معاً في شركة Gentech، أظهر باستمرار التزاماً قوياً بتقديم حلول عالية الجودة ومجموعة إيجابية ومثيرة للاهتمام من المهارات التقنية.\n\nيمتلك محمود عيناً ثاقبة للتفاصيل وقدرة فطرية على تحويل المتطلبات المعقدة إلى واجهات مستخدم سلسة وجذابة بصرياً. مهاراته في تقنيات مثل HTML و CSS و JavaScript، بالإضافة إلى أطر العمل مثل React و Next.js، مكنت فريقنا من تنفيذ المشاريع بكفاءة والوفاء بالمواعيد النهائية المحددة.\n\nبالإضافة إلى خبرته التقنية، يُعد محمود متعاوناً ومبادراً. شارك بفعالية في المناقشات الجماعية، وتقديم رؤى قيمة وتعزيز بيئة عمل إيجابية. جعلت مهارات التواصل القوية لديه من السهل على أعضاء الفريق وأصحاب المصلحة التوافق على أهداف المشروع.\n\nأوصي بمحمود بشدة لأي فرصة يمكن فيها استغلال مهاراته في تطوير الواجهات الأمامية وروحه التعاونية. أنا واثق من أنه سيكون إضافة قيمة لأي فريق.",
      avatarInitials: "ع م"
    },
    {
      id: "https://www.linkedin.com/in/omar-abo-el-wafa-967621b3",
      name: "عمر أبو الوفا",
      role: "قائد تقني في فودافون",
      relationship: "قام بإدارة محمود مباشرة",
      relationshipType: "leadership",
      text: "محمود أحد هؤلاء المطورين المجتهدين والمحترفين الذين ترغب دائماً في وجودهم ضمن فريقك.",
      avatarInitials: "ع أ"
    },
    {
      id: "https://www.linkedin.com/in/khaled-yahia",
      name: "خالد يحيى",
      role: "قائد فريق الواجهات الأمامية في GenTech",
      relationship: "قام بإدارة محمود مباشرة",
      relationshipType: "leadership",
      text: "كان لي الشرف بالعمل عن قرب مع محمود في العديد من مشاريع الويب ذات التأثير العالي، وأستطيع أن أقول بثقة إنه أحد أكثر مطوري الواجهات الأمامية موهبة الذين تعاونت معهم.\n\nيمتلك محمود اهتماماً استثنائياً بالتفاصيل وواجهات متجاوبة لا تبدو مذهلة فحسب، بل توفر أيضاً تجارب مستخدم سلسة عبر جميع الأجهزة. فهمه العميق لأطر عمل JavaScript الحديثة (خاصة React) و HTML5 و CSS3 وأفضل ممارسات سهولة الوصول مكنه من بناء تطبيقات قابلة للتوسع والصيانة وعالية الأداء.\n\nبعيداً عن المهارات التقنية، محمود مبادر في حل المشكلات، ومُتواصل ممتاز، ومتحمس دائماً لمشاركة المعرفة مع زملائه. يشارك بفعالية في مراجعات الكود، ويدعم التطوير الموجه بتجربة المستخدم، ويواكب أحدث التوجهات في المجال مما يحسن باستمرار من عمله ومخرجات الفريق ككل.\n\nأي فريق سيكون محظوظاً بانضمام محمود إليه. أوصي به بشدة لأي دور في تطوير الواجهات الأمامية حيث تهم الجودة والتعاون والابتكار.",
      avatarInitials: "خ ي"
    },
    {
      id: "https://www.linkedin.com/in/amr-hussien2025",
      name: "عمرو حسين",
      role: "محلل أعمال | مالك المنتج",
      relationship: "قام بإدارة محمود مباشرة",
      relationshipType: "leadership",
      text: "سعدت بالعمل مع محمود في مشروعين مختلفين، وهو يمثل بحق معنى الالتزام والاحترافية.\n\nمحمود حريص دائماً على التعلم وتطوير نفسه وتحدي قدراته. يبحث باستمرار عن حلول أفضل ويمتلك شعوراً قوياً بالمسؤولية تجاه العمل الذي يقدمه. عقليته تتجاوز مجرد التنفيذ؛ فهو يفهم السياق العام للمشروع ويهدف دائماً إلى إضافة قيمة حقيقية.\n\nمن ناحية التواصل والتعاون، محمود محترف للغاية وواضح ويسهل العمل معه. إنه واحد من أقوى مطوري الواجهات الأمامية الذين عملت معهم، حيث يجمع بين المهارات التقنية القوية والعقلية الموجهة نحو النمو.\n\nأوصي بمحمود بشدة لأي فريق يبحث عن مطور واجهات أمامية موثوق وماهر ومتحمس.",
      avatarInitials: "ع ح"
    },
    {
      id: "https://www.linkedin.com/in/ahmed-el-sayed-saleh",
      name: "أحمد السيد صالح",
      role: "مطور واجهات أمامية / مطور ووردبريس / مهندس أنظمة إدارة المحتوى",
      relationship: "عمل مع محمود ولكن في فرق مختلفة",
      relationshipType: "collaboration",
      text: "كان من دواعي سروري العمل مع محمود زنون. يجمع بين المهارات العملية القوية والمستوى العالي من الاحترافية والنزاهة. يمتلك محمود مهارات تواصل ممتازة، ويعمل بشكل جيد للغاية ضمن الفريق، ويسعى دائماً لتقديم نتائج عالية الجودة في الوقت المحدد. أنا على ثقة من أن أي فريق أو مؤسسة ينضم إليها ستستفيد كثيراً من خبرته وإيجابيته وتفانيه.",
      avatarInitials: "أ ا"
    },
    {
      id: "https://www.linkedin.com/in/amrzaher",
      name: "عمرو زاهر",
      role: "مدير موارد بشرية متفرغ لعلاقات الموظفين وإدارة الأداء",
      relationship: "عمل مع محمود ولكن في فرق مختلفة",
      relationshipType: "collaboration",
      text: "أظهر محمود باستمرار مهارات قوية في بناء واجهات نظيفة ومتجاوبة وسهلة الاستخدام. لديه فهم صلب لتقنيات الواجهة الأمامية الحديثة ويهتم دائماً بالأداء وسهولة الاستخدام والتفاصيل. إنه موثوق ومبادر ويسهل العمل معه، يتواصل بوضوح ويتقبل الملاحظات بإيجابية ويهدف دائماً لتسليم عمل عال الجودة في الوقت المحدد.",
      avatarInitials: "ع ز"
    },
    {
      id: "https://www.linkedin.com/in/muhammad-bendary46",
      name: "محمد بنداري",
      role: "مصمم واجهات وتجربة المستخدم | B2B SaaS • تطبيقات الويب والموبايل في GenTech",
      relationship: "عمل مع محمود في نفس الفريق",
      relationshipType: "collaboration",
      text: "سررت بالعمل مع محمود، وهو مطور واجهات أمامية ماهر للغاية وموثوق. لديه خبرة قوية مع React وتقنيات الواجهة الأمامية الحديثة، ويدعم دائماً واجهات نظيفة ومنظمة ومتجاوبة.\n\nمحمود مبادر ويهتم بالتفاصيل ويسهل التعاون معه. يتواصل بوضوح، ويفهم المتطلبات بسرعة، ويساهم باستمرار بأفكار قيمة لتحسين المنتج النهائي.\n\nكانت التجربة معه رائعة، وأوصي بمحمود بثقة لأي دور في تطوير الواجهات الأمامية أو React.",
      avatarInitials: "م ب"
    },
    {
      id: "https://www.linkedin.com/in/waleed-adel-377582246",
      name: "وليد عادل",
      role: "مالك منتج أجايل | أنظمة إدارة التعلم ومنصات SaaS | تحويل المتطلبات إلى إصدارات عالية التأثير",
      relationship: "قام بإدارة محمود مباشرة",
      relationshipType: "leadership",
      text: "بصفتي مالك المنتج الذي عمل مباشرة مع محمود، أستطيع أن أقول بثقة إنه منضبط ومقترن بالالتزام، ويسعى باستمرار لتجاوز التوقعات لضمان أعلى جودة في العمل. أوصي به من كل قلبي.",
      avatarInitials: "و ع"
    },
    {
      id: "https://www.linkedin.com/in/abdulrahman-mahmoud-elsobky",
      name: "عبد الرحمن محمود",
      role: "مطور فول ستاك | React | Next.js | Node.js | NestJS | بناء منصات SaaS متعددة المستأجرين",
      relationship: "عمل مع محمود في نفس الفريق",
      relationshipType: "collaboration",
      text: "كان من دواعي سروري العمل جنباً إلى جنب مع محمود كزميل مطور واجهات أمامية في GEN-TECH، حيث كانت مهاراته التقنية وسلوكه المهني متميزين باستمرار. يمتلك محمود تمكناً قوياً من React.js و Next.js، وكان التزامه بكتابة كود دقيق ونظيف واضحاً دائماً.\n\nبعيداً عن قدراته التقنية، فإن ما يميز محمود هو أخلاقيات العمل الاستثنائية وروحه التعاونية. كان كريماً باستمرار بمعرفته، وداعماً لزملائه في تجاوز التحديات، ومساهماً حقيقياً في إيجاد بيئة عمل إيجابية ومثمرة. ناهيك عن نزاهته وتفانيه في تقديم عمل عالي الجودة مما جعله عضواً ذا قيمة كبيرة لفريقنا.\n\nأقدم أعلى توصياتي لمحمود لأي مؤسسة تبحث عن مطور واجهات أمامية يتفوق تقنياً ويعزز قوة الفريق من حوله.",
      avatarInitials: "ع م"
    },
    {
      id: "https://www.linkedin.com/in/ahmed-tayee-a28900243",
      name: "أحمد طايع",
      role: "اختبار برمجيات آلي | ISTQB CTFL v4.0 | مختبر أجايل | محلل أعمال",
      relationship: "عمل مع محمود في نفس الفريق",
      relationshipType: "collaboration",
      text: "عملت بشكل وثيق مع محمود في Gentech، وكان دائماً رائعاً في العمل معه. كمطور واجهات أمامية، كان يهتم بجودة عمله وسريع الاستجابة للملاحظات والأخطاء.\n\nمن منظور مختبر جودة، جعل ذلك التعاون سلسًا وبدون أي ضغوط. تواصل بوضوح، وظل عملياً، وركز على إنجاز الأمور بالطريقة الصحيحة. بشكل عام، هو زميل موثوق وسلس في التعامل ومن أفضل الزملاء.\n\nبالتأكيد أوصي به وسأكون سعيداً بالعمل معه مرة أخرى.",
      avatarInitials: "أ ط"
    },
    {
      id: "https://www.linkedin.com/in/kareemyasser8",
      name: "كريم ياسر",
      role: "مطور واجهات أمامية في GenTech",
      relationship: "عمل مع محمود في نفس الفريق",
      relationshipType: "collaboration",
      text: "حظيت بفرصة العمل إلى جانب محمود في العديد من مشاريع الواجهة الأمامية، حيث أظهر باستمرار مهارات تقنية قوية وفهماً صلباً لتطوير الواجهات الحديثة. كزميل، كان متعاوناً وموثوقاً ومستعداً دائماً للمساهمة بأفكار تحسن كلاً من تجربة المستخدم وجودة الكود.",
      avatarInitials: "ك ي"
    },
    {
      id: "https://www.linkedin.com/in/omniaosman",
      name: "أمنية عثمان",
      role: "مطورة واجهات خلفية (Django | NestJS)",
      relationship: "عملت مع محمود ولكن في فرق مختلفة",
      relationshipType: "collaboration",
      text: "أتيحت لي الفرصة للعمل معه، وكان مطور واجهات أمامية متعاوناً وموثوقاً. عمل بشكل جيد داخل الفريق، وتواصل بوضوح، وكان دائماً منفتحاً للتعلم والملاحظات.\n\nأظهر فهماً جيداً لأساسيات الواجهة الأمامية وبذل جهداً حقيقياً لتطوير مهاراته. مكنته إيجابيته ورغبته في دعم الآخرين من جعل التعاون سلسًا ومثمراً.\n\nقدرت العمل معه وأعتقد أن لديه إمكانيات قوية للنمو كمطور واجهات أمامية.",
      avatarInitials: "أ ع"
    },
    {
      id: "https://www.linkedin.com/in/nehal-salah-8a17211b3",
      name: "نهال صلاح",
      role: "مالكة منتج | محللة أعمال",
      relationship: "عملت مع محمود في نفس الفريق",
      relationshipType: "collaboration",
      text: "عملت مع محمود كمالكة منتج، وكان التعاون معه ممتعاً للغاية. محمود مطور واجهات أمامية منضبط للغاية ويهتم بشدة بالتفاصيل ولديه التزام واضح بتسليم عمل عالي الجودة في الوقت المحدد. إنه موثوق ومبادر ويحافظ على اتجاه إيجابي ومحترف طوال المشروع. أوصي به بكل سرور لأي فريق يبحث عن مطور واجهات أمامية ماهر وموثوق.",
      avatarInitials: "ن ص"
    },
    {
      id: "https://www.linkedin.com/in/zeyadhekal",
      name: "زياد هيكل",
      role: "قائد هندسة البرمجيات في BDuro",
      relationship: "عمل مع محمود ولكن في فرق مختلفة",
      relationshipType: "collaboration",
      text: "كان محمود من أوائل الأشخاص الذين اقترحوا وبحثوا في أدوات الذكاء الاصطناعي لتعزيز الإنتاجية وتسريع عملية تحويل Figma إلى كود، مما اختصر الوقت والتكلفة الضائعين غير الضروريين.\nإنه مجتهد وكان من الرائع وجوده في الفريق.",
      avatarInitials: "ز ه"
    },
  ]
};

export const getPortfolioData = (locale: string): Readonly<PortfolioData> => {
  return locale === "ar" ? AR_PORTFOLIO_DATA : EN_PORTFOLIO_DATA;
};

export const CONTACT_INFO = [
  {
    label: "Email",
    value: "mahmoudzanoun35@yahoo.com",
    icon: "mail",
    link: "mailto:mahmoudzanoun35@yahoo.com",
  },
  {
    label: "Phone & WhatsApp",
    value: "+201064349707",
    icon: "chat",
    link: "https://wa.me/201064349707",
  },
  {
    label: "Location",
    value: "Cairo, Egypt",
    icon: "location_on",
    link: "#",
  },
] as const;

export const CORE_TECHS = [
  { label: "React", priority: true },
  { label: "Next.js", priority: true },
  { label: "TypeScript", priority: false },
  { label: "Tailwind CSS", priority: false },
  { label: "AI Tools Integration", priority: true },
  { label: "Zustand", priority: false },
] as const;
