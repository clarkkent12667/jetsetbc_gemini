"use client";

import { blogPosts } from "@/data/blog-posts";
import { BlogCard } from "./BlogCard";

export function BlogList() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

