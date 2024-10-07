import board1 from "../../assets/Boardgames/board1.png";
import board2 from "../../assets/Boardgames/board2.png";
import board3 from "../../assets/Boardgames/board3.jpg";
import board4 from "../../assets/Boardgames/board4.png";
import board5 from "../../assets/Boardgames/board5.png";
import board6 from "../../assets/Boardgames/board6.png";
import board7 from "../../assets/Boardgames/board7.png";
import board8 from "../../assets/Boardgames/board8.png";
import board10 from "../../assets/Boardgames/board10.png";
import bg from "../../assets/Boardgames/bg.jpg";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Boardgame() {
    return (
        <>
            <div className="w-full mt-10 md:mt-0">
                <section className="w-full pt-12 md:pt-24 lg:pt-32">
                    <div className="container mx-auto space-y-10 xl:space-y-16">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                    Discover Our Boardgame Collection
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Explore our diverse selection of captivating boardgames, perfect for game nights, family gatherings, and strategic adventures.
                                </p>
                            </div>
                        </div>
                        <LazyLoadImage
                            alt={"bg"}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "1s" },
                            }}
                            className="mx-auto w-full aspect-[3/1] overflow-hidden rounded-t-xl object-cover object-center shadow-2xl"
                            src={bg} />
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
                        {[
                            { src: board1, title: "Catan", description: "Settle the island of Catan in this classic resource management game." },
                            { src: board2, title: "Ticket to Ride", description: "Connect cities across a map and complete your railway routes." },
                            { src: board3, title: "Pandemic", description: "Work together to contain the spread of deadly diseases across the globe." },
                            { src: board4, title: "Codenames", description: "Compete to make word associations and guess your team's secret code words." },
                            { src: board5, title: "Azul", description: "Collect and place beautiful tiles to decorate the walls of a palace." },
                            { src: board6, title: "Azul", description: "Collect and place beautiful tiles to decorate the walls of a palace." },
                            { src: board7, title: "Azul", description: "Collect and place beautiful tiles to decorate the walls of a palace." },
                            { src: board8, title: "Azul", description: "Collect and place beautiful tiles to decorate the walls of a palace." },
                            { src: board10, title: "Wingspan", description: "Attract and collect birds in this relaxing engine-building game." },
                        ].map((board, index) => (
                            <div key={index} className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 card border border-white bg-white">
                                <a className="absolute inset-0 z-10" href="#">
                                    <span className="sr-only">View</span>
                                </a>
                                <div className="relative overflow-hidden">
                                    <img
                                        src={board.src}
                                        alt={board.title}
                                        width="500"
                                        height="400"
                                        className="object-cover w-full h-48 transition-all duration-300 ease-in-out group-hover:h-32" 
                                        style={{ aspectRatio: '500 / 400', objectFit: 'cover' }}
                                    />
                                    <div className="p-4 bg-background transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-4">
                                        <h3 className="text-xl font-bold">{board.title}</h3>
                                        <p className="text-sm text-muted-foreground">{board.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-6">
                            Stay updated with our latest boardgame collections, special offers, and events. Subscribe now and never miss out!
                        </p>
                        <form className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
                            <input
                                type="email"
                                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
