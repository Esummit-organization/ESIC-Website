import { cn } from "@/lib/utils";
import React from "react";

function TagElement({ children }) {
  return (
    <p className="border border-sponsor-50  bg-sponsor-50 bg-opacity-20 rounded-xl p-[6px] text-xs inline-block">
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
        "sm:m-0 overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-br from-blog-50 to-hero-50 flex flex-col hover:-translate-y-3 transition-all duration-200 ease-in-out cursor-pointer",
        horizontal && "grid grid-cols-2 max-sm:flex "
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
        <p className="px-4 text-sm sm:px-8 py-[8px]">{date}</p>
        <div className="px-8"><hr className="bt-2 border-sponsor-50"/></div>
        <h1 className="text-left text-sponsor-50 font-semibold text-xl px-4 sm:px-8 py-2">{blog_title}</h1>
        <p className="line-clamp-4 text-gray-300 text-ellipsis px-4 sm:px-8 grow text-left">
          {blog_content}
        </p>
        <div className="flex flex-row py-4 px-4 sm:px-8 gap-2 flex-wrap">{tagElements}</div>
      </div>
    </div>
  );
};

export default BlogListCard;
