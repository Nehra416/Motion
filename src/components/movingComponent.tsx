import { Camera, Cloud, Palette, Rocket, Shield, Zap } from "lucide-react";
import { useScroll, useTransform, motion, useMotionValueEvent, useMotionTemplate, useSpring } from "motion/react";
import { useRef, useState } from "react";

const MovingComponent = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const backgrounds = ["#0F1117", "#121826", "#151B2E", "#1A1F3C", "#1F2348"];

    const [background, setBackground] = useState(backgrounds[0])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const finalValue = Math.floor(latest * backgrounds.length);
        setBackground(backgrounds[finalValue])
    })

    return (
        <motion.div ref={containerRef}
            animate={{
                background
            }}
            className="flex items-center justify-center bg-neutral-900 text-white min-h-screen w-full ">
            <div className="flex flex-col gap-10 max-w-4xl">
                {
                    features.map((feature) => (
                        <Card key={feature.title} feature={feature} />
                    ))
                }
            </div>
        </motion.div>
    );
};

const Card = ({ feature }: { feature: Feature }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("changed values is: ", latest)
    // })

    const translateContent = useSpring(
        useTransform(scrollYProgress, [0, 1], [-200, 200]),
        {
            stiffness: 120,
            damping: 20,
            // mass: 10
        }
    )
    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

    const blur = useTransform(scrollYProgress, [0.6, 1], [0, 10])
    const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.8])

    return <div ref={ref} key={feature.title} className="grid grid-cols-2 items-center gap-20 py-40">
        <motion.div style={{
            filter: useMotionTemplate`blur(${blur}px)`,
            scale
        }}
            className="flex flex-col gap-5"
        >
            {feature.icon}
            <h2 className="text-4xl font-bold">{feature.title}</h2>
            <p className="text-lg text-neutral-400">{feature.description}</p>
        </motion.div>
        <motion.div
            style={{
                y: translateContent,
                opacity: opacityContent
            }}
        >
            {feature.content}
        </motion.div>
    </div >
}

type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
    content: React.ReactNode
}

const features: Feature[] = [
    {
        icon: <Rocket className="h-8 w-8 text-neutral-200" />,
        title: "Generate ultra realistic images in seconds",
        description:
            "With our state of the art AI, you can generate ultra realistic images in no time at all.",
        content: (
            <div>
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
                    alt="car"
                    height="500"
                    width="500"
                    className="rounded-lg"
                />
            </div>
        ),
    },
    {
        icon: <Camera className="h-8 w-8 text-neutral-200" />,
        title: "Studio-quality photos without a camera",
        description:
            "Create professional, studio-quality images instantly without any photography equipment.",
        content: (
            <div>
                <img
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop"
                    alt="camera"
                    height="500"
                    width="500"
                    className="rounded-lg"
                />
            </div>
        ),
    },
    {
        icon: <Cloud className="h-8 w-8 text-neutral-200" />,
        title: "Cloud-based access",
        description:
            "Access your creations from anywhere with our secure cloud platform.",
        content: (
            <div>
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
                    alt="cloud"
                    height="500"
                    width="500"
                    className="rounded-lg"
                />
            </div>
        ),
    },
    {
        icon: <Palette className="h-8 w-8 text-neutral-200" />,
        title: "Endless creative styles",
        description:
            "Explore cinematic, artistic, and modern design styles with ease.",
        content: (
            <div>
                <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                    alt="art"
                    height="500"
                    width="500"
                    className="rounded-lg"
                />
            </div>
        ),
    },
    {
        icon: <Zap className="h-8 w-8 text-neutral-200" />,
        title: "Lightning-fast generation",
        description:
            "High-quality images generated in seconds using optimized AI models.",
        content: (
            <div>
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                    alt="technology"
                    height="500"
                    width="500"
                    className="rounded-lg"
                />
            </div>
        ),
    },


]

export default MovingComponent;