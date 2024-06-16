import { cn } from "@/lib/utils";
import React from "react";

function TagElement({ children }) {
  return (
    <p className="border border-sponsor-50 rounded-xl p-1 text-xs inline-block">
      {children}
    </p>
  );
}

const BlogListCard = ({
  image_url = "",
  date = "",
  blog_title = "ESIC",
  blog_content = "E-summit NITK blogs",
  tags = [""],
  horizontal = false,
}) => {
  const tagElements = tags.map((tag) => (
    <TagElement key={tag}>{tag}</TagElement>
  ));

  return (
    <div
      className={cn(
        "sm:m-0 overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-br from-blog-50 to-hero-50 flex flex-col",
        horizontal && "grid grid-cols-2 max-sm:flex"
      )}
    >
      <figure className={cn(horizontal && "h-full")}>
        <img
          className="w-full h-full object-cover"
          src={image_url}
          alt={blog_title}
        />
      </figure>

      <div className="flex flex-col">
        <p className="px-4 sm:px-8 py-1">{date}</p>
        <hr />
        <h1 className="text-center text-xl py-2">{blog_title}</h1>
        <p className="line-clamp-4 text-ellipsis px-4 sm:px-8 grow text-justify">
          {blog_content}
        </p>
        <div className="py-4 px-4 sm:px-8 space-x-2">{tagElements}</div>
      </div>
    </div>
  );
};

export default BlogListCard;
