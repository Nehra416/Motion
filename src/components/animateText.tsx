import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";

const AnimateText = () => {
    const [scope, animate] = useAnimate();

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos rerum expedita fugiat exercitationem veniam eum neque dolores, reiciendis et?";

    // when we don't use btn
    // useEffect(() => {
    //     startAnimating();
    // }, [])

    const startAnimating = () => {
        animate("span",
            {
                opacity: 1,
                filter: "blur(0px)",
                y: 0
            },
            {
                duration: 0.5,
                ease: "easeInOut",
                delay: stagger(0.02)
            }
        )
    }

    return (
        <div ref={scope} className="max-w-4xl font-bold text-3xl">
            {/* <motion.span
                style={{
                    opacity: 0
                }}
            >
                {text}
            </motion.span> */}
            <button
                onClick={startAnimating}
                className="bg-neutral-800 hover:bg-neutral-900 transition active:scale-105 px-4 py-2 rounded-md cursor-pointer mb-4"
            >
                Reveal Text
            </button>
            <br />
            {
                text.split(" ").map((word, index) => (
                    <motion.span
                        style={{
                            opacity: 0,
                            filter: "blur(10px",
                            y: 10
                        }}
                        key={word + index}
                        className="inline-block"
                    >
                        {word} &nbsp;
                    </motion.span>
                ))
            }
        </div>
    );
};

export default AnimateText;