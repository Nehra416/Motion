import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

const useOutSideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [callback])

    return ref;
}

const LayoutCards = () => {
    const [current, setCurrent] = useState<Card | null>(null);

    // Remove when click outside of the selected card
    const ref = useOutSideClick(() => setCurrent(null));

    return (
        <div className="bg-gray-100 min-h-screen w-full relative">
            {/* Blur Effect */}
            {current && <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm"></motion.div>}
            {/* Display the select card */}
            {
                current && (
                    <motion.div
                        layoutId={`card-${current.title}`}
                        ref={ref} className="h-130 fixed inset-0 m-auto w-96 z-20 bg-white rounded-2xl border border-neutral-200 p-4">
                        <motion.img
                            layoutId={`card-img-${current.title}`}
                            src={current.src}
                            alt={current.title}
                            className="aspect-square rounded-xl m-auto h-60 w-full"
                        />

                        <div className="flex flex-col space-y-5 mt-5 justify-between items-center">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-col items-start gap-2">
                                    <motion.h2
                                        layoutId={`card-title-${current.title}`}
                                        className="font-bold tracking-tight" >
                                        {current.title}
                                    </motion.h2>
                                    <motion.p
                                        layoutId={`card-des-${current.title}`}
                                        className="text-sm text-neutral-500">
                                        {current.description}
                                    </motion.p>
                                </div>
                                <motion.a
                                    layoutId={`card-cta-${current.title}`}
                                    href={current.ctaLink}
                                    className="bg-green-500 text-white py-1 px-4 rounded-full"
                                >
                                    {current.ctaText}
                                </motion.a>
                            </div>
                            <motion.div
                                initial={{
                                    filter: "blur(10px)",
                                    opacity: 0
                                }}
                                animate={{
                                    filter: "blur(0px)",
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 0.3
                                }}
                                className="h-50 text-sm pb-24 overflow-auto mask-[linear-gradient(to_top,transparent_20%,black_90%)]">
                                {current.content()}
                            </motion.div>
                        </div>
                    </motion.div>
                )
            }

            {/* Show list of cards */}
            <div className="max-w-xl m-auto py-6 flex flex-col gap-5" >
                {
                    cards.map(card => {
                        return (
                            <motion.button layoutId={`card-${card.title}`}
                                onClick={() => setCurrent(card)} key={card.title}
                                className="flex items-center justify-between w-full bg-white border-[1.5px] border-neutral-200 shadow rounded-xl p-4 cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <motion.img
                                        layoutId={`card-img-${card.title}`}
                                        src={card.src} alt={card.title}
                                        className="rounded-xl aspect-square w-16 object-fill shadow-md" />
                                    <div className="flex flex-col items-start gap-2">
                                        <motion.h2
                                            layoutId={`card-title-${card.title}`}
                                            className="font-bold text-lg tracking-tight"
                                        >
                                            {card.title}
                                        </motion.h2>
                                        <motion.p
                                            layoutId={`card-des-${card.title}`}
                                            className="text-neutral-500 text-xs"
                                        >
                                            {card.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div>
                                    <motion.div
                                        layoutId={`card-cta-${card.title}`}
                                        className="bg-green-500 text-white py-1 px-4 text-sm rounded-full">
                                        {card.ctaText}
                                    </motion.div>
                                </div>
                            </motion.button>
                        )
                    })
                }
            </div >
        </div >
    );
};

type Card = {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => React.ReactNode;
}

const cards: Card[] = [
    {
        description: "Sidhu Moose Wala",
        title: "So High",
        src: "https://img.youtube.com/vi/GgmFC8y8q3k/maxresdefault.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-neutral-500">
                    “So High” marked Sidhu Moose Wala’s explosive entry into the Punjabi
                    music scene. The song reflects confidence, ambition, and the hunger
                    to rise above societal limits. <br /> <br />
                    With bold lyrics and a powerful hip-hop vibe, this track established
                    Sidhu as a fearless voice of the youth and laid the foundation for
                    his legendary career.
                </p>
            )
        }
    },
    {
        description: "Sidhu Moose Wala",
        title: "295",
        src: "https://img.youtube.com/vi/RTwknWM68oE/maxresdefault.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-neutral-500">
                    “295” is a deeply introspective and socially charged song that
                    addresses freedom of expression and systemic injustice. <br /> <br />
                    Through sharp lyrics and emotional depth, Sidhu Moose Wala questions
                    authority while giving voice to the struggles and frustrations of the
                    common people.
                </p>
            )
        }
    },
    {
        description: "Sidhu Moose Wala",
        title: "Same Beef",
        src: "https://img.youtube.com/vi/qk2WMmiiVFE/maxresdefault.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-neutral-500">
                    “Same Beef” represents Sidhu Moose Wala’s unapologetic stance against
                    rivals and critics. The song is packed with attitude, realism, and
                    raw street energy. <br /> <br />
                    It became an anthem for standing one’s ground and staying loyal to
                    one’s roots despite opposition.
                </p>
            )
        }
    },
    {
        description: "Sidhu Moose Wala",
        title: "The Last Ride",
        src: "https://img.youtube.com/vi/6xoB4ZiKKn0/maxresdefault.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-neutral-500">
                    “The Last Ride” is an emotional and reflective track inspired by themes
                    of legacy, mortality, and self-realization. <br /> <br />
                    The song showcases Sidhu’s deeper philosophical side, making listeners
                    reflect on fame, destiny, and the meaning of life.
                </p>
            )
        }
    },
    {
        description: "Sidhu Moose Wala",
        title: "Just Listen",
        src: "https://img.youtube.com/vi/rMQ_TUEwQEs/maxresdefault.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-neutral-500">
                    “Just Listen” highlights Sidhu Moose Wala’s lyrical dominance and
                    commanding presence in Punjabi hip-hop. <br /> <br />
                    The track emphasizes confidence, self-belief, and the power of words,
                    reinforcing his status as one of the most influential artists of his
                    generation.
                </p>
            )
        }
    }
]

export default LayoutCards;