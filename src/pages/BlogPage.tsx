import React from "react";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blogPosts";
import "../index.css";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--deep-bg)] pt-36 pb-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-14 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold hero-glow mb-4">APV E-CELL Blogs</h1>
          <p className="text-xl md:text-2xl text-neon-purple font-medium mb-4">Insights for the next generation of innovators</p>
          <img src="./Blog_hero.png" alt="Blog Hero" className="w-full max-w-4xl rounded-2xl shadow-xl mb-8 object-cover h-60 md:h-60" />
        </section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
