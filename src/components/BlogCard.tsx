import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export type BlogCardProps = {
  id: string;
  cover: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ id, cover, title, excerpt, author, date }) => (
  <Link
    to={`/blog/${id}`}
    className="glass-card transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full"
    style={{ textDecoration: "none" }}
  >
    <img src={cover} alt={title} className="w-full h-48 object-cover" />
    <div className="flex flex-col flex-1 p-5">
      <h3 className="text-2xl font-bold mb-2 hero-glow">{title}</h3>
      <p className="text-base text-gray-300 mb-4 flex-1">{excerpt}</p>
      <div className="flex items-center justify-between mt-auto text-sm text-text-muted">
        <span className="font-semibold text-neon-purple">{author}</span>
        <span className="text-text-muted">{date}</span>
      </div>
    </div>
  </Link>
);

export default BlogCard;
