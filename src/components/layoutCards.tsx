import { useState } from "react"

const LayoutCards = () => {
    const [current, setCurrent] = useState<Card | null>(null);

    return (
        <div className="bg-neutral-100 min-h-screen w-full relative">
            {
                current && (
                    <div className="h-[600px] w-80 rounded-2xl border border-neutral-200 p-4">
                        <img
                            src={current.src}
                            alt={current.title}
                            className="h-60 aspect-square rounded-xl"
                        />

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col items-start gap-2">
                                <div className="flex flex-col items-start gap-2">
                                    <h2 className="font-bold text-xs tracking-tight" >
                                        {current.title}
                                    </h2>
                                    <p className="text-[10px] text-neutral-500">
                                        {current.description}
                                    </p>
                                </div>
                                <link href={current.ctaLink}
                                    className="bg-green-500 text-white py-1 px-4 text-sm rounded-full"
                                >
                                    {current.ctaText}
                                </link>
                            </div>
                            <div className="h-40 overflow-auto">
                                {current.content()}
                            </div>
                        </div>
                    </div>
                )
            }

            <div className="max-w-xl m-auto py-6 flex flex-col gap-5" >
                {
                    cards.map(card => {
                        return (
                            <button onClick={() => setCurrent(card)} key={card.title}
                                className="flex items-center justify-between w-full bg-white border-[1.5px] border-neutral-200 shadow rounded-xl p-4 cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <img src={card.src} alt={card.title} className="rounded-xl aspect-square w-16" />
                                    <div className="flex flex-col items-start gap-2">
                                        <h2 className="font-bold text-lg tracking-tight">{card.title}</h2>
                                        <p className="text-neutral-500 text-xs">{card.description}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-green-500 text-white py-1 px-4 text-sm rounded-full">
                                        {card.ctaText}
                                    </button>
                                </div>
                            </button>
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
        src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
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
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
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
        src: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
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
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
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
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
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