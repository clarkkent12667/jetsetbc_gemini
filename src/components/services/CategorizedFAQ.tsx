"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    title: string;
    items: FAQItem[];
}

interface CategorizedFAQProps {
    categories: FAQCategory[];
}

export function CategorizedFAQ({ categories }: CategorizedFAQProps) {
    const [openCategory, setOpenCategory] = useState<string | null>(categories[0]?.title || null);
    const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({});

    const toggleCategory = (categoryTitle: string) => {
        setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
    };

    const toggleItem = (categoryTitle: string, itemIndex: number) => {
        const key = `${categoryTitle}-${itemIndex}`;
        setOpenItems(prev => ({
            ...prev,
            [categoryTitle]: prev[categoryTitle] === itemIndex ? null : itemIndex
        }));
    };

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h2 className="text-3xl font-heading font-bold text-primary-700 mb-8 md:mb-10 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                            {/* Category Header */}
                            <button
                                onClick={() => toggleCategory(category.title)}
                                className="w-full flex items-center justify-between p-6 text-left bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-primary-700">{category.title}</h3>
                                {openCategory === category.title ? (
                                    <ChevronUp className="w-5 h-5 text-primary-600" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-primary-600" />
                                )}
                            </button>

                            {/* Category Items */}
                            <AnimatePresence>
                                {openCategory === category.title && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-4 space-y-3 bg-white">
                                            {category.items.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-gray-100 rounded-lg overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => toggleItem(category.title, index)}
                                                        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                                                    >
                                                        <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                                                        {openItems[category.title] === index ? (
                                                            <ChevronUp className="w-4 h-4 text-secondary-500 shrink-0" />
                                                        ) : (
                                                            <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                                                        )}
                                                    </button>

                                                    <AnimatePresence>
                                                        {openItems[category.title] === index && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                                                                    {item.answer}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

