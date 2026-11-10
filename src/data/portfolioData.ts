import { Project, Experience, SkillCategory, Testimonial, EditableProfileData } from '../types';

export const availablePortraits = [
  {
    id: 'studio_designer',
    label: { id: 'Studio Arsitektural (Default)', en: 'Architectural Studio (Default)' },
    url: '/src/assets/images/hero_designer_portrait_1794307610482.jpg',
  },
  {
    id: 'minimalist_desk',
    label: { id: 'Meja Kayu Minimalis', en: 'Minimalist Wooden Desk' },
    url: '/src/assets/images/hero_portrait_minimalist_1794308320475.jpg',
  },
  {
    id: 'creative_studio_light',
    label: { id: 'Studio Cahaya Alami', en: 'Natural Window Light' },
    url: '/src/assets/images/hero_portrait_male_1794308321835.jpg',
  },
];

export const availableProjectImages = [
  {
    id: 'fintech',
    label: 'Astra Financial Suite (Dark FinTech UI)',
    url: '/src/assets/images/portfolio_fintech_app_1794307611092.jpg',
  },
  {
    id: 'architecture',
    label: 'Archive Studio Monograph (Editorial Architecture)',
    url: '/src/assets/images/portfolio_ecommerce_concept_1794307611688.jpg',
  },
  {
    id: 'workspace',
    label: 'Architectra Component Lab (DevTools Canvas)',
    url: '/src/assets/images/portfolio_ai_workspace_1794307613047.jpg',
  },
  {
    id: 'health',
    label: 'Lumina Pulse (Biometric Mobile)',
    url: '/src/assets/images/portfolio_smart_health_1794307613531.jpg',
  },
  {
    id: 'branding',
    label: 'Aurelia Atelier (Stationery & Brand Typography)',
    url: '/src/assets/images/portfolio_branding_visual_1794308321989.jpg',
  },
];

