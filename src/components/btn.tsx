import { motion } from "motion/react"

const Btn = () => {
    return (
        <div className="[perspective:1000px] [transform-style:preserve-3d] flex justify-center items-center w-full min-h-screen bg-neutral-900"
            style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
                backgroundSize: `25px 25px`,
                backgroundRepeat: "repeat"
            }}>
            <motion.button className="relative group text-neutral-500 bg-black px-10 py-4 rounded-xl 
            shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    // rotate: [0, 15, 0]
                }}
                whileHover={{
                    rotateX: 25,
                    rotateY: 10,
                    boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
                    y: -3
                }}
                whileTap={{
                    y: 0
                }}
                style={{
                    translateZ: 100
                }}
                transition={{
                    duration: 0.3
                }}
            >
                Nehra 416
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 m-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-px transition-opacity duration-300 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-1 w-full m-auto blur-sm"></span>
            </motion.button>
        </div>
    );
};

export default Btn;