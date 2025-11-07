import Image from "next/image";
import me from "../public/me.png"
import tabootv from "../public/tabootv/tabootv.webp";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Tabootv",
        description:
            "Taboo.TV is a private, content-driven platform created by a YouTuber to entertain their community while offering greater control and flexibility compared to YouTube.",
        image: tabootv,
        link: "/projects/tabootv",
    },
    {
        title: "Tabootv",
        description:
            "Taboo.TV is a private, content-driven platform created by a YouTuber to entertain their community while offering greater control and flexibility compared to YouTube.",
        image: tabootv,
        link: "/projects/tabootv",
    },
    {
        title: "Tabootv",
        description:
            "Taboo.TV is a private, content-driven platform created by a YouTuber to entertain their community while offering greater control and flexibility compared to YouTube.",
        image: tabootv,
        link: "/projects/tabootv",
    }
];

export default function ProjectsSection() {
    return (
        <div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-20 mx-auto max-w-[1100px] scroll-mt-[150px]" id="projects">
            <div className="text-[22px]">
                <h3 className="font-bold md:text-[45px] text-[45px] text-white md:leading-[80px] leading-[50px] [text-shadow:4px_4px_4px_black]">All
                    Creative Works.</h3>

                <p className="responsive mt-1 [text-shadow:4px_4px_4px_black]">Here's some of my projects that I have
                    worked on.</p>

                <Link href="/projects"
                      className="responsive text-cyan-400 cursor-pointer [text-shadow:4px_4px_4px_black]">
                    Explore more <span className="text-2xl font-medium">→</span>
                </Link>
            </div>

            {projects.map((project, index) => (
                <ProjectCard project={project} index={index} key={index} />
            ))}
        </div>

    );
}
