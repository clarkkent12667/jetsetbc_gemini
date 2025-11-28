"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

interface ImageGalleryProps {
    images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative rounded-xl overflow-hidden shadow-md h-64 cursor-pointer"
                        onClick={() => setIndex(i)}
                    >
                        <img
                            src={src}
                            alt={`Gallery Image ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={images.map((src) => ({ src }))}
            />
        </>
    );
}