export const initialProfileData: EditableProfileData = {
  name: "Kanzora Laudya",
  title: {
    id: "Mahasiswa Sistem Informasi & Calon IT Consultant",
    en: "Information Systems Student & Aspiring IT Consultant",
  },
  location: "Salem, Brebes — Cilacap, Jawa Tengah",
  availability: {
    id: "Belajar hari ini, berkembang esok hari, dan sukses di masa depan.",
    en: "Learn today, grow tomorrow, and succeed in the future.",
  },
  heroImage: "/src/assets/images/hero_designer_portrait_1794307610482.jpg",
  heroKicker: {
    id: "Portofolio Akademik & Calon IT Consultant",
    en: "Academic & Aspiring IT Consultant Portfolio",
  },
  headline: {
    id: "Belajar hari ini, berkembang esok hari, dan sukses di masa depan.",
    en: "Learn today, grow tomorrow, and succeed in the future.",
  },
  leadProse: {
    id: "Menjadi seorang IT Consultant yang profesional, mampu memberikan solusi teknologi informasi, membantu perusahaan mengembangkan sistem, serta mendukung kemajuan bisnis melalui pemanfaatan teknologi.",
    en: "Aspiring to become a professional IT Consultant, capable of delivering information technology solutions, assisting companies in developing systems, and driving business advancement through technology.",
  },
  kpis: [
    {
      value: "5 Jenjang",
      label: { id: "Riwayat Pendidikan Lengkap", en: "Educational Stages" },
    },
    {
      value: "IPA",
      label: { id: "Jurusan SMA N 01 Salem", en: "Natural Sciences Track" },
    },
    {
      value: "SI",
      label: { id: "Sistem Informasi Komputama", en: "Information Systems Major" },
    },
    {
      value: "100%",
      label: { id: "Komitmen Belajar & Berkembang", en: "Dedication to Growth" },
    },
  ],
  email: "kanzoralaudya@gmail.com",
  phone: "+62 812-8920-1120",
  githubUrl: "https://github.com/kanzora",
  linkedinUrl: "https://linkedin.com/in/kanzora",
  figmaUrl: "https://figma.com/@kanzoradesign",
  educationHistory: [
    { stage: "TK", institution: "TK Silih Asih", year: "PAUD", note: "Pendidikan Awal" },
    { stage: "SD", institution: "SD Negeri 02 Salem", year: "Sekolah Dasar", note: "Pendidikan Dasar" },
    { stage: "SMP", institution: "SMP Negeri 01 Salem", year: "Sekolah Menengah Pertama", note: "Pengembangan Diri" },
    { stage: "SMA", institution: "SMA Negeri 01 Salem", year: "Sekolah Menengah Atas", note: "Jurusan IPA — Praktikum & Berpikir Kritis" },
    { stage: "Perguruan Tinggi", institution: "Universitas Komputama Cilacap", year: "Pendidikan Tinggi", note: "Program Studi Sistem Informasi" },
  ],
  careerAspiration: {
    id: "Menjadi seorang IT Consultant yang profesional, mampu memberikan solusi teknologi informasi, membantu perusahaan mengembangkan sistem, serta mendukung kemajuan bisnis melalui pemanfaatan teknologi.",
    en: "To become a professional IT Consultant who delivers enterprise-grade IT solutions, develops scalable software systems, and accelerates business growth.",
  },
  studyReason: {
    id: "Alasan Saya memilih Program Studi Sistem Informasi: karena ingin mencoba hal baru, memperluas pengetahuan, dan memahami bagaimana teknologi dapat membantu kehidupan manusia serta dunia bisnis.",
    en: "Why I chose Information Systems: Driven by the desire to explore new horizons, expand my knowledge, and understand how technology empowers human everyday life and business transformation.",
  },
  highSchoolExperience: {
    id: "Selama SMA, saya menempuh pendidikan di jurusan IPA yang memberikan banyak pengalaman dan pengetahuan baru. Saya belajar berbagai materi, melakukan kegiatan praktikum, serta melatih kemampuan berpikir kritis dan bekerja sama. Walaupun berasal dari jurusan IPA, saya memiliki keinginan untuk mencoba hal baru dan memperluas wawasan di bidang teknologi.",
    en: "During high school, I studied Natural Sciences (IPA), which provided me with diverse learning experiences and new insights. I studied science curricula, conducted laboratory practicums, and honed my critical thinking and collaborative abilities. Despite my background in natural sciences, I harbor a strong drive to explore new fields and expand my horizon in information technology.",
  },
};

