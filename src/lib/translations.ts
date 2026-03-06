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
      about: "\u062D\u0648\u0644",
      solutions: "\u0627\u0644\u062D\u0644\u0648\u0644",
      markets: "\u0627\u0644\u0623\u0633\u0648\u0627\u0642",
      contact: "\u062A\u0648\u0627\u0635\u0644",
      contactUs: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
    },
    hero: {
      badge:
        "\u062A\u0645\u0643\u064A\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0641\u064A \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A",
      titleLine1:
        "\u0628\u0646\u0627\u0621 \u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u062D\u062A\u064A\u0629 \u0644\u0644\u062A\u062C\u0627\u0631\u0629",
      titleLine2:
        "\u0641\u064A \u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A.",
      subtitle:
        "\u0634\u0631\u0643\u0629 \u0625\u0645\u0627\u0631\u0627\u062A\u064A\u0629 \u062A\u0628\u0646\u064A \u0645\u0646\u0635\u0627\u062A \u062A\u062C\u0627\u0631\u0629 \u0631\u0642\u0645\u064A\u0629 \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u062F\u0641\u0639 \u0648\u0645\u062A\u0648\u0627\u0641\u0642\u0629 \u0645\u0639 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0644\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u0648\u0637\u0646\u064A\u0629 \u0648\u0627\u0644\u0642\u0637\u0627\u0639\u064A\u0629.",
    },
    about: {
      sectionTitle: "\u0645\u0646 \u0646\u062D\u0646",
      heading:
        "\u0646\u0628\u0646\u064A \u0645\u0646\u0635\u0627\u062A \u062A\u062C\u0627\u0631\u0629 \u0639\u0627\u0644\u0645\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0644\u0623\u0633\u0648\u0627\u0642 \u0648\u0641\u0639\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A.",
      p1Bold:
        "\u0646\u062D\u0646 \u0641\u0631\u064A\u0642 \u0625\u0645\u0627\u0631\u0627\u062A\u064A \u0645\u062A\u0645\u0627\u0633\u0643",
      p1Text:
        " \u0646\u0628\u0646\u064A \u0648\u0646\u0645\u0648\u0651\u0644 \u0648\u0646\u0634\u063A\u0651\u0644 \u0645\u0634\u0627\u0631\u064A\u0639 \u062A\u062C\u0627\u0631\u064A\u0629 \u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u062F\u0641\u0639.",
      p2: "\u0646\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u062D\u062A\u0649 \u062A\u0639\u0645\u0644 \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0648\u0627\u0644\u0645\u0647\u0631\u062C\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0627\u062A \u0627\u0644\u0643\u0628\u0631\u0649 \u0639\u0644\u0649 \u0642\u0646\u0648\u0627\u062A \u0622\u0645\u0646\u0629 \u0648\u0645\u064F\u0633\u0648\u0651\u0627\u0629 \u2014 \u0645\u0646 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062A\u062C\u0627\u0631 \u0625\u0644\u0649 \u0635\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0627\u062A.",
      p3: "\u0646\u062C\u0644\u0628 \u0627\u0644\u062E\u0628\u0631\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0648\u0637\u0646\u064A: \u0646\u0635\u0645\u0645 \u0645\u0646\u0637\u0642 \u0627\u0644\u0633\u0648\u0642\u060C \u0648\u0646\u062F\u0645\u062C SuccessPay \u0644\u0644\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0645\u0633\u062A\u0642\u0644 \u0639\u0646 \u0645\u0632\u0648\u062F\u064A \u0627\u0644\u062F\u0641\u0639 \u0648\u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0627\u0644\u0645\u0642\u0633\u0645\u0629\u060C \u0648\u0646\u062F\u064A\u0631 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062A\u062F\u0641\u0642 \u0627\u0644\u062A\u062C\u0627\u0631\u0629. \u0639\u0645\u0644\u064A\u0627\u062A \u0646\u0634\u0631\u0646\u0627 \u0645\u0635\u0645\u0645\u0629 \u062E\u0635\u064A\u0635\u0627\u064B \u0644\u0641\u0639\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u062A\u0631\u0627\u062B \u0648\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u062D\u0631\u0641\u064A\u064A\u0646 \u0648\u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0645\u062C\u0648\u0647\u0631\u0627\u062A \u0648\u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649 \u062D\u064A\u062B \u0627\u0644\u062B\u0642\u0629 \u0648\u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0648\u0627\u0644\u062A\u062F\u0641\u0642\u0627\u062A \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0642\u064A\u0645\u0629 \u0647\u064A \u0627\u0644\u0623\u0647\u0645.",
    },
    solutions: {
      title:
        "\u0627\u0644\u062D\u0644\u0648\u0644 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",
      subtitle:
        "\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639\u060C \u0645\u0646\u0635\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u0629\u060C SuccessPay \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0627\u0637\u0631.",
      ventureBuilding:
        "\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
      ventureBuildingDesc:
        "\u0625\u0646\u0634\u0627\u0621 \u0648\u062A\u0645\u0648\u064A\u0644 \u0648\u062A\u0634\u063A\u064A\u0644 \u0645\u0634\u0627\u0631\u064A\u0639 \u062A\u062C\u0627\u0631\u064A\u0629 \u0645\u0646\u0638\u0645\u0629 \u2014 \u0644\u064A\u0633 \u0645\u062C\u0631\u062F \u0628\u064A\u0639 \u0628\u0631\u0645\u062C\u064A\u0627\u062A\u060C \u0628\u0644 \u0625\u0637\u0644\u0627\u0642 \u0623\u0639\u0645\u0627\u0644 \u062A\u0639\u0645\u0644 \u0648\u062A\u062A\u0648\u0633\u0639.",
      commercePlatform:
        "\u0645\u0646\u0635\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u0629",
      commercePlatformDesc:
        "\u0645\u062D\u0631\u0643 \u0633\u0648\u0642 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0643\u0648\u064A\u0646 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 API \u0644\u0644\u0642\u0648\u0627\u0626\u0645 \u0648\u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A \u0648\u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0642\u0637\u0627\u0639\u064A \u0648\u062A\u062C\u0627\u0631\u0628 \u0627\u0644\u0648\u064A\u0628 \u0648\u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644.",
      edgeTechAI:
        "\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
      edgeTechAIDesc:
        "\u0648\u0643\u0644\u0627\u0621 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0623\u0646\u0627\u0628\u064A\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0623\u062F\u0648\u0627\u062A \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u0644\u0645\u062E\u0627\u0637\u0631 \u0648\u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0644 \u0648\u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644.",
      operationsRisk:
        "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0627\u0637\u0631",
      operationsRiskDesc:
        "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062A\u062C\u0627\u0631 \u0648\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629\u060C \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629\u060C \u0627\u0644\u0623\u062F\u0644\u0629 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A\u060C \u0627\u0644\u062F\u0641\u0627\u0639 \u0639\u0646 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0627\u062A\u060C \u0627\u0644\u062A\u0642\u0633\u064A\u0645 \u0648\u0644\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A.",
    },
    stats: {
      stat1:
        "\u062A\u0633\u062C\u064A\u0644 \u062A\u062C\u0627\u0631 \u0623\u0633\u0631\u0639",
      stat2:
        "\u062A\u0633\u0648\u064A\u0629 \u064A\u062F\u0648\u064A\u0629 \u0623\u0642\u0644",
      stat3:
        "\u062A\u0633\u0631\u0628 \u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0645\u0646 \u0627\u0644\u0646\u0642\u062F",
    },
    verticals: {
      title:
        "\u0627\u0644\u0645\u0646\u0635\u0629 \u0648\u062D\u0632\u0645\u0629 \u0627\u0644\u0646\u062C\u0627\u062D",
      subtitle:
        "\u0645\u062D\u0631\u0643 \u0633\u0648\u0642 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 API\u060C \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0645\u062F\u0645\u062C\u0629 \u0648\u0623\u062F\u0648\u0627\u062A \u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0644\u0644\u062A\u062C\u0627\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0648\u0637\u0646\u064A",
      successPay: "SuccessPay",
      successPayDesc:
        "\u062A\u0646\u0633\u064A\u0642 \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0645\u062F\u0645\u062C \u0648\u0645\u0633\u062A\u0642\u0644 \u0639\u0646 \u0645\u0632\u0648\u062F\u064A \u0627\u0644\u062F\u0641\u0639 \u2014 \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0645\u0642\u0633\u0645\u0629\u060C 3DS2\u060C \u062A\u0633\u0648\u064A\u0629.",
      successOps: "SuccessOps",
      successOpsDesc:
        "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062A\u062C\u0627\u0631 \u0648\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629\u060C \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629\u060C \u0627\u0644\u062A\u0642\u0633\u064A\u0645 \u0648\u0644\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A.",
      successShip: "SuccessShip",
      successShipDesc:
        "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0644\u0648\u062C\u0633\u062A\u064A\u0629 \u0648\u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0644\u0644\u062A\u062C\u0627\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0648\u0637\u0646\u064A.",
      successDev: "SuccessDev",
      successDevDesc:
        "\u0645\u062D\u0631\u0643 \u0633\u0648\u0642 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 API\u060C \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0645\u062F\u0645\u062C\u0629 \u0648\u0623\u062F\u0648\u0627\u062A \u062A\u0634\u063A\u064A\u0644\u064A\u0629.",
    },
    contact: {
      titleLine1:
        "\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u062A\u062D\u0648\u064A\u0644",
      titleLine2: "\u062A\u062C\u0627\u0631\u062A\u0643\u061F",
      subtitle:
        "\u0627\u0645\u0644\u0623 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0623\u062F\u0646\u0627\u0647 \u0648\u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u0631\u064A\u0642\u0646\u0627 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.",
      fullName:
        "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
      email:
        "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      company:
        "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 / \u0627\u0644\u0641\u0639\u0627\u0644\u064A\u0629",
      message: "\u0627\u0644\u0631\u0633\u0627\u0644\u0629",
      fullNamePlaceholder:
        "\u062E\u0644\u064A\u0641\u0629 \u0633\u0627\u0644\u0645",
      emailPlaceholder: "khalifa@company.ae",
      companyPlaceholder:
        "\u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u062B\u0642\u0627\u0641\u0629",
      messagePlaceholder:
        "\u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062F\u062A\u0643\u061F",
      send: "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629",
    },
    footer: {
      description:
        "\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u062D\u062A\u064A\u0629 \u0627\u0644\u0631\u0627\u0626\u062F\u0629 \u0644\u0644\u062A\u062C\u0627\u0631\u0629 \u0641\u064A \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0644\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u0645\u062A\u062E\u0635\u0635\u0629 \u0648\u0627\u0644\u0641\u0639\u0627\u0644\u064A\u0627\u062A \u0627\u0644\u0643\u0628\u0631\u0649.",
      exploreNow:
        "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0622\u0646",
      aboutUs: "\u0645\u0646 \u0646\u062D\u0646",
      jobs: "\u0648\u0638\u0627\u0626\u0641",
      blog: "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
      press: "\u0627\u0644\u0635\u062D\u0627\u0641\u0629",
      faq: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
      careers: "\u0627\u0644\u062A\u0648\u0638\u064A\u0641",
      contactLink: "\u062A\u0648\u0627\u0635\u0644",
      privacyPolicy:
        "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
      terms:
        "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645",
      copyright:
        "\u00A92026\u060C Success Factory. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629",
    },
  },
};
