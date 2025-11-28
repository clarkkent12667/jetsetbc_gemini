"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
        >
            <Link href={`/blog/${post.slug}`} className="block relative h-60 overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>

                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-auto"
                >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.article>
    );
}