export const initialProjectsData: Project[] = [
  {
    id: "astra-financial",
    title: "Astra Financial Suite",
    subtitle: {
      id: "Platform Perbankan Digital Generasi Baru & Sistem Desain Terenkripsi",
      en: "Next-Generation Digital Banking Platform & Encrypted Design System",
    },
    category: "product",
    categoryLabel: {
      id: "Desain Produk & Sistem",
      en: "Product Design & Systems",
    },
    year: "2025",
    client: "Astra Digital Capital",
    role: "Lead Product Designer & Design Architect",
    summary: {
      id: "Platform perbankan institusional terpadu dengan visualisasi portofolio real-time, manajemen alur kas multi-rekening, dan antarmuka analitik cerdas.",
      en: "Unified institutional banking portal featuring real-time portfolio visualization, multi-account cashflow governance, and intelligent analytical interfaces.",
    },
    image: "/src/assets/images/portfolio_fintech_app_1794307611092.jpg",
    tags: ["Product Design", "Figma Design System", "React", "TypeScript", "Fintech"],
    metrics: [
      {
        value: "+54%",
        label: { id: "Kenaikan Konversi Onboarding", en: "Onboarding Conversion Uplift" },
      },
      {
        value: "-42%",
        label: { id: "Penurunan Tiket Dukungan", en: "Support Ticket Reduction" },
      },
      {
        value: "1.2M",
        label: { id: "Nasabah Aktif Bulanan", en: "Monthly Active Banking Users" },
      },
    ],
    challenge: {
      id: "Regulasi perbankan yang ketat dan tumpukan fitur lama menyebabkan alur onboarding memakan waktu 18 menit dengan rasio pentalan (drop-off) mencapai 38%. Nasabah bisnis kesulitan memantau likuiditas harian secara komprehensif.",
      en: "Strict financial compliance and legacy technical debt inflated onboarding time to 18 minutes with a 38% user drop-off. Enterprise clients struggled to extract actionable liquidity insights across accounts.",
    },
    solution: {
      id: "Merancang ulang arsitektur informasi menjadi 3 pilar: Ringkasan Likuiditas Seketika, Tindakan Cepat Terverifikasi, dan Otomasi Laporan Keuangan. Membangun 350+ komponen tokenized design system di Figma yang dipetakan 1:1 ke React.",
      en: "Restructured user architecture around three core workflows: Instant Liquidity Pulse, Verified Quick Actions, and Automated Reporting. Engineered a 350+ component tokenized library synced 1:1 between Figma and React.",
    },
    impact: {
      id: "Waktu onboarding terpangkas dari 18 menit menjadi 3.5 menit. Volume transaksi digital triwulanan meningkat 140% dan sistem desain kini diadopsi oleh 6 unit bisnis holding.",
      en: "Onboarding cycle dropped from 18 to 3.5 minutes. Quarterly digital transaction volume surged 140%, with the design system adopted across 6 distinct enterprise divisions.",
    },
    deliverables: [
      "Discovery & Usability Audit (24 Sesi Wawancara Nasabah)",
      "Arsitektur Sistem Desain Tokenized (Figma & Tailwind)",
      "Interaksi UI & Prototipe Tingkat Tinggi",
      "Dokumentasi Komponen & Panduan Aksesibilitas WCAG AA",
    ],
    liveUrl: "https://example.com/astra",
    featured: true,
  },
  {
    id: "archive-studio",
    title: "Archive / Studio Monograph",
    subtitle: {
      id: "Etalase Digital Monografik Arsitektur Kontemporer & Galeri Kuratorial",
      en: "Curatorial Monograph Platform for Contemporary Architecture & Spaces",
    },
    category: "system",
    categoryLabel: {
      id: "Arah Kreatif & Web Editorial",
      en: "Creative Direction & Editorial",
    },
    year: "2025",
    client: "Sierra Architecture Atelier",
    role: "Creative Director & Lead Frontend Engineer",
    summary: {
      id: "Platform web monografik berestetika museum yang menyajikan dokumentasi spasial, materialitas batuan travertine, dan publikasi arsitektur bertaraf internasional.",
      en: "Museum-grade monograph website translating spatial materiality, brutalist travertine structures, and architectural literature into a tranquil web presence.",
    },
    image: "/src/assets/images/portfolio_ecommerce_concept_1794307611688.jpg",
    tags: ["Creative Direction", "Next.js", "Editorial Layout", "Typography", "Performance"],
    metrics: [
      {
        value: "4.8m",
        label: { id: "Rata-rata Waktu Kunjungan", en: "Average Session Duration" },
      },
      {
        value: "100/100",
        label: { id: "Skor Lighthouse Performance", en: "Lighthouse Performance Score" },
      },
      {
        value: "+180%",
        label: { id: "Pertumbuhan Permintaan Klien", en: "Inbound Architectural Inquiries" },
      },
    ],
    challenge: {
      id: "Fotografi arsitektur berukuran sangat besar sering memperlambat situs web dan merusak ritme pembacaan. Klien menginginkan situs yang terasa seperti buku monograf fisik mewah tanpa jeda pemuatan.",
      en: "High-resolution architectural photography frequently bogged down load times and fractured reading flow. The client required the tactile calm of a physical art book with instantaneous responsiveness.",
    },
    solution: {
      id: "Menerapkan kisi modular asimetris dengan rasio tipografi dinamis, lazy-loading gambar multi-skala berkecepatan tinggi, dan transisi antar halaman berbasis transform hardware-accelerated.",
      en: "Implemented an asymmetric editorial grid with strict typographic rhythm, responsive multi-density image optimization, and butter-smooth hardware-accelerated view transitions.",
    },
    impact: {
      id: "Meraih penghargaan Awwwards Site of the Day dan dinominasikan dalam Webby Awards 2025 kategori Architecture & Design.",
      en: "Awarded Awwwards Site of the Day and nominated for the 2025 Webby Awards in the Architecture & Design category.",
    },
    deliverables: [
      "Arah Seni Visual & Konsep Tipografi Monograf",
      "Penyusunan Konten & Hierarki Informasi Kuratorial",
      "Pengembangan Frontend Next.js & Shaders Ringan",
      "Optimasi SEO & Skema Structured Data Terpadu",
    ],
    liveUrl: "https://example.com/archive",
    featured: true,
  },
  {
    id: "aurelia-atelier",
    title: "Aurelia Atelier: Brand Monograph",
    subtitle: {
      id: "Identitas Visual Mewah, Panduan Tipografi Serif & Sistem Alat Tulis",
      en: "Luxury Visual Identity, Serif Typography Guidelines & Bespoke Stationery",
    },
    category: "system",
    categoryLabel: {
      id: "Identitas Merek & Desain Cetak",
      en: "Brand Identity & Print Design",
    },
    year: "2025",
    client: "Aurelia Maison de Haute Joaillerie",
    role: "Brand Architect & Typographic Designer",
    summary: {
      id: "Pedoman identitas jenama mewah holistik dengan kurasi tipografi Trajan, cap segel lilin tradisional, dan integrasi digital yang presisi.",
      en: "Holistic luxury brand identity guidelines spanning custom Trajan serif typography, wax-sealed stationery systems, and seamless digital brand standards.",
    },
    image: "/src/assets/images/portfolio_branding_visual_1794308321989.jpg",
    tags: ["Brand Identity", "Editorial", "Typography", "Print Craft", "Design Guidelines"],
    metrics: [
      {
        value: "350+",
        label: { id: "Komponen Merek Distandarisasi", en: "Brand Assets Standardized" },
      },
      {
        value: "100%",
        label: { id: "Konsistensi Fisik & Digital", en: "Print-to-Digital Parity" },
      },
      {
        value: "14",
        label: { id: "Negara Peluncuran Butik", en: "Global Boutique Launches" },
      },
    ],
    challenge: {
      id: "Jenama mewah membutuhkan panduan identitas yang tidak hanya berlaku di ranah digital, namun memiliki ketepatan cetak taktil untuk butik-butik perhiasan di Paris, Tokyo, dan Jakarta.",
      en: "A legacy fine jewelry house needed comprehensive identity guidelines bridging tactile physical stationery with responsive digital touchpoints across 14 boutique locations.",
    },
    solution: {
      id: "Merancang manual identitas merek komprehensif, formulasi palet warna travertine netral dan foil emas panas, serta penataan hierarki tipografi serif elegan.",
      en: "Engineered a master brand book, formulated neutral travertine and hot-foil color specifications, and paired classical serif display typography with clean modern numerals.",
    },
    impact: {
      id: "Menjadi standar identitas resmi untuk seluruh materi promosi global, amplop segel lilin kuratorial, dan etalase digital butik.",
      en: "Established the authoritative standard for all global collateral, curatorial wax-sealed suites, and digital boutique portals.",
    },
    deliverables: [
      "Master Brand Guidelines & Vector Lockups",
      "Spesifikasi Kertas & Formula Hot Foil Stamping",
      "Sistem Desain Stationery & Kemasan Mewah",
      "Digital Brand Kit & Varian Tipografi Responsif",
    ],
    liveUrl: "https://example.com/aurelia",
    featured: true,
  },
  {
    id: "architectra-workspace",
    title: "Architectra Component Lab",
    subtitle: {
      id: "Lingkungan Kerja & Visual Inspector untuk Desain Sistem Skala Besar",
      en: "Developer Workspace & Visual Inspector for Large-Scale Design Systems",
    },
    category: "engineering",
    categoryLabel: {
      id: "Rekayasa Perangkat Lunak & DevTools",
      en: "Software Engineering & DevTools",
    },
    year: "2024",
    client: "OpenDev Ecosystem",
    role: "Full-Stack Product Engineer",
    summary: {
      id: "Aplikasi lingkungan kerja terpadu untuk pengembang dan desainer dalam mengaudit token, menguji varian komponen secara visual, dan memverifikasi kontras warna secara otomatis.",
      en: "Unified developer canvas bridging Figma tokens with React ASTs, enabling instant token visual inspection, contrast linting, and automated state stress testing.",
    },
    image: "/src/assets/images/portfolio_ai_workspace_1794307613047.jpg",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "AST Parser", "Electron"],
    metrics: [
      {
        value: "18.5k",
        label: { id: "Pengembang Aktif", en: "Active Engineers Using Tool" },
      },
      {
        value: "-65%",
        label: { id: "Waktu Handoff Desain ke Kode", en: "Design Handoff Friction" },
      },
      {
        value: "99.8%",
        label: { id: "Akurasi Sinkronisasi Token", en: "Design-Code Parity Rate" },
      },
    ],
    challenge: {
      id: "Perbedaan sintaksis antara representasi gaya di Figma dan implementasi kode di repositori sering menimbulkan 'drift' desain, di mana komponen di produksi tidak lagi cocok dengan panduan desain.",
      en: "Syntactic divergence between Figma styles and codebase CSS caused perpetual design drift, leading to brittle UI inconsistencies and painful manual handoff reviews.",
    },
    solution: {
      id: "Membangun parser AST dua arah yang membaca file konfigurasi Tailwind dan memetakan variabel token ke kanvas interaktif. Mendukung pengujian varian status (hover, focus, disabled) secara paralel.",
      en: "Built a bidirectional AST bridge interpreting Tailwind configs and rendering atomic components across multiple viewport states with live token manipulation in real time.",
    },
    impact: {
      id: "Diadopsi secara organik oleh 40+ tim rekayasa perangkat lunak internasional dan menghemat ratusan jam waktu sinkronisasi per kuartal.",
      en: "Organically adopted across 40+ engineering organizations globally, eliminating hundreds of sync review hours every engineering quarter.",
    },
    deliverables: [
      "Arsitektur Aplikasi & Perancangan Antarmuka Pengguna",
      "Mesin Parsing Token Desain Berkecepatan Tinggi",
      "Pemeriksa Aksesibilitas Kontras Otomatis (WCAG 2.2)",
      "Dokumentasi API Terbuka & Integrasi CLI",
    ],
    liveUrl: "https://example.com/architectra",
    featured: true,
  },
  {
    id: "lumina-pulse",
    title: "Lumina Pulse: Biometric Companion",
    subtitle: {
      id: "Aplikasi Kesehatan Presisi & Pendamping Ritme Sirkadian Harian",
      en: "Precision Biometric Wellness Companion & Circadian Rhythm Guide",
    },
    category: "mobile",
    categoryLabel: {
      id: "Desain Mobile & Riset Kesehatan",
      en: "Mobile UX & Health Science",
    },
    year: "2024",
    client: "Lumina Biosystems Pte Ltd",
    role: "Lead Mobile UX Designer",
    summary: {
      id: "Aplikasi seluler pendamping kebugaran holistik yang menerjemahkan telemetri detak jantung (HRV) dan kualitas tidur menjadi panduan ritme harian yang menenangkan tanpa memicu stres.",
      en: "Holistic wellness iOS application interpreting complex heart rate variability (HRV) and sleep telemetry into calm, actionable daily health guidance.",
    },
    image: "/src/assets/images/portfolio_smart_health_1794307613531.jpg",
    tags: ["Mobile UX", "iOS HIG", "Micro-Interactions", "HealthTech", "User Research"],
    metrics: [
      {
        value: "4.9★",
        label: { id: "Rating Rata-rata App Store", en: "Average App Store Rating" },
      },
      {
        value: "82%",
        label: { id: "Retensi Pengguna Hari ke-30", en: "Day-30 Retention Rate" },
      },
      {
        value: "450k+",
        label: { id: "Unduhan Terverifikasi", en: "Verified Active Installs" },
      },
    ],
    challenge: {
      id: "Kebanyakan aplikasi pelacak kesehatan menampilkan grafik rumit yang justru memicu kecemasan pengguna (orthosomnia). Pasien sering bingung mengartikan angka denyut dan skor tidur mereka.",
      en: "Mainstream trackers presented dense medical curves that exacerbated health anxiety. Users struggled to turn biometric numbers into practical lifestyle adjustments.",
    },
    solution: {
      id: "Menciptakan bahasa visual biomorfik dengan warna-warna organik yang beradaptasi sesuai siklus matahari. Mengganti angka diagnostik mentah dengan narasi ringkas berbasis bahasa alami dan rekomendasi mikro.",
      en: "Developed a biomorphic visual language with soothing organic gradients shifting alongside the solar cycle. Replaced opaque metrics with plain-language daily wellness briefs.",
    },
    impact: {
      id: "Mencapai retensi hari ke-30 sebesar 82% (2.3x lipat rata-rata industri kebugaran) dan terpilih dalam Apple App Store Editorial Showcase.",
      en: "Achieved an 82% Day-30 retention benchmark (2.3x the health app industry baseline) and featured in Apple's App Store Editorial Showcase.",
    },
    deliverables: [
      "Riset Pengguna Pasien & Studi Perilaku Kebugaran",
      "Desain Interaksi Seluler & Haptik Berbasis iOS HIG",
      "Sistem Ikon Kebugaran & Kurva Biomorfik Khusus",
      "Panduan Pengujian Kegunaan (Usability Benchmark)",
    ],
    liveUrl: "https://example.com/lumina",
    featured: false,
  },
];

