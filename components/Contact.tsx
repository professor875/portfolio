'use client';
import Image from "next/image";
import me from "../public/me.png"
import tabootv from "../public/tabootv.webp";

import link from "../public/link.svg"


const detail = {
    email: "codephantom404@gmail.com",
    socials: {
        github: "https://github.com/professor875/",
        linkedin: "https://www.linkedin.com/in/meet-mubashir-khan",
        upwork: "https://www.upwork.com/freelancers/~01134456deeb0a45f4?mp_source=share",
    }
}

export default function ContactSection() {
    return (

        <div className="mx-auto w-full">
            <div
                className="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl max-lg:max-w-2xl bg-black/85 [box-shadow:0_2px_10px_-3px_white] rounded-xl">
                <div className="flex flex-wrap justify-between items-start gap-12">
                    <div>
                        <h2 className="text-cyan-400 text-3xl font-bold">Let's Talk</h2>
                        <p className="text-[15px] text-white/70 mt-4 leading-relaxed">I’m one of the 9% of people
                            worldwide who actually check their emails — go ahead, try me.</p>
                    </div>
                    <div>
                        <h2 className="text-cyan-400 text-base font-semibold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div
                                    className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                                         viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000"/>
                                    </svg>
                                </div>
                                <a href="javascript:void(0)" className="text-sm ml-4">
                                    <small className="block text-cyan-400">Mail</small>
                                    <span className="text-white/70 font-medium">info@example.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h2 className="text-cyan-400 text-base font-semibold">Socials</h2>
                        <ul className="flex mt-4 space-x-8">
                            <li>
                                <a href={detail.socials.linkedin} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                         viewBox="0 0 256 256">
                                        <g fill="none">
                                            <rect width="256" height="256" fill="#fff" rx="60"/>
                                            <rect width="256" height="256" fill="#0a66c2" rx="60"/>
                                            <path fill="#fff"
                                                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href={detail.socials.github} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                              d="M11.996 1.284a10.986 10.986 0 0 0-3.472 21.412c.548.095.722-.227.722-.517c0-.263.006-.991 0-1.91c-3.057.662-3.688-1.448-3.688-1.448a2.9 2.9 0 0 0-1.22-1.607c-.997-.682.075-.669.075-.669a2.3 2.3 0 0 1 1.683 1.131a2.34 2.34 0 0 0 3.197.914a2.34 2.34 0 0 1 .697-1.464c-2.439-.279-5.004-1.22-5.004-5.432a4.25 4.25 0 0 1 1.132-2.948a3.94 3.94 0 0 1 .107-2.907s.924-.295 3.02 1.128a10.4 10.4 0 0 1 5.503 0c2.102-1.422 3.018-1.128 3.018-1.128c.405.92.444 1.96.109 2.907a4.24 4.24 0 0 1 1.13 2.95c0 4.223-2.569 5.15-5.016 5.42a2.6 2.6 0 0 1 .752 2.026v3.041c0 .294.177.619.735.512a10.986 10.986 0 0 0-3.48-21.411"/>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href={detail.socials.upwork} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"
                                         viewBox="0 0 512 153">
                                        <path fill="#6fda44"
                                              d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096l.075-.3c1.536-8.62 6.409-23.089 21.402-23.089c11.244 0 20.39 9.146 20.39 20.39c-.038 11.207-9.183 20.353-20.39 20.353m0-61.395c-19.154 0-33.996 12.444-40.03 32.909c-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19s-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993S79.8 99.327 79.8 77.362v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359c22.601 0 41.005-18.516 41.005-41.118c0-22.564-18.404-40.967-41.005-40.967"/>
                                        <path
                                            d="m244.043 37.557l13.306 53.636l14.656-53.636h17.466l-22.526 77.512h-17.467l-13.83-53.974l-13.794 53.936h-17.466L181.86 37.52h17.467l14.655 53.636l13.306-53.636h16.754zm87.22-2.324c-22.676 0-41.042 18.403-41.042 41.042c0 22.677 18.403 41.043 41.042 41.043c22.677 0 41.08-18.366 41.08-41.043c0-22.676-18.403-41.042-41.08-41.042m0 65.218c-13.343 0-24.138-10.795-24.138-24.138s10.832-24.138 24.138-24.138c13.344 0 24.138 10.794 24.138 24.138c0 13.306-10.794 24.138-24.138 24.138m90.968-45.54c-11.731 0-21.214 9.52-21.214 21.214v38.906h-17.58V37.557h17.58v11.919s7.496-11.957 22.901-11.957h5.397v17.392zm58.997 18.366c12.48-7.047 20.952-20.428 20.952-35.758H484.6c0 12.931-10.494 23.426-23.425 23.426h-2.362V.15h-17.578v114.88h17.578V78.524h2.1c1.724 0 3.973 1.125 4.985 2.511l24.962 33.996h21.065z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="space-y-4">
                    <input type='text' placeholder='Name'
                           className="w-full text-white rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-cyan-500"/>
                    <input type='email' placeholder='Email'
                           className="w-full text-white rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-cyan-500"/>
                    <input type='text' placeholder='Subject'
                           className="w-full text-white rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-cyan-500"/>
                    <textarea placeholder='Message' rows="6"
                              className="w-full text-white rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-cyan-500"></textarea>
                    <button type='button'
                            className="text-white bg-cyan-600 hover:bg-cyan-700 rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-pointer border-0 mt-2">Send
                        message
                    </button>
                </form>
            </div>
        </div>

    );
}
