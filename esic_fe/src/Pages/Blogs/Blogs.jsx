import React from "react";
import BlogListGrid from "@/components/Blog/BlogListGrid";
import BlogListCard from "@/components/Blog/BlogListCard";
import { Link } from "react-router-dom";

function BlogPageTitle({ children }) {
  return (
    <h1
      className="p-8 bg-blog-50 text-xl tracking-wider relative hover:tracking-widest cursor-pointer
                transition-all hover:text-sponsor-50
                before:content-normal before:absolute before:h-1
                before:bg-white before:w-3 before:top-2/3 hover:before:w-10
                hover:before:bg-sponsor-50 before:transition-all"
    >
      {children}
    </h1>
  );
}

export function Blogs() {
  const featuredCard = {
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujiuIp40oRg8BHrZPURhWblHvAX4XKMcVxA&s",
    date: "11 July 2024",
    blog_title: "Scaling up",
    blog_content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate itaque omnis est molestias provident, nesciunt soluta vitae, quia earum maxime sapiente repellat debitis. Qui eum delectus eveniet molestias voluptates laudantium.",
    tags: ["Entrepreneurship", "startup"],
  };

  return (
    <>
      <BlogPageTitle>FEATURED</BlogPageTitle>
      <div className="px-8 bg-blog-50">
        <BlogListCard {...featuredCard} horizontal />
      </div>
      <BlogPageTitle>Recent Blogs</BlogPageTitle>
      <BlogListGrid />
      <div className="grid place-items-center p-8 bg-gradient bg-gradient-to-tr from-blog-50 to-blog-100">
        <Link
          to="#"
          className="text-sm border p-4 hover:bg-white hover:text-blog-50 transition"
        >
          Load More...
        </Link>
      </div>
    </>
  );
}
