export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  faqs: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Minimal UI Kit",
    category: "Design",
    price: 49,
    image: "/minimal_ui_kit_hero_1778504254077.png",
    description: "The ultimate UI kit for modern web applications. Featuring over 200+ components, 50+ templates, and a comprehensive design system that follows best practices. Built for designers and developers who value speed and aesthetics.",
    features: [
      "200+ Premium Components",
      "Auto-layout & Variants",
      "Light & Dark Mode ready",
      "Free Lifetime Updates",
      "Documentation Included",
      "Commercial License"
    ],
    faqs: [
      { q: "What files are included?", a: "You will receive a Figma file (.fig) and a documentation PDF." },
      { q: "Can I use this for client projects?", a: "Yes, the commercial license allows use in unlimited personal and client projects." },
      { q: "How do I get updates?", a: "Updates are sent via email and can also be downloaded from your account dashboard." }
    ]
  },
  {
    id: "2",
    title: "Creator OS",
    category: "Notion Template",
    price: 29,
    image: "/creator_os_hero_1778504273333.png",
    description: "A comprehensive Notion system designed specifically for content creators. Manage your content calendar, sponsorships, analytics, and creative process all in one place.",
    features: [
      "Content Calendar",
      "Sponsorship Tracker",
      "Analytics Dashboard",
      "Resource Library",
      "Weekly Review System",
      "Creator Toolbox"
    ],
    faqs: [
      { q: "Do I need Notion Pro?", a: "No, this template works perfectly with the free version of Notion." },
      { q: "Is it mobile friendly?", a: "Yes, the layout is optimized for both desktop and mobile use." }
    ]
  },
  {
    id: "3",
    title: "Brand Identity Pack",
    category: "Assets",
    price: 79,
    image: "/brand_identity_hero_1778504292268.png",
    description: "Professional brand identity assets including logo marks, typography pairings, color palettes, and brand guidelines templates. Everything you need to launch a premium brand.",
    features: [
      "12 Unique Logo Marks",
      "Brand Guidelines Template",
      "Typography System",
      "Color Palette Library",
      "Social Media Assets",
      "Vector & Source Files"
    ],
    faqs: [
      { q: "Are the fonts included?", a: "We provide links to all fonts used (mostly free/open-source) and some premium recommendations." }
    ]
  },
  {
    id: "4",
    title: "Motion Presets",
    category: "Animation",
    price: 39,
    image: "/motion_presets_hero_1778504310602.png",
    description: "Smooth, cinematic motion presets for After Effects and Premiere Pro. Elevate your video projects with professional transitions and text animations.",
    features: [
      "50+ Cinematic Transitions",
      "Text Animation Presets",
      "Color Grading LUTS",
      "Sound FX Library",
      "Step-by-step Tutorial",
      "4K Resolution Ready"
    ],
    faqs: [
      { q: "What software is required?", a: "Adobe After Effects CC 2020 or higher, and Premiere Pro CC 2020 or higher." }
    ]
  },
  {
    id: "5",
    title: "Typeface Collection",
    category: "Typography",
    price: 59,
    image: "",
    description: "A curated collection of 5 custom-designed typefaces. From elegant serifs to modern sans-serifs, perfect for editorial and branding projects.",
    features: [
      "5 Full Font Families",
      "OTF, TTF & Webfont Formats",
      "Multilingual Support",
      "Alternative Characters",
      "Specimen PDF",
      "Desktop & Web License"
    ],
    faqs: [
      { q: "Can I use these for logos?", a: "Yes, the license covers logo design and commercial use." }
    ]
  },
  {
    id: "6",
    title: "3D Icon Set",
    category: "Assets",
    price: 34,
    image: "",
    description: "80+ high-quality 3D icons for your next project. Available in multiple formats including high-res PNG and editable source files.",
    features: [
      "80+ Premium 3D Icons",
      "High-res PNG (2000px)",
      "Editable Source Files",
      "3 Different Styles",
      "Transparent Backgrounds",
      "Free Updates"
    ],
    faqs: [
      { q: "What formats are included?", a: "PNG, Figma, and Blender source files are included." }
    ]
  },
  {
    id: "7",
    title: "Web Mockups",
    category: "Mockups",
    price: 24,
    image: "",
    description: "Clean, minimal web browser and device mockups to showcase your portfolio or client work in style.",
    features: [
      "Browser Mockups",
      "Desktop & Mobile Devices",
      "Adjustable Shadows",
      "Changeable Backgrounds",
      "Photoshop & Figma files",
      "High Resolution"
    ],
    faqs: [
      { q: "Is it easy to use?", a: "Yes, we use Smart Objects in Photoshop and Components in Figma for instant replacement." }
    ]
  },
  {
    id: "8",
    title: "Video Effects",
    category: "Video",
    price: 45,
    image: "",
    description: "A massive library of grain, dust, and light leak overlays to give your digital footage a vintage film look.",
    features: [
      "35mm & 16mm Film Grain",
      "Dust & Scratches Overlays",
      "Cinematic Light Leaks",
      "4K ProRes Files",
      "Overlay Tutorial",
      "Lifetime Access"
    ],
    faqs: [
      { q: "Does it work in Final Cut Pro?", a: "Yes, these are standard video files that work in any editing software." }
    ]
  }
];
