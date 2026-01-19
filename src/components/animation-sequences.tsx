import type { AnimationSequence } from "motion";
import { useAnimate, motion, easeInOut } from "motion/react";

const AnimationSequences = () => {
    const [scope, animate] = useAnimate();

    // const sequence: AnimationSequence = [
    //     [".loader", { width: "2rem" }, { duration: 0.1, at: "-0.1" }]
    // ]

    const startAnimating = async () => {
        // animate(sequence)

        await animate(".loader",
            {
                width: "2rem"
            },
            {
                duration: 0.1
            }
        )
        await animate(".loader",
            {
                rotate: 360 * 3,
            },
            {
                duration: 1,
                repeatType: "loop"
            }
        )
        animate(".loader",
            {
                opacity: 0,
                scale: 0
            },
            {
                duration: 2
            }
        )
        animate(".text",
            { display: "none" },
            { duration: 0.1 }
        )
        await animate("button",
            { width: "4rem", borderRadius: "1000px" },
            { duration: 0.8 }
        )
        animate("button",
            {
                scale: [1, 1.06, 0.98, 1],
                backgroundImage: "linear-gradient(to right, #159957, #1DB954)",
                boxShadow: ["0px 5px 20px rgba(29, 185, 84, 0.55)"]
            },
            { duration: 0.8 }
        )
        animate(".check-icon",
            { opacity: 1 },
            { duration: 0.1 }
        )
        animate(".check-icon path",
            { pathLength: 1 },
            { duration: 0.3 }
        )
    };

    return (
        <div ref={scope}>
            <motion.button
                onClick={startAnimating}
                whileHover={{
                    boxShadow: "0px 6px 24px rgba(44, 83, 100, 0.45)"
                }}
                whileTap={{
                    scale: 0.98
                }}
                style={{
                    width: "20rem"
                }}
                // py-5 px-10 this will create problem in animate, pura shrink nahi hoga
                className="h-16 rounded-lg flex items-center justify-center gap-3 bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white font-medium cursor-pointer"
            >
                {/* Loader SVG */}
                <motion.svg width="20" height="20" viewBox="0 0 50 50"
                    className="loader"
                    initial={{
                        width: "0rem"
                    }}
                    xmlns="http://www.w3.org/2000/motion.">
                    <circle cx="25" cy="25" r="20"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-dasharray="31.4 31.4">
                    </circle>
                </motion.svg>

                <span className="text text-lg">Purchase Now ($160)</span>
            </motion.button>

            {/* Tick mark svg */}
            <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                style={{ opacity: 0 }}
                className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M5 13L9 17L19 7"
                    initial={{
                        pathLength: 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </motion.svg>
        </div >


    );
};

export default AnimationSequences;