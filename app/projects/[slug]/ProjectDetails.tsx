'use client';

import Image from "next/image";
import taboo1 from "../../../public/tabootv/taboo-1.webp"
import taboo2 from "../../../public/tabootv/taboo-2.webp"
import taboo3 from "../../../public/tabootv/taboo-3.webp"
import taboo4 from "../../../public/tabootv/taboo-4.webp"
import taboo5 from "../../../public/tabootv/taboo-5.webp"
import taboo6 from "../../../public/tabootv/taboo-6.webp"
import taboo7 from "../../../public/tabootv/taboo-7.webp"
import MediumHeading from "../../../components/MediumHeading";
import SmallHeading from "../../../components/SmallHeading";
import Paragraph from "../../../components/Paragraph";


import {useEffect, useState} from "react";

export default function ProjectDetails() {
    const [activeSection, setActiveSection] = useState<string>("overview");

    useEffect(() => {
        const sections = document.querySelectorAll("h1[id], h2[id] , h3[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            {rootMargin: "-40% 0px -50% 0px", threshold: 0}
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navigationLinks = [
        {id: "overview", label: "Overview"},
        {id: "project-goals", label: "Project Goals"},
        {id: "tech-stack", label: "Tech Stack"},
        {
            id: "features",
            label: "Features",
            subLinks: [
                {id: "feature-series", label: "Series"},
                {id: "feature-shorts", label: "Shorts"},
                {id: "feature-comment-reply-reaction", label: "Comment, Reply & Reactions"},
                {id: "feature-community", label: "Community"},
                {id: "feature-live-chat", label: "Live Chat"},
            ],
        },
        {id: "challenges", label: "Challenges"},
        {id: "initiatives", label: "Initiatives"},
    ]

    return (
        <div className="grid grid-cols-8 md:grid-cols-12 gap-8 mt-6 w-full">
            <div className="col-span-8 space-y-6">
                <MediumHeading id="overview">Overview</MediumHeading>

                <Paragraph>
                    Taboo.tv is a video streaming platform that offers raw and unfiltered content about travel and world
                    cultures. It provides short-form videos, long-form documentaries, and multi-episode series, focusing
                    on authentic cultural experiences worldwide. Users can engage with the community through live chats,
                    comments, and reactions. Access requires creating an account and subscribing to monthly, yearly, or
                    lifetime plans.
                </Paragraph>

                <Image src={taboo1} alt="Taboo.tv" className="w-full rounded-xl"/>

                <MediumHeading id="project-goals">Project Goals</MediumHeading>

                <Paragraph>I led the development of Taboo.tv, a platform offering unfiltered travel and cultural
                    content, by integrating React, Vue.js, JavaScript, HTML, CSS, and Tailwind on the front-end, and
                    leveraging Laravel and AWS on the back-end.
                </Paragraph>

                <MediumHeading id="tech-stack">Tech Stack</MediumHeading>

                <Paragraph>
                    To achieve this, the following technologies were used:
                    <br/>
                    <br/>
                    <b>Vue.js:</b> Developed a dynamic and interactive user interface. <br/>
                    <b>Tailwind & Vuetify:</b> Applied style for responsive design. <br/>
                    <b>Postgres:</b> Utilized a reliable relational database system. <br/>
                    <b>Laravel: </b> Implemented a robust backend framework.<br/>
                    <b>AWS EC2:</b> Deployed scalable virtual servers.<br/>
                    <b>AWS S3:</b> Provided secure object storage.<br/>
                </Paragraph>

                <MediumHeading id="features">Features</MediumHeading>

                <SmallHeading id="feature-series">Series</SmallHeading>
                <Image src={taboo2} alt="Taboo.tv" className="w-full rounded-xl"/>

                <SmallHeading id="feature-shorts">Shorts</SmallHeading>
                <Image src={taboo3} alt="Taboo.tv" className="w-full rounded-xl"/>

                <SmallHeading id="feature-comment-reply-reaction">Comment, Reply & Reactions</SmallHeading>
                <Image src={taboo4} alt="Taboo.tv" className="w-full rounded-xl"/>

                <SmallHeading id="feature-community">Community</SmallHeading>
                <Image src={taboo5} alt="Taboo.tv" className="w-full rounded-xl"/>

                <SmallHeading id="feature-live-chat">Live Chat</SmallHeading>
                <Image src={taboo6} alt="Taboo.tv" className="w-full rounded-xl"/>

                <MediumHeading id="challenges">Challenges</MediumHeading>

                <Paragraph>
                    As usual each project has some challenging points, In Tabootv I have to deal with multiple team
                    design team, mobile team and QA team to issue the seamless deliver of the project, Managing large
                    file uploads to AWS S3 introduced complexities in file chunking and integration. It has multiple
                    payment method and gatways which becomes challenging to manage users subscriptions.
                </Paragraph>

                <MediumHeading id="initiatives">Initiatives</MediumHeading>

                <Paragraph>
                    I led our team in adopting agile methodologies, which enhanced our collaboration and adaptability.
                    Implementing a continuous delivery pipeline allowed us to automate testing and deployment, resulting
                    in faster, more reliable releases without compromising quality.
                </Paragraph>

                <Image src={taboo7} alt="Taboo.tv" className="w-full rounded-xl"/>


            </div>

            <div className="bg-black/70 col-span-4 sticky top-[150px] flex flex-col gap-2 p-4 h-fit">

                <SmallHeading>Table of Contents</SmallHeading>

                <ul className="flex flex-col gap-2">
                    {navigationLinks.map((link, key) => (
                        <li key={key}>
                            <a
                                href={`#${link.id}`}
                                className={`transition-colors ${
                                    activeSection === link.id ? "text-cyan-400 font-semibold" : "text-white/60"
                                }`}
                            >
                                {link.label}
                            </a>

                            {/* Sub Links */}
                            {link.subLinks && (
                                <ul className="pl-8 list-disc space-y-2 mt-2">
                                    {link.subLinks.map((sub, subkey) => (
                                        <li key={subkey}>
                                            <a
                                                href={`#${sub.id}`}
                                                className={`transition-colors ${
                                                    activeSection === sub.id ? "text-cyan-400 font-semibold" : "text-white/50"
                                                }`}
                                            >
                                                {sub.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )}