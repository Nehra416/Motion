import { useState } from "react";
import { motion } from "motion/react"

const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Services",
            href: "/services",
        },
        {
            title: "Contact",
            href: "/contact",
        }
    ];

    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-10">
            <nav onMouseLeave={() => setHovered(null)}
                className="max-w-lg text-lg mx-auto rounded-full bg-white/10 backdrop-blur-xs border border-white/20 shadow-lg p-1 flex items-center gap-3 justify-between">
                {
                    navItems.map((item, idx) => (
                        <a onMouseEnter={() => setHovered(idx)}
                            href={item.href} key={item.title}
                            className="text-neutral-600 relative group px-4 py-1 rounded-full "
                        >
                            {
                                hovered === idx &&
                                <motion.div
                                    layoutId="hover"
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 25,
                                    }}
                                    className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-xl shadow-sm ring- ring-black/5"></motion.div>
                            }
                            <span className={`relative z-10 transition-colors duration-200 ${hovered === idx ? "text-black" : "text-neutral-500/80 hover:text-neutral-600"}`}>{item.title}</span>
                        </a>
                    ))
                }
            </nav>
        </div>
    );
};

export default Navbar;