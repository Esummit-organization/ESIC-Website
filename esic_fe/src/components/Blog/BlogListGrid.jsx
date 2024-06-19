import React from "react";
import BlogListCard from "./BlogListCard";

const BlogListGrid = () => {
  const blogs = [
    {
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujiuIp40oRg8BHrZPURhWblHvAX4XKMcVxA&s",
      date: "11 July 2024",
      blog_title: "Fixed-Power Designs:It's Not IF You Peek, It's what u peak at",
      blog_content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate itaque omnis est molestias provident, nesciunt soluta vitae, quia earum maxime sapiente repellat debitis. Qui eum delectus eveniet molestias voluptates laudantium.",
      tags: ["Entrepreneurship", "startup"],
    },
  ];

  return (
    <div className="grid grid-cols-1 bg-gradient bg-gradient-to-br from-blog-50 to-blog-100 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-8 lg:px-20 xl:px-40">
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <BlogListCard {...blogs[0]} key={i} />
        ))}
    </div>
  );
};

export default BlogListGrid;
