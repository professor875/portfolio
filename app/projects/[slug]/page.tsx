import Image from "next/image";
import tabootv from "../../../public/tabootv/tabootv.webp"
import Paragraph from "../../../components/Paragraph";
import ProjectDetails from "./ProjectDetails";

export default function Page() {
    return (<>

        <div className="w-full">
            <Image src={tabootv} alt="Taboo.tv" className="w-full rounded-xl"/>

            <h1 className="mt-6 font-bold md:text-[40px] text-[30px] text-white md:leading-[60px] leading-[40px] [text-shadow:4px_4px_4px_black]">Taboo.TV</h1>

            <Paragraph>Taboo.TV is a private, content-driven platform created by a YouTuber to entertain their community
                while offering greater control and flexibility compared to YouTube.</Paragraph>

            <hr className="w-full border border-cyan-400 my-4"/>
        </div>

        <ProjectDetails />


    </>)
}