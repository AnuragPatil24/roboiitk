"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const events = [
    {
        id: 1,
        title: "Robotics 101",
        timing: "August",
        description: "Explore the exciting world of robotics at IIT Kanpur’s introductory session. Enjoy an inspiring lecture, interactive Q&A, and a live demonstration of the impressive SVAN M2 Quadruped Robot in action.",
        type: "Session",
    },
    {
        id: 2,
        title: "Robotics Workshop",
        timing: "August",
        description: "As automation reshapes global industries, understanding the how behind the hardware is essential. This workshop offers a high-level overview of robotic integration in commercial sectors, from logistics to manufacturing.",
        type: "Workshop",
    },
    {
        id: 3,
        title: "RoboBreak",
        timing: "September",
        description: "Robo-break is a competition challenging four-student teams to design and build useful, innovative projects using specific sensors and actuators across presentation and implementation stages.",
        type: "Competition",
    },
    {
        id: 4,
        title: "Robodive",
        timing: "November - Januray",
        description: "Break through the theory and get your hands dirty this winter. Robodive is an intensive, mentor-led program designed to take you from a basic understanding of electronics to deploying fully autonomous systems.This isn't a lecture series—it's a mission. Over 8 weeks, you will work in small squads under the guidance of Sectratories to solve a complex robotics challenge.",
        type: "Mentorship Programme",
    },
    {
        id: 5,
        title: "Robothon",
        timing: "February - March",
        description: "Robothon is a three-stage competition by Robotics Club IITK challenging students to solve agricultural issues using robotics ideation, hardware implementation, and final project development.",
        type: "Competition",
    },
];

export default function EventsPage() {
    // Define color mappings based on event type
    const typeColors: Record<string, { bg: string, text: string, border: string, hover: string }> = {
        "Session": { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20", hover: "group-hover:text-violet-500 hover:border-violet-500/50" },
        "Workshop": { bg: "bg-amber-500/10", text: "text-amber-500", border: "border-amber-500/20", hover: "group-hover:text-amber-500 hover:border-amber-500/50" },
        "Competition": { bg: "bg-rose-500/10", text: "text-rose-500", border: "border-rose-500/20", hover: "group-hover:text-rose-500 hover:border-rose-500/50" },
        "Mentorship Programme": { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/20", hover: "group-hover:text-cyan-500 hover:border-cyan-500/50" },
        "default": { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", hover: "group-hover:text-primary hover:border-primary/50" }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24 relative overflow-hidden">
            {/* AI Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/roboiitk/backgrounds/events-bg.png"
                    alt="Futuristic Robotics Background"
                    fill
                    className="object-cover opacity-10 grayscale-[50%]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[20%] left-[-10%] w-[50rem] h-[50rem] bg-amber-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-8 max-w-5xl mx-auto relative z-10">
                <div className="mb-20 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                        Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-rose-500 to-amber-500 animate-pan-bg bg-[length:200%_auto]">Timeline</span>
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
                        Follow our journey through workshops, competitions, and technical talks.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-rose-500/50 to-transparent md:-ml-0.5" />

                    <div className="space-y-8">
                        {events.map((event, index) => {
                            const colors = typeColors[event.type] || typeColors["default"];
                            return (
                                <motion.div
                                    key={event.id}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-background border-2 rounded-full z-10 -translate-x-1.5 md:-translate-x-2 mt-6 ${colors.border.replace('/20', '')}`}>
                                        <div className={`absolute inset-0 rounded-full animate-ping ${colors.bg}`} />
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 ml-12 md:ml-0">
                                        <Card className={`glass-card transition-all duration-300 group relative overflow-hidden ${colors.hover.split(' ')[1]}`}>
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Calendar className={`h-16 w-16 transform rotate-12 ${colors.text}`} />
                                            </div>

                                            <CardHeader className="pb-2">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border max-w-fit ${colors.bg} ${colors.text} ${colors.border}`}>
                                                        {event.type}
                                                    </span>
                                                    <div className="flex items-center text-sm font-semibold text-accent">
                                                        <Clock className="mr-1.5 h-4 w-4" />
                                                        {event.timing}
                                                    </div>
                                                </div>
                                                <CardTitle className={`text-xl font-bold transition-colors ${colors.hover.split(' ')[0]}`}>{event.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="pb-4">
                                                <CardDescription className="text-sm text-foreground/80 leading-relaxed">
                                                    {event.description}
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