export const experiencesData: Experience[] = [
  {
    period: "2024 — Sekarang",
    role: {
      id: "Mahasiswa S1 Sistem Informasi & Calon IT Consultant",
      en: "Information Systems Undergraduate & Aspiring IT Consultant",
    },
    company: "Universitas Komputama Cilacap",
    location: "Cilacap, Jawa Tengah",
    description: {
      id: "Menempuh pendidikan sarjana Program Studi Sistem Informasi dengan fokus mempelajari bagaimana teknologi membantu kehidupan manusia serta mendukung kemajuan dunia bisnis.",
      en: "Pursuing Bachelor's degree in Information Systems, exploring how digital systems empower society and transform modern business operations.",
    },
    achievements: [
      {
        id: "Mempelajari analisis proses bisnis, perancangan sistem informasi, dan arsitektur database modern.",
        en: "Mastering business process analysis, information system design, and relational database architectures.",
      },
      {
        id: "Mempersiapkan kompetensi profesional sebagai IT Consultant yang mampu memberikan solusi teknologi andal bagi perusahaan.",
        en: "Developing core IT Consulting advisory skills, digital strategy, and enterprise software implementation frameworks.",
      },
      {
        id: "Aktif mengeksplorasi teknologi web modern, logika algoritma, dan tren transformasi digital.",
        en: "Exploring modern web stacks, computational algorithms, and emerging digital transformation vectors.",
      },
    ],
    technologies: ["Sistem Informasi", "IT Consulting", "Analisis Bisnis", "Database Systems", "Web Technology"],
  },
  {
    period: "2021 — 2024",
    role: {
      id: "Pendidikan Jurusan IPA (Ilmu Pengetahuan Alam)",
      en: "Natural Sciences Track (IPA Graduate)",
    },
    company: "SMA Negeri 01 Salem",
    location: "Salem, Brebes, Jawa Tengah",
    description: {
      id: "Selama SMA di jurusan IPA, mendapatkan banyak pengalaman dan pengetahuan baru melalui materi sains, kegiatan praktikum, serta melatih kemampuan berpikir kritis dan bekerja sama tim.",
      en: "Studied the Natural Sciences (IPA) curriculum at SMA Negeri 01 Salem, participating in laboratory practicums and cultivating critical thinking and collaborative teamwork.",
    },
    achievements: [
      {
        id: "Melaksanakan berbagai kegiatan praktikum sains dan eksperimen laboratorium fisika, kimia, dan biologi.",
        en: "Conducted diverse laboratory experiments and scientific research practicums across physics, chemistry, and biology.",
      },
      {
        id: "Melatih ketajaman berpikir kritis, logika pemecahan masalah matematis, dan kerja sama tim dalam berbagai tugas kelompok.",
        en: "Honed critical analytical reasoning, mathematical problem solving, and effective team coordination.",
      },
      {
        id: "Mengembangkan ketertarikan mendalam untuk mencoba hal baru dan memperluas wawasan ke bidang teknologi informasi.",
        en: "Discovered an enduring passion to step beyond natural sciences and venture into computer systems and digital technology.",
      },
    ],
    technologies: ["Praktikum Sains", "Logika Analitis", "Berpikir Kritis", "Kolaborasi Kelompok", "Fondasi Komputasi"],
  },
  {
    period: "2018 — 2021",
    role: {
      id: "Pendidikan Sekolah Menengah Pertama",
      en: "Junior High School Education",
    },
    company: "SMP Negeri 01 Salem",
    location: "Salem, Brebes, Jawa Tengah",
    description: {
      id: "Membangun fondasi akademik yang kokoh, aktif berorganisasi, dan melatih kedisiplinan diri.",
      en: "Established solid academic fundamentals, participated in student activities, and cultivated personal discipline.",
    },
    achievements: [
      {
        id: "Menyelesaikan pendidikan dengan rekam jejak akademik yang baik serta aktif dalam kegiatan ekstrakurikuler sekolah.",
        en: "Completed junior high school education with strong academic records and active student engagement.",
      },
    ],
    technologies: ["Dasar Sains & Matematika", "Komunikasi", "Kepemimpinan Siswa", "Literasi Digital"],
  },
  {
    period: "Fondasi Awal",
    role: {
      id: "Pendidikan Dasar & Usia Dini",
      en: "Primary & Early Childhood Education",
    },
    company: "SD Negeri 02 Salem & TK Silih Asih",
    location: "Salem, Brebes, Jawa Tengah",
    description: {
      id: "Menanamkan nilai-nilai integritas, rasa ingin tahu, kecintaan belajar, dan semangat kerja keras sejak masa kanak-kanak.",
      en: "Nurtured foundational values of curiosity, love for learning, and integrity from early childhood.",
    },
    achievements: [
      {
        id: "Pendidikan awal di TK Silih Asih dan pendidikan dasar di SD Negeri 02 Salem sebagai tonggak pertama perjalanan hidup.",
        en: "Early schooling at TK Silih Asih and elementary graduation from SD Negeri 02 Salem.",
      },
    ],
    technologies: ["Pendidikan Karakter", "Dasar Akademik", "Kreativitas", "Semangat Belajar"],
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    title: {
      id: "Desain Produk & Riset UX",
      en: "Product Design & UX Research",
    },
    description: {
      id: "Memahami perilaku pengguna melalui data kuantitatif dan wawancara mendalam untuk menciptakan solusi intuitif.",
      en: "Synthesizing user behavioral insights with rigorous visual hierarchy to craft frictionless digital workflows.",
    },
    skills: [
      {
        name: "Design Systems & Token Architecture",
        level: "Master",
        highlight: { id: "Figma Variables, Token Studio, Semantic Theming", en: "Figma Variables, Token Studio, Semantic Theming" },
      },
      {
        name: "User Research & Usability Audits",
        level: "Expert",
        highlight: { id: "Wawancara Kualitatif, Uji Kegunaan, A/B Hypothesis", en: "Qualitative Interviews, Usability Benchmarks, A/B Tests" },
      },
      {
        name: "Interactive Prototyping & Motion",
        level: "Master",
        highlight: { id: "Figma Advanced Components, Motion, Micro-Interactions", en: "Advanced Components, Micro-Interactions, Haptics" },
      },
      {
        name: "Information Architecture & Journeys",
        level: "Expert",
        highlight: { id: "User Flow Mapping, Wireframing, Content Strategy", en: "User Flow Mapping, Wireframing, Content Strategy" },
      },
    ],
  },
  {
    title: {
      id: "Rekayasa Frontend Modern",
      en: "Modern Frontend Engineering",
    },
    description: {
      id: "Menerjemahkan visi desain menjadi kode berkualitas tinggi dengan perhatian mendalam pada performa dan aksesibilitas.",
      en: "Translating sophisticated design specs into high-performance, accessible, and robust production code.",
    },
    skills: [
      {
        name: "React 19 & TypeScript",
        level: "Master",
        highlight: { id: "Clean Architecture, Type Safety, Custom Hooks", en: "Clean Architecture, Strict Types, Custom Hooks" },
      },
      {
        name: "Tailwind CSS & CSS Architecture",
        level: "Master",
        highlight: { id: "Utility-first, Custom Variants, Fluid Typography", en: "Utility-first, Custom Variants, Fluid Typography" },
      },
      {
        name: "Next.js & Vite Ecosystem",
        level: "Expert",
        highlight: { id: "SSR, SSG, Bundle Optimization, Code Splitting", en: "SSR, SSG, Bundle Optimization, Code Splitting" },
      },
      {
        name: "Aksesibilitas & Standar WCAG 2.2 AA",
        level: "Master",
        highlight: { id: "Semantik ARIA, Navigasi Keyboard, Pengujian Kontras", en: "ARIA Semantics, Keyboard Navigation, Contrast Testing" },
      },
    ],
  },
  {
    title: {
      id: "Arsitektur & Kepemimpinan",
      en: "Architecture & Leadership",
    },
    description: {
      id: "Menghubungkan desainer, teknisi, dan pemangku kepentingan bisnis untuk memastikan keberhasilan peluncuran.",
      en: "Bridging the gap between engineering, product leadership, and business metrics for predictable delivery.",
    },
    skills: [
      {
        name: "Design-to-Code Pipeline Sync",
        level: "Expert",
        highlight: { id: "CI/CD Token Sync, GitHub Actions, npm Libraries", en: "CI/CD Token Sync, GitHub Actions, npm Libraries" },
      },
      {
        name: "Mentorship & Team Calibration",
        level: "Expert",
        highlight: { id: "Design Critique, Career Coaching, Hiring Strategy", en: "Design Critique, Career Coaching, Hiring Strategy" },
      },
      {
        name: "Data-Driven Product Iteration",
        level: "Proficient",
        highlight: { id: "Telemetry Metrics, Funnel Analysis, Conversion Lift", en: "Telemetry Metrics, Funnel Analysis, Conversion Lift" },
      },
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: {
      id: "Kanzora memiliki kemampuan langka untuk memadukan kepekaan estetika tingkat tinggi dengan pemahaman teknis kode yang sangat dalam. Proyek Astra Financial Suite kami diluncurkan tepat waktu dengan kenaikan onboarding 54%.",
      en: "Kanzora possesses the rare gift of marrying high-craft visual taste with rigorous engineering discipline. Our financial suite delivered on time with an incredible 54% conversion uplift.",
    },
    author: "Raditya Prasetya",
    title: "VP of Product Engineering",
    organization: "Astra Digital Ecosystem",
    metric: "+54% Onboarding Conversion",
  },
  {
    quote: {
      id: "Pendekatan Kanzora terhadap sistem desain benar-benar menyelamatkan tim kami dari kekacauan kode. Kolaborasi desainer dan engineer menjadi 2x lebih cepat dan konsisten di seluruh aplikasi.",
      en: "Kanzora's architectural approach to design systems completely rescued our team from UI fragmentation. Design-to-code velocity doubled across all core products.",
    },
    author: "Elena Rostova",
    title: "Head of Design Operations",
    organization: "Monograph Capital Partners",
    metric: "-65% Design-to-Dev Friction",
  },
];
