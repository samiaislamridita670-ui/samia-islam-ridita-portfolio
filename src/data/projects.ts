export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  github: string;
  live: string | null;
  image: string | null;
  technologies: string[];
  category: "Independent" | "Academic" | "Tutorial" | "Unverified";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "EduSpark",
    slug: "eduspark",

    description:
      "A React-based educational course discovery website featuring interactive course search, category filtering, and detailed course cards. Built as a frontend demonstration project.",

    github:
      "https://github.com/samiaislamridita670-ui/eduspark",

    live: null,
    image: null,

    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "CSS",
    ],

    category: "Unverified",
  },

 {
  id: 2,
  title: "Smart Web Partner",
  slug: "smart-web-partner",

  description:
    "A modern web design and development agency website featuring service showcases, portfolio projects, pricing packages, responsive navigation, and direct WhatsApp contact.",

  github:
    "https://github.com/samiaislamridita670-ui/smart-web-partner",

  live: null,
  image: null,

  technologies: [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Lucide React",
    "React Icons",
  ],

  category: "Unverified",
},
  {
    id: 3,
    title: "FitLog",
    slug: "fitlog",
    description:
      "A fitness-related web application project.",
    github:
      "https://github.com/samiaislamridita670-ui/fitlog",
    live: null,
    image: null,
    technologies: [],
    category: "Unverified",
  },

  {
    id: 4,
    title: "RokthoBindu",
    slug: "rokthobindo",
    description:
      "A blood donation platform project.",
    github:
      "https://github.com/samiaislamridita670-ui/rokthobindo",
    live: "https://rokthobindo.netlify.app/",
    image: null,
    technologies: [],
    category: "Unverified",
  },

  {
    id: 5,
    title: "Bazar Dor",
    slug: "bazar-dor",
    description:
      "A market price information application project.",
    github:
      "https://github.com/samiaislamridita670-ui/bazar-dor",
    live: null,
    image: null,
    technologies: [],
    category: "Unverified",
  },

  {
    id: 6,
    title: "Rafi's Classroom",
    slug: "rafis-classroom",
    description:
      "An educational website project.",
    github:
      "https://github.com/samiaislamridita670-ui/rafis-classroom",
    live: null,
    image: null,
    technologies: [],
    category: "Unverified",
  },
];