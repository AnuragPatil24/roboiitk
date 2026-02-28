"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, Layers } from "lucide-react";

// Mock Data
const resources = {
    tutorials: [
        { title: "Introduction to ROS 2", desc: "Getting started with nodes, topics, and services.", link: "#" },
        { title: "STM32 Programming Guide", desc: "Setting up HAL and basic GPIO control.", link: "#" },
        { title: "OpenCV Crash Course", desc: "Image processing basics for autonomous navigation.", link: "#" },
    ],
    datasheets: [
        { title: "Arduino Uno R3", type: "Microcontroller", link: "#" },
        { title: "L298N Motor Driver", type: "Motor Driver", link: "#" },
        { title: "MPU6050", type: "IMU Sensor", link: "#" },
    ],
};

export default function ResourcesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[20%] w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container px-4 md:px-8 relative z-10 mx-auto flex flex-col items-center">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 sm:text-5xl">
                        Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Resources</span>
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
                        Curated learning materials, datasheets, and documentation for club members.
                    </p>
                </div>

                {/* Tutorials Section */}
                <section className="mb-20">
                    <div className="flex flex-col items-center gap-3 mb-10 text-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold">Tutorials</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                        {resources.tutorials.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="glass-card text-center hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </CardContent>
                                    <CardFooter className="w-full">
                                        <Button variant="outline" className="w-full gap-2 hover:bg-primary hover:text-primary-foreground group">
                                            <FileText className="h-4 w-4" /> Read Guide
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Datasheets Section */}
                <section className="mb-16">
                    <div className="flex flex-col items-center gap-3 mb-10 text-center">
                        <div className="p-3 bg-green-500/10 rounded-full">
                            <Layers className="h-8 w-8 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-bold">Datasheets</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
                        {resources.datasheets.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="glass-card text-center hover:border-green-500/50 transition-all duration-300 flex flex-col items-center justify-between h-full group">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                        <span className="inline-block px-2 py-1 rounded-full bg-secondary/50 text-xs text-muted-foreground border border-secondary">
                                            {item.type}
                                        </span>
                                    </CardHeader>
                                    <CardFooter className="pt-4 w-full">
                                        <Button variant="ghost" size="sm" className="w-full gap-2 hover:bg-green-500/10 hover:text-green-500">
                                            <Download className="h-4 w-4" /> Download PDF
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
