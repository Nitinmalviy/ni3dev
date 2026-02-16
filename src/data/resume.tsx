import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
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
    "Full Stack Software Developer | React, Node.js & Scalable Cloud Systems",

  summary:
    "I am a full stack software developer building scalable web applications and enterprise-grade systems across both frontend and backend. I specialize in React, Next.js, Node.js, NestJS, Express.js, MongoDB, and PostgreSQL, with a strong focus on clean architecture and microservices. Experienced in designing RESTful APIs, building modern UI interfaces, and deploying production-ready applications on AWS using Nginx, PM2, Docker, and CI/CD pipelines. Currently contributing to enterprise platforms at Brain Inventory while building my tech brand ni3dev with a long-term vision to launch ni3labs.",

  avatarUrl: "/me.png",

  skills: [
    { name: "React.js", icon: Nodejs },
    { name: "Next.js", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "NestJS", icon: Nodejs },
    { name: "MongoDB", icon: Postgresql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: Postgresql },
    { name: "Redis", icon: Java },
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
      logoUrl: "/braininventory.jpg",
      start: "Oct 2025",
      end: "Present",
      description:
        "Developing scalable full stack systems using React, Next.js, Node.js, NestJS, Express.js, MongoDB, and PostgreSQL. Contributing to enterprise accounting software (Numetric) and business platforms. Implementing authentication, RBAC authorization, Redis caching, microservices architecture, and managing AWS EC2 deployments with Docker.",
    },
    {
      company: "Infograins Software Solutions Pvt. Ltd.",
      href: "https://infograins.com",
      location: "Indore",
      title: "Software Developer",
      logoUrl: "/infograins.jpg",
      start: "June 2024",
      end: "Oct 2025",
      description:
        "Built scalable full stack applications including blockchain-integrated platforms and real-time systems using WebSockets. Developed REST APIs, frontend interfaces, and handled production deployments on AWS EC2 using Nginx and PM2.",
    },
    {
      company: "MPIF Foundation",
      href: "#",
      location: "Indore",
      title: "Trainee Software Developer",
      logoUrl: "/mpif.jpg",
      start: "April 2023",
      end: "June 2024",
      description:
        "Completed intensive MERN stack training. Built authentication systems, REST APIs, frontend interfaces, database schemas, and deployed live applications.",
    },
  ],

  education: [
    {
      school: "RGPV, Bhopal",
      href: "#",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "/rgpv.jpg",
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
        "Enterprise-grade accounting and financial management software. Responsible for backend APIs, financial data handling, RBAC authorization, and performance optimization.",
      technologies: ["React", "Node.js", "NestJS", "PostgreSQL", "Redis", "AWS EC2"],
      image: "/numetric.png",
      video: "",
    },
    {
      title: "Hanat",
      href: "https://hanat.co/",
      dates: "2025",
      active: true,
      description:
        "Contributed to full stack development for Hanat platform with secure APIs and optimized server-side business logic.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/hanat.png",
      video: "",
    },
    {
      title: "4BrainsTech",
      href: "https://www.4brainstech.com/",
      dates: "2025",
      active: true,
      description:
        "Corporate business website with modern UI and backend integration, deployed on AWS infrastructure.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS EC2"],
      image: "/4brainstech.png",
      video: "",
    },
    {
      title: "Gotravelx",
      href: "https://www.gotravelx.com/",
      dates: "2024",
      active: true,
      description:
        "Blockchain-powered flight tracking platform with real-time updates using WebSockets and AWS deployment.",
      technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
      image: "/gotravelx.png",
      video: "",
    },
    {
      title: "PBMC Coin",
      href: "https://pbm-coin.com",
      dates: "2024",
      active: true,
      description:
        "Secure cryptocurrency trading platform with Web3 integration and smart contract interactions.",
      technologies: ["React", "Node.js", "MongoDB", "Web3.js"],
      image: "/pbmc.png",
      video: "",
    },
  ],
} as const;
