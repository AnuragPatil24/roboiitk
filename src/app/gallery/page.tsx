"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Mock Data
const galleryData = {
    "RoboWeek 2025": [
        "/placeholder-1.jpg", "/placeholder-2.jpg", "/placeholder-3.jpg", "/placeholder-4.jpg"
    ],
    "Inter-IIT 2024": [
        "/placeholder-5.jpg", "/placeholder-6.jpg", "/placeholder-7.jpg"
    ],
    "Workshops": [
        "/placeholder-8.jpg", "/placeholder-9.jpg"
    ]
};

export default function GalleryPage() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", ...Object.keys(galleryData)];

    // Flatten for "All" view or filter
    const displayedImages = filter === "All"
        ? Object.entries(galleryData).flatMap(([cat, imgs]) => imgs.map(img => ({ src: img, cat })))
        : galleryData[filter as keyof typeof galleryData].map(img => ({ src: img, cat: filter }));

    return (
        <div className="flex flex-col min-h-screen bg-background py-16 md:py-24">
            <div className="container px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Gallery</h1>
                    <p className="text-muted-foreground">Capturing moments of innovation and teamwork.</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "default" : "outline"}
                            onClick={() => setFilter(cat)}
                            size="sm"
                            className="rounded-full"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Masonry Grid Simulation */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                    {displayedImages.map((item, index) => (
                        <motion.div
                            key={`${item.cat}-${index}`}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="break-inside-avoid relative group rounded-xl overflow-hidden bg-muted"
                        >
                            <div className="aspect-[3/4] md:aspect-auto w-full relative">
                                {/* Placeholder Image */}
                                <div className="w-full h-64 bg-secondary/30 flex items-center justify-center text-muted-foreground text-xs">
                                    {item.cat} Image
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white text-sm font-medium">{item.cat}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
