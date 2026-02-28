"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Calendar, MapPin } from "lucide-react";

export default function IRC2027Page() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white">
            {/* IRC Hero Section (Mars Theme) */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 bg-[url('/placeholder-mars.jpg')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

                <div className="container relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h4 className="text-red-500 font-bold tracking-widest uppercase mb-4">International Rover Challenge</h4>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                            IRC <span className="text-red-600">2027</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 mb-8">
                            The next frontier in collegiate planetary exploration.
                            Design. Build. Explore.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none">
                                Register Now
                            </Button>
                            <Button size="lg" variant="outline" className="border-red-500/50 text-red-500 hover:bg-red-950/30">
                                Read Rules
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Info Grid */}
            <section className="py-24 bg-zinc-950">
                <div className="container px-4 md:px-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="space-y-4 p-6 border border-zinc-800 rounded-lg hover:border-red-900 transition-colors">
                            <Calendar className="h-10 w-10 text-red-500 mx-auto md:mx-0" />
                            <h3 className="text-2xl font-bold">January 2027</h3>
                            <p className="text-gray-400">The finals will be held in the immersive Mars-like terrain.</p>
                        </div>
                        <div className="space-y-4 p-6 border border-zinc-800 rounded-lg hover:border-red-900 transition-colors">
                            <MapPin className="h-10 w-10 text-red-500 mx-auto md:mx-0" />
                            <h3 className="text-2xl font-bold">PSG Tech, Coimbatore</h3>
                            <p className="text-gray-400">Host to one of the most challenging rover terrains in Asia.</p>
                        </div>
                        <div className="space-y-4 p-6 border border-zinc-800 rounded-lg hover:border-red-900 transition-colors">
                            <Download className="h-10 w-10 text-red-500 mx-auto md:mx-0" />
                            <h3 className="text-2xl font-bold">Rulebook v1.0</h3>
                            <p className="text-gray-400">Download the preliminary rules and technical guidelines.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-black">
                <div className="container px-4 md:px-8 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Road to IRC 2027</h2>
                    <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 md:pl-0 space-y-12">
                        {[
                            { title: "Registration Opens", date: "August 2026", desc: "Team registrations begin worldwide." },
                            { title: "System Design Review", date: "October 2026", desc: "Submission of technical reports and design videos." },
                            { title: "Finalists Announced", date: "November 2026", desc: "Top 30 teams selected for the on-site finals." },
                            { title: "Grand Finale", date: "January 2027", desc: "4 days of rigorous tasks culminating in the award ceremony." }
                        ].map((item, i) => (
                            <div key={i} className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-16">
                                <div className={`hidden md:block text-right ${i % 2 === 0 ? 'order-1' : 'order-2'}`}>
                                    {i % 2 === 0 ? (
                                        <>
                                            <h3 className="text-xl font-bold text-red-500">{item.title}</h3>
                                            <p className="text-gray-400">{item.date}</p>
                                        </>
                                    ) : (
                                        <p className="text-gray-500">{item.desc}</p>
                                    )}
                                </div>

                                <div className="absolute left-[-5px] md:left-1/2 md:-ml-1.5 h-3 w-3 rounded-full bg-red-600 border border-black z-10" />

                                <div className={`md:block ${i % 2 !== 0 ? 'order-1' : 'order-2'}`}>
                                    {i % 2 !== 0 ? (
                                        <>
                                            <h3 className="text-xl font-bold text-red-500">{item.title}</h3>
                                            <p className="text-gray-400">{item.date}</p>
                                        </>
                                    ) : (
                                        <div className="block md:text-left">
                                            <h3 className="md:hidden text-xl font-bold text-red-500">{item.title}</h3>
                                            <p className="md:hidden text-gray-400 mb-2">{item.date}</p>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
