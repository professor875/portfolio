import Image from "next/image";
import meImg from "@/public/me.png"
import meImg1 from "../public/me1.png"
import SkillsSection from "./Skills";
import ProjectsSection from "./Projects";
import ContactSection from "./Contact";
import Navbar from "../components/Navbar";

export default function Home() {
    return (<>

            {/*navbar*/}
            <Navbar/>

            {/*hero section*/}
            <div className="w-full flex-col md:flex-row flex justify-between items-center py-16 gap-5">
                <div className="flex-1 flex justify-center flex-col xl:px-0 sm:px-16 px-6">
                    <div className="flex justify-between items-center w-full text-white mb-3">
                        <h1 className="flex-1 font-semibold sm:text-[52px] text-[26px] text-black leading-[26px] sm:leading-[52px] [text-shadow:2px_2px_8px_white]">
                            Hi, there!<br className="sm:block hidden"/> I am
                        </h1>
                    </div>

                    <h1 className="font-semibold text-[32px] md:text-[6vw] text-white md:leading-[60px] lg:leading-[100px] leading-[32px] w-full [text-shadow:4px_4px_4px_black]">
                        <span className="name-gradient">Mubashir Khan</span>
                    </h1>
                    <p className="text-[18px] leading-[20.8px] max-w-[470px] mt-5 [text-shadow:4px_4px_8px_black]">
                        <b className="font-bold text-cyan-400">Full Stack Engineer — </b> <br/>
                        I build intelligent, scalable web experiences powered by clean code and <b
                        className="font-bold text-cyan-400">AI innovation</b>. br I care deeply about every project I
                        take on — and <b className="font-bold text-cyan-400">I’m not satisfied until you are</b>. Let’s
                        build something you’ll be proud to launch.</p>
                </div>

                <div
                    className="group rounded-full relative bg-black shadow-2xl shadow-black max-w-[400px]">
                    <Image
                        src={meImg1}
                        alt="MK Logo"
                        className="rounded-full aspect-square object-contain"
                    />
                </div>
            </div>

            {/*skill section*/}
            <h1 id="skills" className=" scroll-mt-[150px] md:mb-5 font-semibold sm:text-[55px] text-[35px] text-white sm:leading-[80px] leading-[80px] [text-shadow:4px_4px_4px_black]">Skills</h1>
            <SkillsSection/>

            {/*projects*/}
            <ProjectsSection />

            {/*divider*/}
            <div className="relative my-8 md:my-20">
                <div
                    className="w-full h-[2px]"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
                    }}
                ></div>

                <div
                    className="w-full h-[2px] rotate-[1deg]"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
                    }}
                ></div>

                <div
                    className="w-full h-[2px] -rotate-[1deg]"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
                    }}
                ></div>

                <div
                    className="w-full h-[2px] rotate-[0.5deg]"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
                    }}
                ></div>

                <div
                    className="w-full h-[2px] -rotate-[0.5deg]"
                    style={{
                        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
                    }}
                ></div>
            </div>

            {/*contact form*/}
            <ContactSection />
        </>
    );
}
