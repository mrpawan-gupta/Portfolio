import React from 'react'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight} from "react-icons/bs"

const Home = () => {
    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: "0",
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: "0",
                opacity: 1,
            }
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br /> Pawan Gupta.
                    </motion.h1>

                    <Typewriter options={{
                        strings:["A Developer", "A Creator", "A Designer"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName:"typewriterpara",
                        /* un comment cursor property if you want black*/
                        // cursor:""
                    }}/>
                    <div>
                        <a href="mailto: guptapawanro2017@gmail.com"> Hire Me</a>
                        <a href='#work'> Projects <BsArrowUpRight /> </a>
                    </div>

                    <article>
                        <p>
                            +<span>100</span>
                        </p>
                        <span>Clients WorldWide</span>
                    </article>

                    <aside>
                        <p>
                            +<span>500</span>
                        </p>
                        <span>Projects Completed WorldWide</span>
                    </aside>
                </div>
            </section>
        </div>
    )
}

export default Home