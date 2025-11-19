import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { SparklesText } from "./ui/sparkles-text";
import { Timeline } from "./ui/timeline";

const WorkExperince = () => {
    const data = [
        {
            title: "Brain Inventory",
            content: (
                <div className="space-y-4">
                    <HoverBorderGradient>
                        Oct 2025 — Present
                    </HoverBorderGradient>
                    <p className="text-neutral-700 text-2xl dark:text-neutral-300">
                        Working as a Full Stack Developer focusing on MERN + Next.js.
                        Building scalable APIs, automation systems, and high-performance web apps.
                    </p>
                    <ul className="list-disc pl-6 text-neutral-600 text-xl dark:text-neutral-400 space-y-1">
                        <li>Building full-stack applications using React, Next.js, Node, and MongoDB.</li>
                        <li>Working on automation, AI-powered workflows, and production systems.</li>
                        <li>Implementing secure APIs, role-based access, and optimized backend services.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Infograins Software Solutions",
            content: (
                <div className="space-y-4">
                    <HoverBorderGradient>
                        Jun 2024 — Oct 2025
                    </HoverBorderGradient>
                    <p className="text-neutral-700 text-2xl dark:text-neutral-300">
                        Worked as a MERN Stack Developer delivering production-level applications.
                    </p>
                    <ul className="list-disc pl-6 text-neutral-600 text-xl dark:text-neutral-400 space-y-1">
                        <li>Developed secure REST APIs with JWT & RBAC authentication.</li>
                        <li>Integrated WebSockets for real-time updates.</li>
                        <li>Deployed apps on AWS EC2 with Nginx, PM2 & GitHub Actions.</li>
                        <li>Worked on PBMC Coin, StartNaukri & GoTravelX.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Infobeans Foundation",
            content: (
                <div className="space-y-4">
                    <HoverBorderGradient>
                        Apr 2023 — Jun 2024
                    </HoverBorderGradient>
                    <p className="text-neutral-700 text-2xl dark:text-neutral-300">
                        Completed 1 year of intensive MERN training building real-world apps.
                    </p>
                    <ul className="list-disc pl-6 text-neutral-600 text-xl dark:text-neutral-400 space-y-1">
                        <li>Designed databases, built REST APIs & integrated UI components.</li>
                        <li>Learned MERN principles, deployment & MVC architecture.</li>
                        <li>Worked on multiple end-to-end project modules.</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-center">
                <SparklesText>
                    Work Experience
                </SparklesText>
            </div>
            <Timeline data={data} />
        </div>
    );
};

export default WorkExperince;
