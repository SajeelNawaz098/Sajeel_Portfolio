// Content taken from Sajeel's resume. Add `links` ({ live, source, caseStudy }) when you have them.
// Screenshots: put a file named `<id>.png|jpg|webp` in src/assets/projects/.
export const projects = [
  {
    id: "hms",
    name: "HMS Care",
    category: "Hospital Management System · Full-stack",
    problem:
      "A hospital runs on many connected jobs. HMS Care covers them in a five-portal, role-based system: reception, HR, accounts, pharmacy and administration, plus doctor and laboratory portals.",
    contribution:
      "Built the laboratory and doctor portals on the shared backend, the public prescription lookup, PDF reports and the analytics dashboard. Fixed routing and live-deployment bugs.",
    features: [
      "Public-facing prescription lookup",
      "Unique sale IDs (HMS-XXXXXXXX) with collision-retry logic at the database layer",
      "PDF prescriptions and patient reports with custom fonts and watermarking",
      "Analytics dashboard with stat cards, weekly sales charts and a top-doctors view",
      "Standalone Laboratory module in progress: role-based access, barcode sample tracking, auto-flagged results, billing",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "@react-pdf/renderer"],
    links: {},
  },
  {
    id: "pos-inventory",
    name: "POS Control Center & Inventory",
    category: "Point of sale · Full-stack",
    problem:
      "Sales, purchases, returns and stock in one place: a POS web app and an inventory management system sharing one backend API.",
    contribution:
      "Built the React POS Control Center and the parallel inventory system across frontend, backend and API integration, and connected the web screens to live endpoints.",
    features: [
      "PDF and Excel (SheetJS) export for reports",
      "Web screens wired to live API endpoints",
      "Reliable in-app banner feedback replacing a fragile toast system",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "SheetJS"],
    links: {},
  },
  {
    id: "shift-planner",
    name: "Shift Planner",
    category: "Shift scheduling · Mobile app",
    problem:
      "A calendar-based mobile app where users add their jobs and manage their shift schedules.",
    contribution:
      "Built the frontend of the app, including gesture handling and animations.",
    features: [
      "Calendar-based shift scheduling",
      "Add and manage multiple jobs",
      "Gestures and animations with Reanimated",
      "Subscription-related functionality",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Reanimated"],
    links: {},
  },
  {
    id: "budget-planner",
    name: "Budget Planner",
    category: "Personal finance · Mobile app on Google Play",
    problem:
      "A personal finance app for planning a budget and tracking day-to-day expenses.",
    contribution:
      "Built the app across frontend, backend and database, and shipped it to Google Play with EAS Build.",
    features: ["Budgeting and expense-tracking flows", "Published on Google Play"],
    stack: ["React Native", "Expo", "Expo Router", "NativeWind", "EAS Build"],
    links: {},
  },
];

export const moreWork = [
  {
    name: "Sea Oil Trade DMCC ERP",
    kind: "Full-stack · React, Node.js, MySQL",
    text: "Company management ERP for a Dubai-based petroleum trading company, across frontend, backend and API integration.",
  },
  {
    name: "Health Care App",
    kind: "Web & mobile · React Native, Node.js, MySQL",
    text: "A lightweight all-in-one hospital management app for web and mobile.",
  },
  {
    name: "Teamix",
    kind: "Frontend · Next.js, React Native",
    text: "Task and workspace management SaaS: role-based permission UI, Stripe pricing screen and a blog section.",
  },
  {
    name: "E-commerce Admin Dashboard",
    kind: "Frontend · React, Node.js",
    text: "Order management with status and delivery tracking, and product management with image uploads.",
  },
  {
    name: "Business websites",
    kind: "Frontend · React, Tailwind CSS, Vite / Next.js",
    text: "Responsive company sites for Sea Oil Trade DMCC and Sialkot Sportswear Industries, with scroll-reveal sections and EmailJS contact forms.",
  },
];
