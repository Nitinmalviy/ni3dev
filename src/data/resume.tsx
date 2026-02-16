import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Nitin Malviya",
  initials: "NM",
  url: "https://ni3dev.com",
  location: "Indore, Madhya Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Indore",
  description:
    "Backend Developer | Node.js, Web3 & Scalable Systems | AWS & Microservices",
  summary:
    "Backend Developer with 1.5+ years of professional experience building scalable, high-performance web applications. Specialized in Node.js, NestJS, Express.js, MongoDB, PostgreSQL, and RESTful API architecture. Experienced in deploying production-grade systems on AWS EC2 using Nginx, PM2, Docker, and CI/CD pipelines. Currently working at Brain Inventory, contributing to enterprise-grade accounting and business platforms, while building my freelance brand ni3dev with a vision to launch ni3labs.",

  avatarUrl: "/me.png",

  skills: [
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "NestJS", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "MongoDB", icon: Postgresql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Postgresql },
    { name: "Redis", icon: Java },
    { name: "Kafka", icon: Java },
    { name: "Web3.js / Ethers.js", icon: Java },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "AWS EC2", icon: Docker },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "nitinmalviya172@gmail.com",
    tel: "+916261014296",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nitin-malviya",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/nitin_G_",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@ni3coder",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nitinmalviya172@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Brain Inventory Pvt. Ltd.",
      href: "https://braininventory.com",
      location: "Indore",
      title: "Software Developer",
      logoUrl: "/braininventory.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "Developing scalable backend systems using Node.js, NestJS, Express.js, MongoDB, and PostgreSQL. Contributing to enterprise accounting software (Numetric) and other business platforms. Implementing authentication, RBAC authorization, Redis caching, and microservices architecture. Managing AWS EC2 deployments, Docker containers, and resolving production vulnerabilities.",
    },
    {
      company: "Infograins Software Solutions Pvt. Ltd.",
      href: "https://infograins.com",
      location: "Indore",
      title: "Software Developer",
      logoUrl: "/infograins.png",
      start: "June 2024",
      end: "Oct 2025",
      description:
        "Designed and developed scalable RESTful APIs using Node.js and Express.js. Built blockchain-integrated platforms including cryptocurrency systems. Worked on real-time systems using WebSockets and managed production deployments on AWS EC2 using Nginx and PM2.",
    },
    {
      company: "MPIF Foundation",
      href: "#",
      location: "Indore",
      title: "Trainee Backend Developer",
      logoUrl: "/mpif.png",
      start: "April 2023",
      end: "June 2024",
      description:
        "Completed intensive backend development training focused on MERN stack. Built authentication systems, REST APIs, database schemas, and deployed live applications.",
    },
  ],

  education: [
    {
      school: "RGPV, Bhopal",
      href: "#",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "/rgpv.png",
      start: "2024",
      end: "2026 (Pursuing)",
    },
    {
      school: "DAVV, Indore",
      href: "#",
      degree: "Bachelor of Computer Applications (BCA) - 78%",
      logoUrl: "/davv.png",
      start: "2020",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Numetric",
      href: "https://numetric.co/",
      dates: "2025 - Present",
      active: true,
      description:
        "Enterprise-grade accounting and financial management software built at Brain Inventory. Responsible for backend API development, financial data handling, RBAC authorization, and performance optimization.",
      technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "AWS EC2", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://numetric.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hanat",
      href: "https://hanat.co/",
      dates: "2025",
      active: true,
      description:
        "Contributed to backend development for Hanat platform at Brain Inventory. Implemented secure APIs and optimized server-side business logic.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://hanat.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "4BrainsTech",
      href: "https://www.4brainstech.com/",
      dates: "2025",
      active: true,
      description:
        "Developed and deployed corporate business website with backend integration and production deployment setup.",
      technologies: ["Node.js", "Next.js", "PostgreSQL", "AWS EC2"],
      links: [
        {
          type: "Website",
          href: "https://www.4brainstech.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Gotravelx",
      href: "https://www.gotravelx.com/",
      dates: "2024",
      active: true,
      description:
        "Blockchain-powered flight tracking platform developed at Infograins with real-time updates using WebSockets and AWS deployment.",
      technologies: ["Node.js", "WebSockets", "MongoDB", "AWS EC2"],
      links: [
        {
          type: "Website",
          href: "https://www.gotravelx.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PBMC Coin",
      href: "https://pbm-coin.com",
      dates: "2024",
      active: true,
      description:
        "Secure cryptocurrency trading platform with Web3 integration. Developed backend architecture, wallet integrations, and smart contract interactions.",
      technologies: [
        "Node.js",
        "MongoDB",
        "Web3.js",
        "Ethers.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://pbm-coin.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yourusername/pbmc-coin",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "Start Naukri",
      href: "https://startnaukri.com",
      dates: "2024",
      active: true,
      description:
        "Job portal platform with HR & Sub-HR roles and interview scheduling system. Designed and developed scalable RESTful backend APIs.",
      technologies: [
        "Node.js",
        "Express.js",
        "MySQL"
      ],
      links: [
        {
          type: "Website",
          href: "https://startnaukri.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yourusername/start-naukri",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

} as const;
