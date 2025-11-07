import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
}

export default function ProjectCard({project, index}: { project:Project, index: number }) {
    return (
        <Link href={project.link}
            className={`border border-white/40 shadow hover:shadow-xl shadow-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105 w-full grid rounded-[10px] overflow-hidden bg-black p-4 md:p-8 ${index % 2 == 0 ? ' md:translate-y-[-30%] lg:translate-y-[-20%] ' : ''}`}
            key={index}>
            <Image src={project.image} alt="myimage" className="w-full aspect-video object-contain"/>

            <div className="flex justify-between items-center my-2">
                <h3 className="text-xl">{project.title}</h3>
                <svg data-v-36789358="" stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 512 512"
                     aria-label="project link" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                </svg>
            </div>

            <hr className="border border-white/30 w-full my-2"/>

            <p className="text-white/60">{project.description}</p>
        </Link>
    )
}