import { ChartBar, ChevronLeft, ChevronRight, Home, Settings, User } from "lucide-react";
import { useState, type JSX } from "react";
import { motion } from "motion/react";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    type NavLink = { name: string; href: string; icon: JSX.Element };

    const links: NavLink[] = [
        {
            name: "Home",
            href: "/",
            icon: <Home className="h-5 w-5" />,
        },
        {
            name: "Analytics",
            href: "/analytics",
            icon: <ChartBar className="h-5 w-5" />,
        },
        {
            name: "Users",
            href: "/users",
            icon: <User className="h-5 w-5" />,
        },
        {
            name: "Settings",
            href: "/settings",
            icon: <Settings className="h-5 w-5" />,
        },
    ];

    const sidebarVariant = {
        open: {
            width: "14rem"
        },
        closed: {
            width: "3.5rem"
        }
    }

    const childVarients = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y: -10
        }
    }

    const parentVariants = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    return (
        <motion.div className="border-r-2 border-neutral-100 h-screen">
            <motion.nav
                variants={sidebarVariant}
                initial={false}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="bg-white h-full shadow-md overflow-hidden">
                {/* Dashboard & Btn */}
                <div className={`flex items-center justify-between p-4`}>
                    <h2 className={`${open ? "inline" : "hidden"} font-bold text-lg`}>Dashboard</h2>
                    <button
                        onClick={() => setOpen(!open)}
                        className="bg-neutral-100 hover:bg-neutral-200 shadow-md transition p-1 rounded-full"
                    >
                        {open ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </button>
                </div>
                {/* Items */}
                <div className="">
                    <div className={`py-4 ${open ? "px-4" : "px-2"}`}>
                        <motion.ul variants={parentVariants} className="space-y-2">
                            {links.map((link) => (
                                <motion.li variants={childVarients} key={link.name}>
                                    <a
                                        href={link.href}
                                        title={!open ? link.name : undefined}
                                        className="flex items-center gap-2 p-2 text-gray-600 font hover:text-black rounded hover:bg-gray-100"
                                    >
                                        {link.icon}
                                        {open && <span className="ml-1">{link.name}</span>}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </motion.nav>
        </motion.div >
    );
};

export default Sidebar;
