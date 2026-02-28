"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const competitions = [
    {
        id: "inter-iit",
        title: "Inter-IIT Tech Meet",
        description: "The ultimate battle of technical prowess among all IITs. We participate in high-stakes robotics problem statements ranging from DRDO challenges to autonomous navigation.",
        status: "Annual",
    },
    {
        id: "robocon",
        title: "ABU Robocon",
        description: "An international robotics competition. Teams build robots to perform tasks based on a specific theme relevant to the host country's culture.",
        status: "International",
    },
    {
        id: "urc",
        title: "University Rover Challenge (URC)",
        description: "Held in the Mars Desert Research Station, Utah. We design and build the next generation of Mars Rovers to assist astronauts.",
        status: "International",
    },
    {
        id: "sauvc",
        title: "SAUVC",
        description: "Singapore AUV Challenge. Developing autonomous underwater vehicles to perform visual recognition and manipulation tasks.",
        status: "International",
    },
];

export default function CompetitionsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cta/5 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                        Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Competitions</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                        The arenas where we prove our mettle. From desert rovers to underwater autonomous vehicles.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {competitions.map((comp, index) => (
                        <motion.div
                            key={comp.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full glass-card hover:border-blue-500/50 transition-all duration-300 flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Trophy className="h-24 w-24 text-primary transform rotate-12" />
                                </div>
                                <CardContent className="p-8 flex flex-col gap-6 flex-1 relative z-10">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-shrink-0 bg-gradient-to-br from-primary/20 to-blue-500/10 p-4 rounded-2xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                            <Trophy className="h-8 w-8 text-primary" />
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${comp.status === "International"
                                                ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                                : "bg-green-500/10 text-green-400 border-green-500/20"
                                            }`}>
                                            {comp.status}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{comp.title}</h3>
                                        <p className="text-muted-foreground text-base leading-relaxed">
                                            {comp.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 mt-auto">
                                        <Button variant="outline" className="w-full gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 group-hover:text-primary transition-all">
                                            View Details <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
