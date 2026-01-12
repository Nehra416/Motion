import { ClockFading, HeartPlus, MessagesSquare, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";

const Card = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
                <AnimatePresence>
                    {
                        open &&
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                                filter: "blur(10px)",
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)"
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.8,
                                filter: "blur(10px)",
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}

                            className="w-80 min-h-[29rem] rounded-xl p-4 flex flex-col bg-white
                        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                            <h2 className="font-bold text-xl">Aceternity UI Components</h2>
                            <p className="text-neutral-600 mt-2 text-">A collection of beautiful UI components, let's get on with it.</p>
                            <div className="flex items-center justify-center">
                                <motion.button
                                    whileHover={{
                                        y: -2,
                                    }}
                                    whileTap={{
                                        y: 0
                                    }}
                                    onClick={() => setOpen(false)} className="flex items-center gap-1.5 mt-4 rounded-md py-1 px-2
                            shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                    <img src="./logo.png" alt="logo" className="w-5 h-5" />
                                    Aceternity
                                    <X className="text-neutral-400 h-4 w-4" />
                                </motion.button>
                            </div>
                            <div className="relative bg-gray-100 w-full flex-1 rounded-xl mt-4 border border-dashed border-neutral-200">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.98,
                                        filter: "blur(10px)"
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        scale: 1,
                                        filter: "blur(0px)"
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-white rounded-xl divide-y divide-neutral-200 cursor-default">
                                    {/* Random list related to aceternity UI  */}
                                    <div className="flex gap-2 p-4 hover:bg-gray-100 transition-all duration-300">
                                        <div className="h-8 w-8 flex-shrink-0 bg-gradient-to-br bg-white rounded-md flex items-center justify-center
                                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                            <MessagesSquare className="h-5 w-5 text-neutral-600" />
                                        </div>
                                        <div className="flex flex-col ">
                                            <p className="font-bold text-neutral-600 text-sm">
                                                Aceternity UI Components
                                            </p>
                                            <p className="text-neutral-400 mt-1 text-xs">
                                                A collection of UI components
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 p-4 hover:bg-gray-100 transition-all duration-300">
                                        <div className="h-8 w-8 flex-shrink-0 bg-gradient-to-br bg-white rounded-md flex items-center justify-center
                                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                            <ClockFading className="h-5 w-5 text-neutral-600" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold text-neutral-600 text-sm">
                                                24 hours Support
                                            </p>
                                            <p className="text-neutral-400 mt-1 text-xs">
                                                Lorem ipsum dolor sit amet consectetur.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 p-4 hover:bg-gray-100 transition-all duration-300">
                                        <div className="h-8 w-8 flex-shrink-0 bg-gradient-to-br bg-white rounded-md flex items-center justify-center
                                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                            <HeartPlus className="h-5 w-5 text-neutral-600" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold text-neutral-600 text-sm">
                                                360 days all around
                                            </p>
                                            <p className="text-neutral-400 mt-1 text-xs">
                                                We're here for you all year long.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex group items-center justify-center gap-2 p-4 hover:bg-gray-100 transition-all duration-300">
                                        <div className="h-8 w-8 rounded-full group-hover:rotate-90 transition-all duration-300 flex-shrink-0 bg-gradient-to-br bg-white flex items-center justify-center
                                    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                            <Plus className="h-5 w-5 text-neutral-600" />
                                        </div>
                                        <p className="font-bold text-neutral-500 text-sm mt-1">
                                            Create Project
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </>
    );
};

export default Card;