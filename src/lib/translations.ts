export type Language = "en" | "ar";

type TranslationSchema = {
  nav: { about: string; solutions: string; markets: string; contact: string; contactUs: string };
  hero: { badge: string; titleLine1: string; titleLine2: string; subtitle: string };
  about: { sectionTitle: string; heading: string; p1Bold: string; p1Text: string; p2: string; p3: string };
  solutions: {
    title: string; subtitle: string;
    ventureBuilding: string; ventureBuildingDesc: string;
    commercePlatform: string; commercePlatformDesc: string;
    edgeTechAI: string; edgeTechAIDesc: string;
    operationsRisk: string; operationsRiskDesc: string;
  };
  stats: { stat1: string; stat2: string; stat3: string };
  verticals: {
    title: string; subtitle: string;
    successPay: string; successPayDesc: string;
    successOps: string; successOpsDesc: string;
    successShip: string; successShipDesc: string;
    successDev: string; successDevDesc: string;
  };
  contact: {
    titleLine1: string; titleLine2: string; subtitle: string;
    fullName: string; email: string; company: string; message: string;
    fullNamePlaceholder: string; emailPlaceholder: string;
    companyPlaceholder: string; messagePlaceholder: string; send: string;
    sending: string; successMessage: string; errorGeneric: string;
  };
  footer: {
    description: string; exploreNow: string;
    aboutUs: string; jobs: string; blog: string; press: string;
    faq: string; careers: string; contactLink: string;
    privacyPolicy: string; terms: string; copyright: string;
  };
};

