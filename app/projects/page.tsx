import Image from "next/image";
import me from "@/public/me.png"
import tabootv from "@/public/tabootv/tabootv.webp";
import ScrollToTop from "../../components/ScrollToTop";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
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

    return(<>
        <ScrollToTop />

        <h1 className="md:mb-5 font-semibold sm:text-[55px] text-[35px] text-white sm:leading-[80px] leading-[80px] [text-shadow:4px_4px_4px_black]">Projects</h1>
        <p className="[text-shadow:4px_4px_4px_black] p-4 bg-black/40">I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-[120px] mx-auto max-w-[1100px]" id="projects">

            {projects.map((project, index) => (
                <ProjectCard project={project} key={index} index={index} />
            ))}
        </div>

        </>)
}