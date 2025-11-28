import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Jetset Business Center`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main>
            <PageHero
                title={post.title}
                image={post.image}
                height="h-[50vh]"
            />

            <article className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8 border-b border-gray-100 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary-600" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-primary-600" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag className="w-5 h-5 text-primary-600" />
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary-700 prose-p:text-gray-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
                        {post.content ? (
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        ) : (
                            <>
                                <p className="text-xl leading-relaxed mb-8 font-medium text-gray-800">
                                    {post.excerpt}
                                </p>
                                
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 my-8">
                                    <p className="italic text-gray-500 text-center">
                                        The full content for this article is coming soon. We are currently updating our blog with the latest insights from Dubai's business world.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </article>
        </main>
    );
}