export type Translations = TranslationSchema;

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      about: "About",
      solutions: "Solutions",
      markets: "Markets",
      contact: "Contact",
      contactUs: "Contact Us",
    },
    hero: {
      badge: "Empowering UAE Digital Commerce",
      titleLine1: "Building commerce",
      titleLine2: "infrastructure for UAE markets.",
      subtitle:
        "An Emirati venture builder creating payment-ready, compliance-first commerce platforms for national and vertical markets.",
    },
    about: {
      sectionTitle: "About us",
      heading:
        "We build world-class commerce platforms for UAE markets and events.",
      p1Bold: "We\u2019re a tight-knit Emirati",
      p1Text:
        " venture builder that creates, funds and operates payment-ready commerce ventures.",
      p2: "We combine product, payments and operations so markets, festivals and high-value occasions can run on secure, reconciled rails \u2014 from merchant onboarding to payout.",
      p3: "We bring practical, operator DNA to national scale: we design marketplace logic, embed SuccessPay for PSP-agnostic routing and split payments, and run the operational systems that keep commerce flowing. Our deployments are purpose-built for heritage events, artisan markets, jewelry rental and other verticals where trust, compliance and high-value flows matter most.",
    },
    solutions: {
      title: "Core Solutions",
      subtitle:
        "Venture building, commerce platform, SuccessPay and operations & risk.",
      ventureBuilding: "Venture building",
      ventureBuildingDesc:
        "Creating, funding and operating structured commerce ventures \u2014 not just selling software, but launching businesses that run and scale.",
      commercePlatform: "Commerce platform",
      commercePlatformDesc:
        "A configurable, API-first marketplace engine for listings, booking, vertical workflows and customer-facing web/mobile experiences.",
      edgeTechAI: "Edge Tech & AI",
      edgeTechAIDesc:
        "AI agents, data pipelines, and AI tools for risk, fraud, and compliance. AI agents, data pipelines, and AI tools for risk, fraud, and compliance.",
      operationsRisk: "Operations & Risk",
      operationsRiskDesc:
        "Merchant onboarding and KYC, operational monitoring, transaction-level evidence, chargeback defense, segmentation and dashboards.",
    },
    stats: {
      stat1: "Faster merchant onboarding",
      stat2: "Lower manual reconciliation",
      stat3: "Revenue leakage from cash",
    },
    verticals: {
      title: "Platform & Success Suite",
      subtitle:
        "API-first marketplace engine, embedded payments and operational tooling for national-scale commerce",
      successPay: "SuccessPay",
      successPayDesc:
        "Embedded, PSP-agnostic payment orchestration \u2014 split payments, 3DS2, reconciliation.",
      successOps: "SuccessOps",
      successOpsDesc:
        "Merchant onboarding and KYC, operational monitoring, segmentation and dashboards.",
      successShip: "SuccessShip",
      successShipDesc:
        "Logistics and fulfillment orchestration for national-scale commerce.",
      successDev: "SuccessDev",
      successDevDesc:
        "API-first marketplace engine, embedded payments and operational tooling.",
    },
    contact: {
      titleLine1: "Ready to transform",
      titleLine2: "your commerce?",
      subtitle:
        "Fill out the form below and our team will get back to you within 24 hours.",
      fullName: "Full Name",
      email: "Email Address",
      company: "Company / Event Name",
      message: "Message",
      fullNamePlaceholder: "Khalifa Salem",
      emailPlaceholder: "khalifa@company.ae",
      companyPlaceholder: "Department of Tourism & Culture",
      messagePlaceholder: "How can we help you?",
      send: "Send Message",
      sending: "Sending...",
      successMessage: "Your message has been sent successfully. We'll get back to you soon!",
      errorGeneric: "Something went wrong. Please try again later.",
    },
    footer: {
      description:
        "UAE\u2019s leading commerce infrastructure for specialized markets and large-scale events.",
      exploreNow: "Explore Now",
      aboutUs: "About us",
      jobs: "Jobs",
      blog: "Blog",
      press: "Press",
      faq: "FAQ",
      careers: "Careers",
      contactLink: "Contact",
      privacyPolicy: "Privacy Policy",
      terms: "Terms & condition",
      copyright: "\u00A92026, Success Factory. All Rights Reserved",
    },
  },
  ar: {
    nav: {
      about: "من نحن",
      solutions: "الحلول",
      markets: "الأسواق",
      contact: "تواصل معنا",
      contactUs: "ابدأ معنا",
    },
    hero: {
      badge: "نمكّن التجارة الرقمية في الإمارات",
      titleLine1: "نبني الأساس الذي تقوم عليه",
      titleLine2: "أسواق الإمارات.",
      subtitle:
        "شركة إماراتية تبني مستقبل التجارة الرقمية في الإمارات - منصات متكاملة، مدفوعات موثوقة، وامتثال تام من اليوم الأول.",
    },
    about: {
      sectionTitle: "من نحن",
      heading:
        "نبني منصات تجارية من الطراز العالمي - لأسواق الإمارات وفعاليات��ا الكبرى.",
      p1Bold: "مصنع النجاح فريق إماراتي متكامل",
      p1Text:
        " - نؤسّس المشاريع التجارية، نبني قوانينها، ونشغّلها بحلول دفع جاهزة من اليوم الأول.",
      p2: "ندمج المنتج والمدفوعات والعمليات في منظومة واحدة - لتعمل الأسواق والمهرجانات والمناسبات عالية القيمة على بنية آمنة وموثوقة، من لحظة تسجيل التاجر حتى صرف الأرباح.",
      p3: "نحمل خبرة تشغيلية حقيقية على النطاق الوطني. نصمّم منطق السوق الرقمي، وندمج مصنع الدفع لتوجيه المعاملات وتقسيمها بشكل مستقل عن مزود الخدمة.",
    },
    solutions: {
      title: "الحلول الأساسية",
      subtitle:
        "بناء المشاريع، منصة التجارة، SuccessPay والعمليات وإدارة المخاطر.",
      ventureBuilding: "بناء المشاريع",
      ventureBuildingDesc:
        "لا نبيع برمجيات - نبني مشاريع. نؤسّسها، نموّلها، ونشغّلها بهياكل واضحة وقابلة للتوسع.",
      commercePlatform: "منصة التجارة",
      commercePlatformDesc:
        "محرك سوق رقمي مرن قائم على بنية API-first يدعم الإدراج والحجز وتدفّقات العمل القطاعية.",
      edgeTechAI: "الذكاء الاصطناعي والتقنيات المتقدمة",
      edgeTechAIDesc:
        "وكلاء ذكاء اصطناعي ومسارات بيانات متقدمة لاكتشاف المخاطر ومنع الاحتيال.",
      operationsRisk: "العمليات وإدارة المخاطر",
      operationsRiskDesc:
        "تأهيل التجار والتحقق من الهوية ومراقبة العمليات مع لوحات مؤشرات.",
    },
    stats: {
      stat1: "تأهيل أسرع للتجار",
      stat2: "تسوية آلية - صفر تدخل يدوي",
      stat3: "لا تسرب في الإيرادات",
    },
    verticals: {
      title: "المنصة وحزمة النجاح",
      subtitle:
        "محرك سوق يعتمد على API، مدفوعات مدمجة وأدوات تشغيلية للتجارة على المستوى الوطني",
      successPay: "SuccessPay",
      successPayDesc:
        "تنسيق مدفوعات مدمج ومستقل عن مزودي الدفع \u2014 مدفوعات مقسمة، 3DS2، تسوية.",
      successOps: "SuccessOps",
      successOpsDesc:
        "تسجيل التجار والتحقق من الهوية، المراقبة التشغيلية، التقسيم ولوحات المعلومات.",
      successShip: "SuccessShip",
      successShipDesc:
        "تنسيق الخدمات اللوجستية والتوصيل للتجارة على المستوى الوطني.",
      successDev: "SuccessDev",
      successDevDesc:
        "محرك سوق يعتمد على API، مدفوعات مدمجة وأدوات تشغيلية.",
    },
    contact: {
      titleLine1: "هل أنت مستعد لبناء",
      titleLine2: "شيء مختلف؟",
      subtitle:
        "شاركنا فكرتك أو مشروعك، وسيتواصل معك فريق مصنع النجاح خلال 24 ساعة.",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      company: "اسم الشركة أو الفعالية",
      message: "رسالتك",
      fullNamePlaceholder: "خليفة سالم",
      emailPlaceholder: "khalifa@company.ae",
      companyPlaceholder: "دائرة السياحة والثقافة",
      messagePlaceholder: "كيف يمكننا مساعدتك؟",
      send: "أرسل رسالتك",
      sending: "جارٍ الإرسال...",
      successMessage: "تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا!",
      errorGeneric: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.",
    },
    footer: {
      description:
        "البنية التحتية التجارية الأولى في الإمارات - لأسواق متخصصة وفعاليات استثنائية.",
      exploreNow: "استكشف الآن",
      aboutUs: "من نحن",
      jobs: "الوظائف",
      blog: "المدونة",
      press: "الإعلام",
      faq: "الأسئلة الشائعة",
      careers: "انضم إلينا",
      contactLink: "تواصل معنا",
      privacyPolicy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      copyright: "\u00A92026، مصنع النجاح. جميع الحقوق محفوظة.",
    },
  },
};
